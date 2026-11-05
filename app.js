// Main Application Logic for Math 8 Practice Portal
class MathApp {
  constructor() {
    this.data = EXAM_DATA;
    this.currentExamId = 'all'; // 'all' | 'de1' | 'de2' | 'de3'
    this.currentMode = 'practice'; // 'practice' | 'exam' | 'review-wrong'
    this.currentTab = 'all'; // 'all' | 'part1' | 'part2' | 'part3' | 'part4'
    this.submitted = false;
    this.answers = {
      part1: {},
      part2: {},
      part3: {}
    };
    this.wrongQuestionIds = new Set();
    this.bookmarks = new Set();
    this.timerSeconds = 90 * 60; // 90 minutes
    this.timerInterval = null;
    this.timerRunning = false;
    this.soundEnabled = true;

    // Load persisted state from localStorage
    this.loadState();

    // Prepare questions based on currentExamId
    this.loadExamQuestions();

    this.init();
  }

  // Load questions for currentExamId ('all', 'de1', 'de2', 'de3')
  loadExamQuestions() {
    if (this.currentExamId === 'all') {
      this.questions = {
        part1: [...this.data.part1],
        part2: [...this.data.part2],
        part3: [...this.data.part3],
        part4: [...this.data.part4]
      };
      this.examInfo = {
        code: "ĐỀ CƯƠNG ÔN TẬP",
        title: "ĐỀ CƯƠNG ÔN TẬP GIỮA HỌC KÌ 1 – TOÁN 8",
        timeMinutes: 90
      };
    } else {
      const exam = PRACTICE_EXAMS.find(e => e.id === this.currentExamId) || PRACTICE_EXAMS[0];
      this.examInfo = exam;
      this.questions = {
        part1: exam.part1Ids.map(id => this.data.part1.find(q => q.id === id)).filter(Boolean),
        part2: exam.part2Ids.map(id => this.data.part2.find(q => q.id === id)).filter(Boolean),
        part3: exam.part3Ids.map(id => this.data.part3.find(q => q.id === id)).filter(Boolean),
        part4: exam.part4.map(b => ({
          number: b.num,
          title: b.title,
          description: b.description,
          svgKey: b.svgKey,
          subItems: b.subItems.map(item => ({
            num: item.sub,
            problem: item.problem,
            solution: item.solution,
            points: item.points
          }))
        }))
      };
    }
  }

  setExam(examId) {
    this.currentExamId = examId;
    this.submitted = false;
    this.loadExamQuestions();
    this.timerSeconds = (this.examInfo.timeMinutes || 90) * 60;
    this.stopTimer();

    // Update active UI tabs for exams
    document.querySelectorAll('.exam-tab-btn').forEach(btn => {
      if (btn.dataset.exam === examId) {
        btn.className = 'exam-tab-btn px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 text-white shadow-md transition-all shrink-0';
      } else {
        btn.className = 'exam-tab-btn px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shrink-0';
      }
    });

    // Update title banner if present
    const bannerEl = document.getElementById('current-exam-title');
    if (bannerEl) {
      bannerEl.textContent = this.examInfo.title;
    }

    this.render();
    this.updateStats();
    if (this.currentMode === 'exam') {
      this.startTimer();
    }
  }

  init() {
    this.bindEvents();
    this.render();
    this.updateStats();
    if (this.currentMode === 'exam' && !this.submitted) {
      this.startTimer();
    }
  }

  // Local storage management
  saveState() {
    try {
      const state = {
        answers: this.answers,
        submitted: this.submitted,
        currentMode: this.currentMode,
        currentExamId: this.currentExamId,
        wrongQuestionIds: Array.from(this.wrongQuestionIds),
        bookmarks: Array.from(this.bookmarks),
        timerSeconds: this.timerSeconds
      };
      localStorage.setItem('math8_exam_state', JSON.stringify(state));
    } catch (e) {
      console.warn('Storage quota exceeded or disabled', e);
    }
  }

  loadState() {
    try {
      const raw = localStorage.getItem('math8_exam_state');
      if (raw) {
        const state = JSON.parse(raw);
        if (state.answers) this.answers = state.answers;
        if (state.submitted !== undefined) this.submitted = state.submitted;
        if (state.currentMode) this.currentMode = state.currentMode;
        if (state.currentExamId) this.currentExamId = state.currentExamId;
        if (state.wrongQuestionIds) this.wrongQuestionIds = new Set(state.wrongQuestionIds);
        if (state.bookmarks) this.bookmarks = new Set(state.bookmarks);
        if (state.timerSeconds) this.timerSeconds = state.timerSeconds;
      }
    } catch (e) {
      console.warn('Error reading localStorage', e);
    }
  }

  clearState() {
    localStorage.removeItem('math8_exam_state');
    this.answers = { part1: {}, part2: {}, part3: {} };
    this.submitted = false;
    this.timerSeconds = 90 * 60;
    this.stopTimer();
    this.timerRunning = false;
  }

  // Audio synthesis
  playSound(type) {
    if (!this.soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'correct') {
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880, now + 0.1); // A5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.setValueAtTime(220, now + 0.15);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'click') {
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  // Timer logic
  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerRunning = true;
    this.timerInterval = setInterval(() => {
      if (this.timerSeconds > 0) {
        this.timerSeconds--;
        this.updateTimerDisplay();
        if (this.timerSeconds % 10 === 0) this.saveState();
      } else {
        this.stopTimer();
        alert('Đã hết thời gian làm bài! Hệ thống sẽ tự động nộp bài.');
        this.submitExam();
      }
    }, 1000);
    this.updateTimerDisplay();
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.timerRunning = false;
    this.updateTimerDisplay();
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  updateTimerDisplay() {
    const formatted = this.formatTime(this.timerSeconds);
    const isUrgent = this.timerSeconds < 300;

    const els = [
      document.getElementById('timer-display'),
      document.getElementById('mobile-timer-display')
    ];

    els.forEach(el => {
      if (el) {
        el.textContent = formatted;
        if (isUrgent) {
          el.classList.add('text-red-500', 'animate-pulse');
        } else {
          el.classList.remove('text-red-500', 'animate-pulse');
        }
      }
    });
  }

  // Event Listeners
  bindEvents() {
    // Exam tab buttons (Đề cương vs Đề 1, Đề 2, Đề 3)
    document.querySelectorAll('.exam-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const examId = e.currentTarget.dataset.exam;
        this.setExam(examId);
      });
    });

    // Mode switcher buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mode = e.currentTarget.dataset.mode;
        this.setMode(mode);
      });
    });

    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        this.setTab(tab);
      });
    });

    // Action buttons
    const submitBtns = [document.getElementById('btn-submit'), document.getElementById('btn-submit-mobile')];
    submitBtns.forEach(btn => btn?.addEventListener('click', () => this.submitExam()));

    document.getElementById('btn-reset')?.addEventListener('click', () => {
      if (confirm('Bạn có chắc muốn xóa toàn bộ câu trả lời và làm lại từ đầu không?')) {
        this.resetExam();
      }
    });

    document.getElementById('btn-shuffle')?.addEventListener('click', () => {
      if (confirm('Trộn lại thứ tự câu hỏi và phương án để luyện tập lại?')) {
        this.shuffleQuestions();
      }
    });

    // Mobile Navigation Drawer Toggle
    const navToggles = [
      document.getElementById('btn-toggle-nav'),
      document.getElementById('btn-toggle-nav-bottom')
    ];
    navToggles.forEach(btn => {
      btn?.addEventListener('click', () => {
        const panel = document.getElementById('nav-drawer');
        panel?.classList.toggle('hidden');
      });
    });

    document.getElementById('btn-close-drawer')?.addEventListener('click', () => {
      document.getElementById('nav-drawer')?.classList.add('hidden');
    });

    // Close mobile drawer when clicking backdrop
    document.getElementById('nav-drawer')?.addEventListener('click', (e) => {
      if (e.target.id === 'nav-drawer') {
        document.getElementById('nav-drawer').classList.add('hidden');
      }
    });

    // Export Modal Controls
    const exportOpenBtns = [
      document.getElementById('btn-open-export'),
      document.getElementById('btn-open-export-mobile')
    ];
    exportOpenBtns.forEach(btn => {
      btn?.addEventListener('click', () => {
        this.openExportModal();
      });
    });

    document.getElementById('btn-close-export')?.addEventListener('click', () => {
      document.getElementById('modal-export')?.classList.add('hidden');
    });

    document.getElementById('modal-export')?.addEventListener('click', (e) => {
      if (e.target.id === 'modal-export') {
        document.getElementById('modal-export').classList.add('hidden');
      }
    });

    document.getElementById('btn-export-print')?.addEventListener('click', () => {
      const examId = document.getElementById('export-exam-select')?.value || this.currentExamId;
      const role = document.querySelector('input[name="export-role"]:checked')?.value || 'student';
      ExportUtils.printExam(examId, role);
    });

    document.getElementById('btn-export-word')?.addEventListener('click', () => {
      const examId = document.getElementById('export-exam-select')?.value || this.currentExamId;
      const role = document.querySelector('input[name="export-role"]:checked')?.value || 'student';
      ExportUtils.downloadWord(examId, role);
    });

    // Dark mode toggle
    document.getElementById('btn-theme-toggle')?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('math8_theme', isDark ? 'dark' : 'light');
    });

    // Init dark mode from stored pref or system
    if (localStorage.getItem('math8_theme') === 'dark' || 
        (!localStorage.getItem('math8_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  }

  openExportModal() {
    const modal = document.getElementById('modal-export');
    if (!modal) return;
    const select = document.getElementById('export-exam-select');
    if (select) {
      select.value = this.currentExamId;
    }
    modal.classList.remove('hidden');
  }

  setMode(mode) {
    this.currentMode = mode;
    this.saveState();
    
    // UI update
    document.querySelectorAll('.mode-btn').forEach(b => {
      if (b.dataset.mode === mode) {
        b.className = 'mode-btn px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 text-white shadow-md flex items-center gap-1.5 transition-all shrink-0';
      } else {
        b.className = 'mode-btn px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-all shrink-0';
      }
    });

    if (mode === 'exam' && !this.submitted) {
      this.startTimer();
    } else {
      this.stopTimer();
    }

    this.render();
  }

  setTab(tab) {
    this.currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => {
      if (b.dataset.tab === tab) {
        b.className = 'tab-btn px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border-b-2 border-indigo-600 transition-all shrink-0';
      } else {
        b.className = 'tab-btn px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all shrink-0';
      }
    });
    this.render();
  }

  // Selection actions
  selectPart1(qid, optionKey) {
    if (this.submitted && this.currentMode === 'exam') return;
    this.answers.part1[qid] = optionKey;
    this.playSound('click');

    const q = this.questions.part1.find(item => item.id === qid);
    if (q) {
      if (optionKey === q.correct) {
        this.wrongQuestionIds.delete(qid);
        if (this.currentMode === 'practice') this.playSound('correct');
      } else {
        this.wrongQuestionIds.add(qid);
        if (this.currentMode === 'practice') this.playSound('wrong');
      }
    }

    this.saveState();
    this.renderPart1Item(qid);
    this.updateStats();
    this.renderQuickNav();
  }

  selectPart2(qid, itemKey, boolVal) {
    if (this.submitted && this.currentMode === 'exam') return;
    if (!this.answers.part2[qid]) {
      this.answers.part2[qid] = {};
    }
    this.answers.part2[qid][itemKey] = boolVal;
    this.playSound('click');

    const q = this.questions.part2.find(item => item.id === qid);
    if (q) {
      const subItem = q.items.find(i => i.key === itemKey);
      if (subItem) {
        if (boolVal === subItem.correct) {
          if (this.currentMode === 'practice') this.playSound('correct');
        } else {
          this.wrongQuestionIds.add(qid);
          if (this.currentMode === 'practice') this.playSound('wrong');
        }
      }
    }

    this.saveState();
    this.renderPart2Item(qid);
    this.updateStats();
    this.renderQuickNav();
  }

  inputPart3(qid, value) {
    if (this.submitted && this.currentMode === 'exam') return;
    this.answers.part3[qid] = value.trim();
    this.saveState();
    this.updateStats();
    this.renderQuickNav();
  }

  checkPart3Single(qid) {
    const q = this.questions.part3.find(i => i.id === qid);
    if (!q) return;
    const userVal = (this.answers.part3[qid] || '').toLowerCase().replace(/\s+/g, '');
    const isCorrect = q.validAnswers.some(ans => ans.toLowerCase().replace(/\s+/g, '') === userVal);

    if (isCorrect) {
      this.wrongQuestionIds.delete(qid);
      this.playSound('correct');
    } else {
      this.wrongQuestionIds.add(qid);
      this.playSound('wrong');
    }
    this.saveState();
    this.renderPart3Item(qid, true);
    this.renderQuickNav();
  }

  toggleBookmark(qid) {
    if (this.bookmarks.has(qid)) {
      this.bookmarks.delete(qid);
    } else {
      this.bookmarks.add(qid);
    }
    this.saveState();
    this.render();
  }

  // Shuffle Questions & Options
  shuffleQuestions() {
    const shuffleArray = (arr) => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    // Shuffle options of part 1 questions
    this.questions.part1 = shuffleArray(this.questions.part1).map(q => {
      return {
        ...q,
        options: shuffleArray(q.options)
      };
    });

    this.questions.part2 = shuffleArray(this.questions.part2);
    this.questions.part3 = shuffleArray(this.questions.part3);

    this.answers = { part1: {}, part2: {}, part3: {} };
    this.submitted = false;
    this.saveState();
    this.render();
    this.updateStats();
  }

  // Reset exam
  resetExam() {
    this.clearState();
    this.loadExamQuestions();
    this.render();
    this.updateStats();
    if (this.currentMode === 'exam') {
      this.startTimer();
    }
  }

  // Scoring and submission
  submitExam() {
    this.stopTimer();
    this.submitted = true;

    // Calculate score
    let p1Correct = 0;
    this.questions.part1.forEach(q => {
      if (this.answers.part1[q.id] === q.correct) {
        p1Correct++;
        this.wrongQuestionIds.delete(q.id);
      } else {
        this.wrongQuestionIds.add(q.id);
      }
    });

    // Part 2 scoring: chuẩn Bộ GD&ĐT
    // 1 ý đúng = 0.1đ, 2 ý đúng = 0.25đ, 3 ý đúng = 0.5đ, 4 ý đúng = 1.0đ
    let p2Points = 0;
    let p2FullCorrectCount = 0;
    this.questions.part2.forEach(q => {
      let subCorrect = 0;
      const userQAns = this.answers.part2[q.id] || {};
      q.items.forEach(item => {
        if (userQAns[item.key] === item.correct) {
          subCorrect++;
        }
      });

      if (subCorrect === 1) p2Points += 0.1;
      else if (subCorrect === 2) p2Points += 0.25;
      else if (subCorrect === 3) p2Points += 0.5;
      else if (subCorrect === 4) {
        p2Points += 1.0;
        p2FullCorrectCount++;
        this.wrongQuestionIds.delete(q.id);
      } else {
        this.wrongQuestionIds.add(q.id);
      }

      if (subCorrect < 4) {
        this.wrongQuestionIds.add(q.id);
      }
    });

    // Part 3 scoring: 0.5 điểm mỗi câu
    let p3Correct = 0;
    this.questions.part3.forEach(q => {
      const userVal = (this.answers.part3[q.id] || '').toLowerCase().replace(/\s+/g, '');
      const isCorrect = q.validAnswers.some(ans => ans.toLowerCase().replace(/\s+/g, '') === userVal);
      if (isCorrect) {
        p3Correct++;
        this.wrongQuestionIds.delete(q.id);
      } else {
        this.wrongQuestionIds.add(q.id);
      }
    });

    const isCustomExam = this.currentExamId !== 'all';
    let rawTotal = 0;
    let maxRaw = 0;
    let finalScore = 0;
    let percentage = 0;

    if (isCustomExam) {
      // Chuẩn ma trận đề 10 điểm:
      // Phần 1: 12 câu x 0.25đ = 3.0đ
      // Phần 2: 2 câu x 1.0đ = 2.0đ
      // Phần 3: 4 câu x 0.5đ = 2.0đ
      // Tổng trắc nghiệm = 7.0 điểm. Phần tự luận = 3.0 điểm (được hướng dẫn chấm)
      rawTotal = (p1Correct * 0.25) + p2Points + (p3Correct * 0.5);
      maxRaw = (12 * 0.25) + 2.0 + (4 * 0.5); // 7.0 điểm trắc nghiệm
      finalScore = rawTotal.toFixed(2);
      percentage = Math.round((rawTotal / maxRaw) * 100);
    } else {
      // Đề cương tổng hợp (18.0 điểm thô quy đổi thang 10)
      rawTotal = (p1Correct * 0.25) + p2Points + (p3Correct * 0.5);
      maxRaw = (30 * 0.25) + 6.0 + (9 * 0.5); // 18.0
      finalScore = ((rawTotal / maxRaw) * 10).toFixed(2);
      percentage = Math.round((rawTotal / maxRaw) * 100);
    }

    this.saveState();
    this.render();
    this.renderQuickNav();

    // Show result modal
    this.showScoreModal({
      isCustomExam,
      finalScore,
      percentage,
      p1Correct,
      p1Total: this.questions.part1.length,
      p2Points: p2Points.toFixed(2),
      p2FullCorrectCount,
      p2Total: this.questions.part2.length,
      p3Correct,
      p3Total: this.questions.part3.length,
      wrongCount: this.wrongQuestionIds.size
    });

    // Confetti celebration if high score
    if ((isCustomExam ? (finalScore >= 5.5) : (finalScore >= 8.0)) && typeof confetti === 'function') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }

  showScoreModal(stats) {
    const modal = document.getElementById('modal-score');
    if (!modal) return;

    let evaluation = '';
    let evalColor = '';
    const numScore = parseFloat(stats.finalScore);
    const maxScore = stats.isCustomExam ? 7.0 : 10.0;
    const ratio = numScore / maxScore;

    if (ratio >= 0.9) {
      evaluation = '🌟 Xuất sắc! Bạn nắm rất vững kiến thức và hình học 8.';
      evalColor = 'text-emerald-600 dark:text-emerald-400';
    } else if (ratio >= 0.8) {
      evaluation = '🎉 Rất giỏi! Cố gắng khắc phục một vài điểm nhỏ để đạt điểm tuyệt đối nhé.';
      evalColor = 'text-blue-600 dark:text-blue-400';
    } else if (ratio >= 0.65) {
      evaluation = '👍 Khá tốt! Hãy bấm vào "Luyện lại câu sai" để rèn luyện thêm.';
      evalColor = 'text-indigo-600 dark:text-indigo-400';
    } else if (ratio >= 0.5) {
      evaluation = '📖 Đạt trung bình. Bạn nên đọc kĩ lại lời giải các câu sai và ôn thêm hình vẽ.';
      evalColor = 'text-amber-600 dark:text-amber-400';
    } else {
      evaluation = '💪 Cần cố gắng nhiều hơn! Hãy chuyển sang chế độ Luyện tập tự do để xem gợi ý từng câu nhé.';
      evalColor = 'text-rose-600 dark:text-rose-400';
    }

    document.getElementById('modal-score-val').textContent = stats.isCustomExam ? `${stats.finalScore}/7.0đ` : stats.finalScore;
    document.getElementById('modal-score-percent').textContent = `${stats.percentage}% Trắc nghiệm`;
    document.getElementById('modal-eval-text').textContent = evaluation;
    document.getElementById('modal-eval-text').className = `text-sm sm:text-base font-bold ${evalColor}`;

    document.getElementById('modal-p1-stat').textContent = `${stats.p1Correct} / ${stats.p1Total} câu (${(stats.p1Correct * 0.25).toFixed(2)}đ)`;
    document.getElementById('modal-p2-stat').textContent = `${stats.p2Points} điểm (${stats.p2FullCorrectCount}/${stats.p2Total} câu đúng hết)`;
    document.getElementById('modal-p3-stat').textContent = `${stats.p3Correct} / ${stats.p3Total} câu (${(stats.p3Correct * 0.5).toFixed(2)}đ)`;
    document.getElementById('modal-wrong-stat').textContent = `${stats.wrongCount} câu`;

    modal.classList.remove('hidden');
    document.getElementById('btn-close-modal')?.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
    document.getElementById('btn-modal-review-wrong')?.addEventListener('click', () => {
      modal.classList.add('hidden');
      this.setMode('review-wrong');
    });
  }

  // Update real-time stats banner
  updateStats() {
    let answeredCount = 0;
    const totalQuestions = this.questions.part1.length + this.questions.part2.length + this.questions.part3.length;

    // Part 1
    this.questions.part1.forEach(q => {
      if (this.answers.part1[q.id]) answeredCount++;
    });

    // Part 2
    this.questions.part2.forEach(q => {
      if (this.answers.part2[q.id] && Object.keys(this.answers.part2[q.id]).length > 0) answeredCount++;
    });

    // Part 3
    this.questions.part3.forEach(q => {
      if (this.answers.part3[q.id] && this.answers.part3[q.id].trim() !== '') answeredCount++;
    });

    const percent = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;
    const progressEl = document.getElementById('progress-bar');
    if (progressEl) progressEl.style.width = `${percent}%`;

    const progressTexts = [
      document.getElementById('progress-text'),
      document.getElementById('mobile-bottom-progress')
    ];
    progressTexts.forEach(el => {
      if (el) el.textContent = `${answeredCount}/${totalQuestions} (${percent}%)`;
    });

    const wrongBadge = document.getElementById('wrong-badge');
    if (wrongBadge) {
      wrongBadge.textContent = `${this.wrongQuestionIds.size}`;
      wrongBadge.style.display = this.wrongQuestionIds.size > 0 ? 'inline-flex' : 'none';
    }
  }

  // KaTeX rendering helper
  renderMath() {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('questions-container'), {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  }

  // Main Render Pipeline
  render() {
    const container = document.getElementById('questions-container');
    if (!container) return;

    let html = '';

    // Render Part 1
    if (this.currentTab === 'all' || this.currentTab === 'part1') {
      const p1List = this.filterQuestions(this.questions.part1);
      if (p1List.length > 0) {
        html += `
          <div class="mb-8 sm:mb-10">
            <div class="flex items-center justify-between border-b-2 border-indigo-200 dark:border-indigo-800 pb-3 mb-5">
              <h2 class="text-base sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shadow-sm shrink-0">I</span>
                <span>PHẦN 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN</span>
              </h2>
              <span class="text-xs px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-semibold shrink-0">
                ${p1List.length} câu
              </span>
            </div>
            <div class="space-y-5 sm:space-y-6" id="part1-list">
              ${p1List.map((q, idx) => this.getPart1HTML(q, idx + 1)).join('')}
            </div>
          </div>
        `;
      }
    }

    // Render Part 2
    if (this.currentTab === 'all' || this.currentTab === 'part2') {
      const p2List = this.filterQuestions(this.questions.part2);
      if (p2List.length > 0) {
        html += `
          <div class="mb-8 sm:mb-10">
            <div class="flex items-center justify-between border-b-2 border-emerald-200 dark:border-emerald-800 pb-3 mb-5">
              <h2 class="text-base sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shadow-sm shrink-0">II</span>
                <span>PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI</span>
              </h2>
              <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-semibold shrink-0">
                ${p2List.length} câu
              </span>
            </div>
            <div class="space-y-5 sm:space-y-6" id="part2-list">
              ${p2List.map((q, idx) => this.getPart2HTML(q, idx + 1)).join('')}
            </div>
          </div>
        `;
      }
    }

    // Render Part 3
    if (this.currentTab === 'all' || this.currentTab === 'part3') {
      const p3List = this.filterQuestions(this.questions.part3);
      if (p3List.length > 0) {
        html += `
          <div class="mb-8 sm:mb-10">
            <div class="flex items-center justify-between border-b-2 border-amber-200 dark:border-amber-800 pb-3 mb-5">
              <h2 class="text-base sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shadow-sm shrink-0">III</span>
                <span>PHẦN 3: TRẮC NGHIỆM TRẢ LỜI NGẮN</span>
              </h2>
              <span class="text-xs px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 font-semibold shrink-0">
                ${p3List.length} câu
              </span>
            </div>
            <div class="space-y-5 sm:space-y-6" id="part3-list">
              ${p3List.map((q, idx) => this.getPart3HTML(q, idx + 1)).join('')}
            </div>
          </div>
        `;
      }
    }

    // Render Part 4
    if (this.currentTab === 'all' || this.currentTab === 'part4') {
      if (this.currentMode !== 'review-wrong') {
        html += `
          <div class="mb-8 sm:mb-10">
            <div class="flex items-center justify-between border-b-2 border-purple-200 dark:border-purple-800 pb-3 mb-5">
              <h2 class="text-base sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shadow-sm shrink-0">IV</span>
                <span>PHẦN 4: TỰ LUẬN (${this.questions.part4.length} BÀI TOÁN - LỜI GIẢI CHI TIẾT)</span>
              </h2>
              <span class="text-xs px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-semibold shrink-0">
                ${this.questions.part4.length} bài
              </span>
            </div>
            <div class="space-y-6 sm:space-y-8" id="part4-list">
              ${this.questions.part4.map((b, idx) => this.getPart4HTML(b, idx + 1)).join('')}
            </div>
          </div>
        `;
      }
    }

    if (html.trim() === '') {
      html = `
        <div class="text-center py-12 sm:py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8">
          <div class="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center text-2xl">
            🎉
          </div>
          <h3 class="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Không có câu hỏi nào cần ôn tập lại!</h3>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-5">
            Bạn chưa làm sai câu nào hoặc đã sửa đúng tất cả các câu trong danh sách.
          </p>
          <button onclick="window.app.setMode('practice')" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all">
            Quay lại Luyện tập tự do
          </button>
        </div>
      `;
    }

    container.innerHTML = html;
    this.renderQuickNav();
    this.renderMath();
  }

  // Filter helper for 'review-wrong' mode
  filterQuestions(list) {
    if (this.currentMode === 'review-wrong') {
      return list.filter(q => this.wrongQuestionIds.has(q.id));
    }
    return list;
  }

  // HTML Generators
  getPart1HTML(q, displayIndex = null) {
    const userSelected = this.answers.part1[q.id];
    const isAnswered = !!userSelected;
    const showExplanation = (this.currentMode === 'practice' && isAnswered) || this.submitted;
    const isBookmark = this.bookmarks.has(q.id);
    const labelNum = displayIndex !== null ? displayIndex : q.id;

    const svgContent = q.svgKey && SVG_DIAGRAMS[q.svgKey] ? SVG_DIAGRAMS[q.svgKey] : '';

    return `
      <div id="q-card-${q.id}" class="card-question bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow">
        <!-- Header -->
        <div class="flex items-start justify-between gap-3 mb-3">
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span class="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 font-bold text-xs sm:text-sm border border-indigo-200 dark:border-indigo-800">
              ${labelNum}
            </span>
            <span class="badge-topic text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 sm:py-1 rounded-md">
              ${q.topic}
            </span>
          </div>
          <button onclick="window.app.toggleBookmark(${q.id})" class="text-slate-400 hover:text-amber-500 transition-colors p-1" title="Đánh dấu câu hỏi">
            <svg class="w-5 h-5 ${isBookmark ? 'text-amber-500 fill-amber-500' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        <!-- Question content -->
        <div class="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
          <strong>Câu ${labelNum}:</strong> ${q.content}
        </div>

        <!-- SVG Diagram if present -->
        ${svgContent}

        <!-- Options -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 mb-4">
          ${q.options.map(opt => {
            let stateClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200';
            let icon = '';

            if (userSelected === opt.key) {
              stateClass = 'selected';
            }

            if (showExplanation) {
              if (opt.key === q.correct) {
                stateClass = 'correct-highlight';
                icon = '<span class="text-emerald-600 dark:text-emerald-400 font-bold text-xs ml-auto shrink-0">✓ Đúng</span>';
              } else if (userSelected === opt.key && opt.key !== q.correct) {
                stateClass = 'wrong-highlight';
                icon = '<span class="text-red-600 dark:text-red-400 font-bold text-xs ml-auto shrink-0">✗ Sai</span>';
              }
            }

            return `
              <button onclick="window.app.selectPart1(${q.id}, '${opt.key}')" 
                      class="option-btn text-left p-3 sm:p-3.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2.5 sm:gap-3 border ${stateClass}">
                <span class="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 shrink-0">
                  ${opt.key}
                </span>
                <span class="flex-grow">${opt.text}</span>
                ${icon}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Explanation -->
        ${showExplanation ? `
          <div class="solution-box mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 animate-fadeIn">
            <div class="font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5 mb-1.5">
              <span>💡 Hướng dẫn giải chi tiết:</span>
            </div>
            <div class="leading-relaxed whitespace-pre-line">${q.explanation}</div>
          </div>
        ` : ''}
      </div>
    `;
  }

  renderPart1Item(qid) {
    const q = this.questions.part1.find(i => i.id === qid);
    if (!q) return;
    const el = document.getElementById(`q-card-${qid}`);
    if (el) {
      const idx = this.questions.part1.indexOf(q) + 1;
      el.outerHTML = this.getPart1HTML(q, idx);
      this.renderMath();
    }
  }

  // Part 2: Responsive Card Layout optimized for both Desktop and Mobile Phones
  getPart2HTML(q, displayIndex = null) {
    const userAns = this.answers.part2[q.id] || {};
    const showExplanation = (this.currentMode === 'practice' && Object.keys(userAns).length > 0) || this.submitted;
    const svgContent = q.svgKey && SVG_DIAGRAMS[q.svgKey] ? SVG_DIAGRAMS[q.svgKey] : '';
    const isBookmark = this.bookmarks.has(q.id);
    const labelNum = displayIndex !== null ? displayIndex : q.id;

    return `
      <div id="q-card-${q.id}" class="card-question bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow">
        <!-- Header -->
        <div class="flex items-start justify-between gap-3 mb-3">
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span class="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold text-xs sm:text-sm border border-emerald-200 dark:border-emerald-800">
              ${labelNum}
            </span>
            <span class="badge-topic text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 sm:py-1 rounded-md text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40">
              ${q.topic}
            </span>
          </div>
          <button onclick="window.app.toggleBookmark(${q.id})" class="text-slate-400 hover:text-amber-500 transition-colors p-1">
            <svg class="w-5 h-5 ${isBookmark ? 'text-amber-500 fill-amber-500' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        <!-- Question content -->
        <div class="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
          <strong>Câu ${labelNum}:</strong> ${q.content}
        </div>

        <!-- SVG Diagram if present -->
        ${svgContent}

        <!-- Responsive Propositions Card List (Thumb-friendly on mobile!) -->
        <div class="space-y-3 my-3">
          ${q.items.map(item => {
            const userVal = userAns[item.key];
            const isSelectedTrue = userVal === true;
            const isSelectedFalse = userVal === false;

            let statusBadge = '';
            if (showExplanation && userVal !== undefined) {
              if (userVal === item.correct) {
                statusBadge = '<span class="text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center gap-1">✓ Chính xác</span>';
              } else {
                statusBadge = `<span class="text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center gap-1">✗ Sai (Đáp án: ${item.correct ? 'Đ' : 'S'})</span>`;
              }
            } else if (showExplanation) {
              statusBadge = `<span class="text-slate-400 font-medium text-xs">Chưa chọn (Đáp án: ${item.correct ? 'Đ' : 'S'})</span>`;
            }

            return `
              <div class="p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex items-start gap-2.5 flex-grow">
                  <span class="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ${item.key}
                  </span>
                  <div class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    ${item.text}
                  </div>
                </div>

                <div class="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200/60 dark:border-slate-700/60">
                  <div class="sm:hidden">${statusBadge}</div>
                  <div class="flex items-center gap-2">
                    <button onclick="window.app.selectPart2(${q.id}, '${item.key}', true)"
                            class="tf-btn px-3 sm:px-4 py-1.5 rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 border ${
                              isSelectedTrue 
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' 
                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:border-emerald-500'
                            }">
                      <span>Đúng</span>
                      <span class="text-[10px] opacity-75">(Đ)</span>
                    </button>
                    <button onclick="window.app.selectPart2(${q.id}, '${item.key}', false)"
                            class="tf-btn px-3 sm:px-4 py-1.5 rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 border ${
                              isSelectedFalse 
                                ? 'bg-rose-600 text-white border-rose-600 shadow-sm' 
                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:border-rose-500'
                            }">
                      <span>Sai</span>
                      <span class="text-[10px] opacity-75">(S)</span>
                    </button>
                  </div>
                  <div class="hidden sm:block min-w-[120px] text-right">${statusBadge}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Explanation -->
        ${showExplanation ? `
          <div class="solution-box mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 animate-fadeIn">
            <div class="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 mb-2">
              <span>💡 Hướng dẫn giải chi tiết từng ý:</span>
            </div>
            <div class="space-y-1.5">
              ${q.items.map(item => `
                <div class="leading-relaxed">
                  <strong class="text-slate-800 dark:text-slate-100">Ý ${item.key} (${item.correct ? 'ĐÚNG' : 'SAI'}):</strong> ${item.explanation}
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  renderPart2Item(qid) {
    const q = this.questions.part2.find(i => i.id === qid);
    if (!q) return;
    const el = document.getElementById(`q-card-${qid}`);
    if (el) {
      const idx = this.questions.part2.indexOf(q) + 1;
      el.outerHTML = this.getPart2HTML(q, idx);
      this.renderMath();
    }
  }

  getPart3HTML(q, displayIndex = null, forceShow = false) {
    const userVal = this.answers.part3[q.id] || '';
    const isAnswered = userVal.trim() !== '';
    const showExplanation = forceShow || (this.currentMode === 'practice' && isAnswered) || this.submitted;
    const isBookmark = this.bookmarks.has(q.id);
    const labelNum = displayIndex !== null ? displayIndex : q.id;

    const normUserVal = userVal.toLowerCase().replace(/\s+/g, '');
    const isCorrect = isAnswered && q.validAnswers.some(ans => ans.toLowerCase().replace(/\s+/g, '') === normUserVal);

    return `
      <div id="q-card-${q.id}" class="card-question bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow">
        <!-- Header -->
        <div class="flex items-start justify-between gap-3 mb-3">
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span class="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-bold text-xs sm:text-sm border border-amber-200 dark:border-amber-800">
              ${labelNum}
            </span>
            <span class="badge-topic text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 sm:py-1 rounded-md text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40">
              ${q.topic}
            </span>
          </div>
          <button onclick="window.app.toggleBookmark(${q.id})" class="text-slate-400 hover:text-amber-500 transition-colors p-1">
            <svg class="w-5 h-5 ${isBookmark ? 'text-amber-500 fill-amber-500' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        <!-- Question content -->
        <div class="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
          <strong>Câu ${labelNum}:</strong> ${q.content}
        </div>

        <!-- Short Answer Input Box -->
        <div class="flex flex-wrap items-center gap-2.5 sm:gap-3 my-3">
          <div class="relative w-full sm:max-w-xs">
            <input type="text" 
                   id="input-q-${q.id}"
                   value="${userVal}"
                   oninput="window.app.inputPart3(${q.id}, this.value)"
                   placeholder="${q.placeholder || 'Nhập câu trả lời...'}"
                   class="w-full px-4 py-2.5 rounded-xl border ${
                     showExplanation
                       ? (isCorrect ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200' : 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200')
                       : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100'
                   } focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm font-semibold transition-all" />
          </div>

          ${this.currentMode === 'practice' && !showExplanation ? `
            <button onclick="window.app.checkPart3Single(${q.id})" 
                    class="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all shrink-0">
              Kiểm tra
            </button>
          ` : ''}

          ${showExplanation ? `
            <div class="flex items-center gap-2 text-xs sm:text-sm font-bold">
              ${isCorrect 
                ? '<span class="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">✓ Chính xác</span>' 
                : `<span class="text-rose-600 dark:text-rose-400 flex items-center gap-1">✗ Đáp án: <strong>${q.validAnswers[0]}</strong></span>`
              }
            </div>
          ` : ''}
        </div>

        <!-- Explanation -->
        ${showExplanation ? `
          <div class="solution-box mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 animate-fadeIn">
            <div class="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5 mb-1.5">
              <span>💡 Hướng dẫn giải chi tiết:</span>
            </div>
            <div class="leading-relaxed whitespace-pre-line">${q.explanation}</div>
          </div>
        ` : ''}
      </div>
    `;
  }

  renderPart3Item(qid, forceShow = false) {
    const q = this.questions.part3.find(i => i.id === qid);
    if (!q) return;
    const el = document.getElementById(`q-card-${qid}`);
    if (el) {
      const idx = this.questions.part3.indexOf(q) + 1;
      el.outerHTML = this.getPart3HTML(q, idx, forceShow);
      this.renderMath();
    }
  }

  getPart4HTML(b, displayIndex = null) {
    const svgContent = b.svgKey && SVG_DIAGRAMS[b.svgKey] ? SVG_DIAGRAMS[b.svgKey] : '';
    const labelTitle = b.number || `Bài ${displayIndex}`;

    return `
      <div class="card-question bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg bg-purple-600 text-white font-extrabold text-xs sm:text-sm shadow-sm shrink-0">
              ${labelTitle}
            </span>
            <h3 class="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">
              ${b.title}
            </h3>
          </div>
        </div>

        ${b.description ? `
          <div class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            ${b.description}
          </div>
        ` : ''}

        ${svgContent}

        <!-- Sub items list -->
        <div class="space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
          ${b.subItems.map((item) => `
            <div class="pt-4 first:pt-0">
              <div class="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                <span class="w-6 h-6 rounded-md bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 font-bold flex items-center justify-center shrink-0 text-xs">
                  ${item.num}
                </span>
                <span class="leading-relaxed flex-grow">${item.problem}</span>
                ${item.points ? `<span class="text-xs text-purple-600 font-bold shrink-0 bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 rounded">${item.points}</span>` : ''}
              </div>
              
              <!-- Toggle solution -->
              <details class="group mt-2">
                <summary class="cursor-pointer text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 list-none flex items-center gap-1.5 select-none py-1">
                  <svg class="w-4 h-4 transition-transform group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Xem hướng dẫn chấm / Lời giải</span>
                </summary>
                <div class="mt-2.5 p-3.5 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  ${item.solution}
                </div>
              </details>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Quick navigation matrix renderer for both Desktop and Mobile!
  renderQuickNav() {
    const desktopGrid = document.getElementById('quick-nav-grid');
    const mobileGrid = document.getElementById('quick-nav-grid-mobile');
    if (!desktopGrid && !mobileGrid) return;

    let html = '';

    // Part 1
    this.questions.part1.forEach((q, idx) => {
      const isAns = !!this.answers.part1[q.id];
      let colorClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';

      if (this.submitted || this.currentMode === 'practice') {
        if (isAns) {
          if (this.answers.part1[q.id] === q.correct) {
            colorClass = 'bg-emerald-600 text-white border-emerald-600 shadow-sm';
          } else {
            colorClass = 'bg-rose-500 text-white border-rose-500 shadow-sm';
          }
        }
      } else if (isAns) {
        colorClass = 'bg-indigo-600 text-white border-indigo-600 shadow-sm';
      }

      html += `
        <button onclick="window.app.scrollToQuestion(${q.id}, 'part1')" 
                class="q-nav-btn rounded-lg text-xs font-bold border flex items-center justify-center transition-all ${colorClass}">
          ${idx + 1}
        </button>
      `;
    });

    // Part 2
    this.questions.part2.forEach((q, idx) => {
      const qAns = this.answers.part2[q.id] || {};
      const isAns = Object.keys(qAns).length > 0;
      let colorClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';

      if (this.submitted || this.currentMode === 'practice') {
        if (isAns) {
          let allCorrect = q.items.every(item => qAns[item.key] === item.correct);
          if (allCorrect) {
            colorClass = 'bg-emerald-600 text-white border-emerald-600 shadow-sm';
          } else {
            colorClass = 'bg-rose-500 text-white border-rose-500 shadow-sm';
          }
        }
      } else if (isAns) {
        colorClass = 'bg-indigo-600 text-white border-indigo-600 shadow-sm';
      }

      html += `
        <button onclick="window.app.scrollToQuestion(${q.id}, 'part2')" 
                class="q-nav-btn rounded-lg text-xs font-bold border flex items-center justify-center transition-all ${colorClass}">
          P2.${idx + 1}
        </button>
      `;
    });

    // Part 3
    this.questions.part3.forEach((q, idx) => {
      const isAns = !!(this.answers.part3[q.id] && this.answers.part3[q.id].trim() !== '');
      let colorClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';

      if (this.submitted || this.currentMode === 'practice') {
        if (isAns) {
          const norm = (this.answers.part3[q.id] || '').toLowerCase().replace(/\s+/g, '');
          const isCorrect = q.validAnswers.some(ans => ans.toLowerCase().replace(/\s+/g, '') === norm);
          if (isCorrect) {
            colorClass = 'bg-emerald-600 text-white border-emerald-600 shadow-sm';
          } else {
            colorClass = 'bg-rose-500 text-white border-rose-500 shadow-sm';
          }
        }
      } else if (isAns) {
        colorClass = 'bg-indigo-600 text-white border-indigo-600 shadow-sm';
      }

      html += `
        <button onclick="window.app.scrollToQuestion(${q.id}, 'part3')" 
                class="q-nav-btn rounded-lg text-xs font-bold border flex items-center justify-center transition-all ${colorClass}">
          P3.${idx + 1}
        </button>
      `;
    });

    if (desktopGrid) desktopGrid.innerHTML = html;
    if (mobileGrid) mobileGrid.innerHTML = html;
  }

  scrollToQuestion(qid, partHint = 'all') {
    if (this.currentTab !== 'all') {
      if (partHint && this.currentTab !== partHint) {
        this.setTab(partHint);
      }
    }

    // Hide mobile drawer
    document.getElementById('nav-drawer')?.classList.add('hidden');

    setTimeout(() => {
      const el = document.getElementById(`q-card-${qid}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-indigo-500');
        setTimeout(() => el.classList.remove('ring-2', 'ring-indigo-500'), 1500);
      }
    }, 120);
  }
}

// Global bootstrap
document.addEventListener('DOMContentLoaded', () => {
  window.app = new MathApp();
});
