// Module hỗ trợ Xuất đề thi và Đáp án cho Giáo viên & Học sinh
// Đã xử lý triệt để lỗi hiển thị công thức LaTeX (chuyển đổi sang chuẩn toán học Unicode & HTML rõ ràng)

const ExportUtils = {
  // Hàm chuyển đổi công thức LaTeX sang định dạng văn bản chuẩn cho Word và in ấn
  formatMath(text) {
    if (!text) return '';
    let s = String(text);

    // Xử lý các phân số thông dụng
    s = s.replace(/\\frac\{1\}\{2\}/g, '½');
    s = s.replace(/\\frac\{1\}\{4\}/g, '¼');
    s = s.replace(/\\frac\{3\}\{4\}/g, '¾');
    s = s.replace(/\\frac\{7\}\{2\}/g, '7/2');
    s = s.replace(/\\frac\{3\}\{2\}/g, '3/2');
    s = s.replace(/\\frac\{6\}\{4\}/g, '6/4');
    s = s.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2');

    // Xử lý kí hiệu hình học
    s = s.replace(/\\triangle\s*([A-Za-z]+)/g, 'Δ$1');
    s = s.replace(/\\widehat\{([A-Za-z]+)\}/g, '∠$1');
    s = s.replace(/\\widehat\s*([A-Za-z])/g, '∠$1');
    s = s.replace(/\\perp/g, '⊥');
    s = s.replace(/\\parallel/g, '//');
    s = s.replace(/\/\//g, '//');
    s = s.replace(/\^\\circ/g, '°');
    s = s.replace(/\\circ/g, '°');

    // Phép toán và logic
    s = s.replace(/\\cdot/g, '·');
    s = s.replace(/\\times/g, '×');
    s = s.replace(/\\le/g, '≤');
    s = s.replace(/\\ge/g, '≥');
    s = s.replace(/\\ne/g, '≠');
    s = s.replace(/\\iff/g, ' ⇔ ');
    s = s.replace(/\\implies/g, ' ⇒ ');
    s = s.replace(/\\in/g, '∈');
    s = s.replace(/\\mathbb\{Z\}/g, 'ℤ');
    s = s.replace(/\\vdots/g, '⋮');
    s = s.replace(/\\forall/g, '∀');
    s = s.replace(/\\quad/g, ' ');

    // Số mũ
    s = s.replace(/\^2/g, '²');
    s = s.replace(/\^3/g, '³');
    s = s.replace(/\^4/g, '⁴');
    s = s.replace(/\^5/g, '⁵');
    s = s.replace(/\^6/g, '⁶');
    s = s.replace(/\^n/g, 'ⁿ');
    s = s.replace(/\^0/g, '⁰');
    s = s.replace(/\^1/g, '¹');
    s = s.replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>');
    s = s.replace(/_\{([^}]+)\}/g, '<sub>$1</sub>');

    // Bỏ thẻ bọc text của LaTeX
    s = s.replace(/\\text\{([^}]+)\}/g, '$1');

    // Ma trận / hệ phương trình
    s = s.replace(/\\left\[\\begin\{matrix\}([\s\S]*?)\\end\{matrix\}\\right\./g, (match, p1) => {
      return p1.split('\\\\').map(l => l.trim()).filter(Boolean).join(' hoặc ');
    });

    // Bỏ tất cả dấu $ bao quanh công thức
    s = s.replace(/\\\$/g, '$');
    s = s.replace(/\$/g, '');

    return s;
  },

  // Lấy dữ liệu đề theo id ('de1', 'de2', 'de3') hoặc toàn bộ đề cương
  getExamData(examId) {
    if (examId === 'all') {
      return {
        isAll: true,
        code: "ĐỀ CƯƠNG TỔNG HỢP",
        title: "ĐỀ CƯƠNG ÔN TẬP GIỮA HỌC KÌ 1 – TOÁN 8 (NĂM HỌC 2026 – 2027)",
        timeMinutes: 90,
        part1: EXAM_DATA.part1,
        part2: EXAM_DATA.part2,
        part3: EXAM_DATA.part3,
        part4: EXAM_DATA.part4.map(b => ({
          num: b.number,
          title: b.title,
          description: b.description,
          svgKey: b.svgKey,
          subItems: b.subItems.map(item => ({
            sub: item.num + ")",
            problem: item.problem,
            solution: item.solution,
            points: "1.0 điểm"
          }))
        }))
      };
    }

    const exam = PRACTICE_EXAMS.find(e => e.id === examId) || PRACTICE_EXAMS[0];
    const part1 = exam.part1Ids.map(id => EXAM_DATA.part1.find(q => q.id === id)).filter(Boolean);
    const part2 = exam.part2Ids.map(id => EXAM_DATA.part2.find(q => q.id === id)).filter(Boolean);
    const part3 = exam.part3Ids.map(id => EXAM_DATA.part3.find(q => q.id === id)).filter(Boolean);

    return {
      isAll: false,
      id: exam.id,
      code: exam.code,
      title: exam.title,
      timeMinutes: exam.timeMinutes,
      part1,
      part2,
      part3,
      part4: exam.part4
    };
  },

  // Tạo nội dung HTML cho BẢN HỌC SINH (Không có đáp án)
  generateStudentHTML(examData, forWord = false) {
    const p1Count = examData.part1.length;
    const p2Count = examData.part2.length;
    const p3Count = examData.part3.length;
    const p4Count = examData.part4.length;
    const fmt = this.formatMath;

    return `
      <div class="print-document student-doc" style="font-family:'Times New Roman', serif; font-size:13pt; line-height:1.4; color:#000;">
        <!-- HEADER TRƯỜNG & HỌC SINH -->
        <table style="width:100%; border-collapse:collapse; border:none; margin-bottom:12px;" border="0">
          <tr>
            <td style="width:45%; text-align:center; vertical-align:top; border:none; padding:0;">
              <div style="font-size:12pt; text-transform:uppercase;">PHÒNG GD&ĐT ...................................</div>
              <div style="font-weight:bold; font-size:13pt; text-transform:uppercase;">TRƯỜNG THCS ...................................</div>
              <div style="font-size:11pt; margin-top:2px;">Năm học: 2026 – 2027</div>
            </td>
            <td style="width:55%; text-align:center; vertical-align:top; border:none; padding:0;">
              <div style="font-weight:bold; font-size:14pt; text-transform:uppercase;">ĐỀ KIỂM TRA GIỮA HỌC KÌ 1</div>
              <div style="font-weight:bold; font-size:13pt; color:#1e3a8a;">MÔN: TOÁN 8 – ${examData.code}</div>
              <div style="font-size:11pt; font-style:italic;">Thời gian làm bài: ${examData.timeMinutes} phút (Không kể phát đề)</div>
            </td>
          </tr>
        </table>
        <div style="border-bottom:1.5px solid #000; margin-bottom:14px;"></div>

        <!-- KHUNG ĐIỀN THÔNG TIN THÍ SINH & ĐIỂM SỐ -->
        <table style="width:100%; border-collapse:collapse; margin-bottom:16px; border:none;" border="0">
          <tr>
            <td style="width:62%; vertical-align:middle; border:none; padding:0; line-height:1.8; font-size:12pt;">
              <div>Họ và tên học sinh: ............................................................................</div>
              <div>Lớp: 8.......... Trường: ......................................................... SBD: ............</div>
            </td>
            <td style="width:38%; vertical-align:middle; border:none; padding:0;">
              <table style="width:100%; border-collapse:collapse; border:1.5px solid #000; text-align:center;" border="1">
                <tr>
                  <td style="width:40%; padding:4px; font-weight:bold; font-size:11pt;">ĐIỂM</td>
                  <td style="width:60%; padding:4px; font-weight:bold; font-size:11pt;">LỜI PHÊ THẦY / CÔ</td>
                </tr>
                <tr>
                  <td style="height:48px;"></td>
                  <td></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- PHẦN 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN -->
        <div class="part-section" style="margin-bottom:18px;">
          <div style="font-weight:bold; font-size:13pt; margin-bottom:6px; border-bottom:1px dashed #666; padding-bottom:3px;">
            PHẦN 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (${p1Count} câu – 3,0 điểm)
          </div>
          <p style="font-style:italic; font-size:11pt; margin-bottom:8px;">
            Thí sinh chọn một phương án đúng nhất và ghi vào phiếu trả lời trắc nghiệm dưới đây:
          </p>

          <!-- Bảng điền đáp án Phần 1 -->
          <table style="width:100%; border-collapse:collapse; margin-bottom:12px; text-align:center; font-size:11pt;" border="1">
            <tr style="background:#f1f5f9; font-weight:bold;">
              <td style="padding:4px; width:70px;">Câu</td>
              ${examData.part1.map((_, i) => `<td style="padding:4px;">${i + 1}</td>`).join('')}
            </tr>
            <tr>
              <td style="padding:5px; font-weight:bold;">Đáp án</td>
              ${examData.part1.map(() => `<td style="padding:5px; height:22px;"></td>`).join('')}
            </tr>
          </table>

          <!-- Danh sách câu hỏi phần 1 -->
          <div>
            ${examData.part1.map((q, idx) => `
              <div style="margin-bottom:10px; page-break-inside:avoid; font-size:12.5pt; line-height:1.45;">
                <div style="font-weight:bold;">Câu ${idx + 1}: <span style="font-weight:normal;">${fmt(q.content)}</span></div>
                ${q.svgKey && SVG_DIAGRAMS[q.svgKey] ? `<div style="text-align:center; margin:6px 0;">${SVG_DIAGRAMS[q.svgKey]}</div>` : ''}
                <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:4px 16px; margin-top:4px; padding-left:12px;">
                  ${q.options.map(opt => `
                    <div><strong>${opt.key}.</strong> ${fmt(opt.text)}</div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI -->
        <div class="part-section" style="margin-bottom:18px; page-break-inside:avoid;">
          <div style="font-weight:bold; font-size:13pt; margin-bottom:6px; border-bottom:1px dashed #666; padding-bottom:3px;">
            PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (${p2Count} câu – 2,0 điểm)
          </div>
          <p style="font-style:italic; font-size:11pt; margin-bottom:8px;">
            Thí sinh trả lời từ câu 1 đến câu ${p2Count}. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh ghi chữ "Đ" vào ô Đúng hoặc chữ "S" vào ô Sai:
          </p>

          ${examData.part2.map((q, idx) => `
            <div style="margin-bottom:12px; page-break-inside:avoid; font-size:12.5pt;">
              <div style="font-weight:bold;">Câu ${idx + 1}: <span style="font-weight:normal;">${fmt(q.content)}</span></div>
              ${q.svgKey && SVG_DIAGRAMS[q.svgKey] ? `<div style="text-align:center; margin:6px 0;">${SVG_DIAGRAMS[q.svgKey]}</div>` : ''}
              
              <table style="width:100%; border-collapse:collapse; margin-top:5px; font-size:11.5pt;" border="1">
                <tr style="background:#f8fafc; font-weight:bold; text-align:center;">
                  <td style="width:8%; padding:4px;">Ý</td>
                  <td style="padding:4px;">Nội dung mệnh đề</td>
                  <td style="width:14%; padding:4px;">Đúng (Đ)</td>
                  <td style="width:14%; padding:4px;">Sai (S)</td>
                </tr>
                ${q.items.map(item => `
                  <tr>
                    <td style="text-align:center; font-weight:bold; padding:4px;">${item.key}</td>
                    <td style="padding:4px 8px;">${fmt(item.text)}</td>
                    <td style="text-align:center; padding:4px;"></td>
                    <td style="text-align:center; padding:4px;"></td>
                  </tr>
                `).join('')}
              </table>
            </div>
          `).join('')}
        </div>

        <!-- PHẦN 3: TRẢ LỜI NGẮN -->
        <div class="part-section" style="margin-bottom:18px; page-break-inside:avoid;">
          <div style="font-weight:bold; font-size:13pt; margin-bottom:6px; border-bottom:1px dashed #666; padding-bottom:3px;">
            PHẦN 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (${p3Count} câu – 2,0 điểm)
          </div>
          <p style="font-style:italic; font-size:11pt; margin-bottom:8px;">
            Thí sinh viết câu trả lời/kết quả tính toán của mình vào ô tương ứng:
          </p>

          <table style="width:100%; border-collapse:collapse; margin-bottom:10px; font-size:12pt;" border="1">
            <tr style="background:#f8fafc; font-weight:bold; text-align:center;">
              <td style="width:10%; padding:5px;">Câu</td>
              <td style="padding:5px;">Nội dung câu hỏi</td>
              <td style="width:25%; padding:5px;">Đáp số / Kết quả</td>
            </tr>
            ${examData.part3.map((q, idx) => `
              <tr>
                <td style="text-align:center; font-weight:bold; padding:6px;">Câu ${idx + 1}</td>
                <td style="padding:6px 8px; line-height:1.4;">${fmt(q.content)}</td>
                <td style="text-align:center; padding:6px; font-weight:bold;"></td>
              </tr>
            `).join('')}
          </table>
        </div>

        <!-- PHẦN 4: TỰ LUẬN -->
        <div class="part-section" style="page-break-before:auto;">
          <div style="font-weight:bold; font-size:13pt; margin-bottom:6px; border-bottom:1px dashed #666; padding-bottom:3px;">
            PHẦN 4: TỰ LUẬN (${p4Count} câu – 3,0 điểm)
          </div>
          <p style="font-style:italic; font-size:11pt; margin-bottom:8px;">
            Thí sinh trình bày chi tiết lời giải các bài toán sau:
          </p>

          ${examData.part4.map((b, idx) => `
            <div style="margin-bottom:14px; page-break-inside:avoid; font-size:12.5pt; line-height:1.45;">
              <div style="font-weight:bold;">Bài ${idx + 1} ${b.points ? `(${b.points})` : ''}: <span style="font-weight:normal;">${fmt(b.title)}</span></div>
              ${b.description ? `<div style="margin:3px 0 5px 10px; font-style:italic; color:#333;">${fmt(b.description)}</div>` : ''}
              ${b.svgKey && SVG_DIAGRAMS[b.svgKey] ? `<div style="text-align:center; margin:6px 0;">${SVG_DIAGRAMS[b.svgKey]}</div>` : ''}
              
              <div style="padding-left:12px; margin-top:5px;">
                ${b.subItems.map(item => `
                  <div style="margin-bottom:5px;">
                    <strong>${item.sub}</strong> ${fmt(item.problem)}
                  </div>
                `).join('')}
              </div>

              <!-- Dòng kẻ mờ cho học sinh làm bài -->
              <div style="margin-top:8px; border-bottom:1px dotted #aaa; height:22px;"></div>
              <div style="border-bottom:1px dotted #aaa; height:22px;"></div>
              <div style="border-bottom:1px dotted #aaa; height:22px;"></div>
            </div>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:20px; font-style:italic; font-size:11pt; border-top:1px solid #000; padding-top:5px;">
          ---------- HẾT ----------<br>
          <span style="font-size:10pt;">Cán bộ coi thi không giải thích gì thêm. Thí sinh không được sử dụng tài liệu.</span>
        </div>
      </div>
    `;
  },

  // Tạo nội dung HTML cho BẢN GIÁO VIÊN (Kèm Đáp án & Biểu điểm chi tiết)
  generateTeacherHTML(examData, forWord = false) {
    const p1Count = examData.part1.length;
    const p2Count = examData.part2.length;
    const p3Count = examData.part3.length;
    const p4Count = examData.part4.length;
    const fmt = this.formatMath;

    return `
      <div class="print-document teacher-doc" style="font-family:'Times New Roman', serif; font-size:13pt; line-height:1.4; color:#000;">
        <!-- HEADER GIÁO VIÊN -->
        <div style="text-align:center; border-bottom:2px solid #1e3a8a; padding-bottom:10px; margin-bottom:14px;">
          <div style="font-size:12pt; text-transform:uppercase; font-weight:600;">HƯỚNG DẪN CHẤM & ĐÁP ÁN CHÍNH THỨC</div>
          <div style="font-weight:bold; font-size:15pt; color:#1e3a8a; text-transform:uppercase; margin-top:2px;">
            ĐỀ KIỂM TRA GIỮA HỌC KÌ 1 – MÔN TOÁN 8
          </div>
          <div style="font-weight:bold; font-size:12.5pt; color:#b91c1c; margin-top:2px;">
            ${examData.title}
          </div>
          <div style="font-size:11pt; font-style:italic; color:#475569; margin-top:2px;">
            (Thang điểm 10,0 • Chuẩn ma trận cấu trúc đề thi mới)
          </div>
        </div>

        <!-- PHẦN 1: ĐÁP ÁN TRẮC NGHIỆM NHIỀU LỰA CHỌN -->
        <div style="margin-bottom:16px;">
          <div style="font-weight:bold; font-size:13pt; color:#1e3a8a; margin-bottom:5px; background:#eff6ff; padding:4px 8px; border-left:4px solid #2563eb;">
            I. PHẦN 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (${p1Count} câu – 3,0 điểm; mỗi câu đúng 0,25 điểm)
          </div>

          <table style="width:100%; border-collapse:collapse; text-align:center; font-size:11.5pt; margin-bottom:8px;" border="1">
            <tr style="background:#f1f5f9; font-weight:bold;">
              <td style="padding:4px; width:70px;">Câu</td>
              ${examData.part1.map((_, i) => `<td style="padding:4px;">${i + 1}</td>`).join('')}
            </tr>
            <tr style="font-weight:bold; color:#b91c1c; background:#fef2f2;">
              <td style="padding:5px; color:#000;">Đáp án</td>
              ${examData.part1.map(q => `<td style="padding:5px; font-size:12pt;">${q.correct}</td>`).join('')}
            </tr>
          </table>

          <!-- Lời giải tóm tắt Phần 1 -->
          <div style="font-size:11.5pt; line-height:1.45; color:#334155; background:#fafafa; padding:8px 10px; border-radius:6px; border:1px solid #e2e8f0;">
            <div style="font-weight:bold; margin-bottom:4px; color:#0f172a;">Gợi ý & Hướng dẫn tư duy:</div>
            ${examData.part1.map((q, idx) => `
              <div style="margin-bottom:3px;">
                <strong>Câu ${idx + 1} (${q.correct}):</strong> ${fmt(q.explanation)}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- PHẦN 2: ĐÁP ÁN ĐÚNG / SAI -->
        <div style="margin-bottom:16px; page-break-inside:avoid;">
          <div style="font-weight:bold; font-size:13pt; color:#1e3a8a; margin-bottom:5px; background:#eff6ff; padding:4px 8px; border-left:4px solid #2563eb;">
            II. PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (${p2Count} câu – 2,0 điểm)
          </div>
          <div style="font-size:11pt; margin-bottom:6px; font-style:italic; color:#475569;">
            * Thang điểm mỗi câu: Đúng 1 ý được 0,1đ; đúng 2 ý được 0,25đ; đúng 3 ý được 0,5đ; đúng cả 4 ý được 1,0đ.
          </div>

          ${examData.part2.map((q, idx) => `
            <div style="margin-bottom:10px; font-size:11.5pt;">
              <div style="font-weight:bold; margin-bottom:3px;">Câu ${idx + 1}: ${fmt(q.content)}</div>
              <table style="width:100%; border-collapse:collapse; font-size:11pt; margin-bottom:5px;" border="1">
                <tr style="background:#f8fafc; font-weight:bold; text-align:center;">
                  <td style="width:7%; padding:4px;">Ý</td>
                  <td style="padding:4px;">Nội dung mệnh đề</td>
                  <td style="width:14%; padding:4px;">Đáp án</td>
                  <td style="width:40%; padding:4px;">Lý giải chi tiết</td>
                </tr>
                ${q.items.map(item => `
                  <tr>
                    <td style="text-align:center; font-weight:bold; padding:4px;">${item.key}</td>
                    <td style="padding:4px 8px;">${fmt(item.text)}</td>
                    <td style="text-align:center; font-weight:bold; color:${item.correct ? '#15803d' : '#b91c1c'}; padding:4px;">
                      ${item.correct ? 'ĐÚNG (Đ)' : 'SAI (S)'}
                    </td>
                    <td style="padding:4px 8px; font-size:10.5pt; color:#475569;">${fmt(item.explanation)}</td>
                  </tr>
                `).join('')}
              </table>
            </div>
          `).join('')}
        </div>

        <!-- PHẦN 3: ĐÁP ÁN TRẢ LỜI NGẮN -->
        <div style="margin-bottom:16px; page-break-inside:avoid;">
          <div style="font-weight:bold; font-size:13pt; color:#1e3a8a; margin-bottom:5px; background:#eff6ff; padding:4px 8px; border-left:4px solid #2563eb;">
            III. PHẦN 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (${p3Count} câu – 2,0 điểm; mỗi câu đúng 0,5 điểm)
          </div>

          <table style="width:100%; border-collapse:collapse; font-size:11.5pt;" border="1">
            <tr style="background:#f8fafc; font-weight:bold; text-align:center;">
              <td style="width:10%; padding:5px;">Câu</td>
              <td style="padding:5px;">Nội dung câu hỏi</td>
              <td style="width:18%; padding:5px; color:#b91c1c;">Đáp số đúng</td>
              <td style="width:10%; padding:5px;">Điểm</td>
              <td style="padding:5px;">Hướng dẫn giải</td>
            </tr>
            ${examData.part3.map((q, idx) => `
              <tr>
                <td style="text-align:center; font-weight:bold; padding:5px;">Câu ${idx + 1}</td>
                <td style="padding:5px 8px;">${fmt(q.content)}</td>
                <td style="text-align:center; font-weight:bold; font-size:12pt; color:#b91c1c; padding:5px;">${q.validAnswers[0]}</td>
                <td style="text-align:center; font-weight:bold; padding:5px;">0,5 đ</td>
                <td style="padding:5px 8px; font-size:11pt; color:#475569;">${fmt(q.explanation)}</td>
              </tr>
            `).join('')}
          </table>
        </div>

        <!-- PHẦN 4: HƯỚNG DẪN CHẤM TỰ LUẬN -->
        <div style="page-break-before:auto;">
          <div style="font-weight:bold; font-size:13pt; color:#1e3a8a; margin-bottom:6px; background:#eff6ff; padding:4px 8px; border-left:4px solid #2563eb;">
            IV. PHẦN 4: HƯỚNG DẪN CHẤM BÀI TOÁN TỰ LUẬN (${p4Count} câu – 3,0 điểm)
          </div>

          ${examData.part4.map((b, idx) => `
            <div style="margin-bottom:14px; page-break-inside:avoid; font-size:12pt;">
              <div style="font-weight:bold; color:#0f172a; margin-bottom:3px;">
                Bài ${idx + 1} ${b.points ? `(${b.points})` : ''}: ${fmt(b.title)}
              </div>
              ${b.description ? `<div style="font-style:italic; margin-bottom:4px; color:#475569;">${fmt(b.description)}</div>` : ''}

              <table style="width:100%; border-collapse:collapse; font-size:11.5pt; margin-top:5px;" border="1">
                <tr style="background:#f8fafc; font-weight:bold; text-align:center;">
                  <td style="width:8%; padding:4px;">Ý</td>
                  <td style="padding:4px;">Đáp án & Các bước giải chi tiết</td>
                  <td style="width:12%; padding:4px;">Điểm</td>
                </tr>
                ${b.subItems.map(item => `
                  <tr>
                    <td style="text-align:center; font-weight:bold; padding:5px; vertical-align:top;">${item.sub}</td>
                    <td style="padding:5px 8px; line-height:1.45;">
                      <div style="font-weight:600; margin-bottom:2px; color:#334155;">${fmt(item.problem)}</div>
                      <div style="color:#0f172a; white-space:pre-line;">${fmt(item.solution)}</div>
                    </td>
                    <td style="text-align:center; font-weight:bold; color:#b91c1c; padding:5px; vertical-align:top;">
                      ${item.points || '0,5 đ'}
                    </td>
                  </tr>
                `).join('')}
              </table>
            </div>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:16px; font-style:italic; font-size:11pt; border-top:1px solid #000; padding-top:5px;">
          * Lưu ý: Thí sinh làm theo cách khác đúng vẫn cho điểm tối đa tương ứng từng phần.
        </div>
      </div>
    `;
  },

  // Xuất file Word (.doc) tương thích 100% với Microsoft Word (Hiển thị công thức sạch đẹp)
  downloadWord(examId, role = 'student') {
    const examData = this.getExamData(examId);
    const isTeacher = role === 'teacher';
    const contentHTML = isTeacher ? this.generateTeacherHTML(examData, true) : this.generateStudentHTML(examData, true);

    const docTitle = isTeacher 
      ? `DAP_AN_${examData.code.replace(/\s+/g, '_')}_GIAO_VIEN`
      : `DE_THI_${examData.code.replace(/\s+/g, '_')}_HOC_SINH`;

    const fullDoc = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${docTitle}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          @page {
            size: A4;
            margin: 1.5cm 1.5cm 1.5cm 1.5cm;
          }
          body {
            font-family: 'Times New Roman', Times, serif;
            font-size: 13pt;
            line-height: 1.35;
            color: #000000;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            margin: 6px 0;
          }
          td, th {
            border: 1px solid #000000;
            padding: 4px 6px;
            font-size: 12pt;
          }
          svg {
            display: block;
            margin: 6px auto;
            max-width: 300px;
            height: auto;
          }
          sup {
            font-size: 0.8em;
            vertical-align: super;
          }
          sub {
            font-size: 0.8em;
            vertical-align: sub;
          }
        </style>
      </head>
      <body>
        ${contentHTML}
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff' + fullDoc], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${docTitle}.doc`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 120);
  },

  // Hiển thị khung xem trước và In trực tiếp
  printExam(examId, role = 'student') {
    const examData = this.getExamData(examId);
    const isTeacher = role === 'teacher';
    const contentHTML = isTeacher ? this.generateTeacherHTML(examData, false) : this.generateStudentHTML(examData, false);

    // Mở preview modal trực tiếp trên trang để tránh bị trình duyệt chặn popup
    let previewModal = document.getElementById('modal-print-preview');
    if (!previewModal) {
      previewModal = document.createElement('div');
      previewModal.id = 'modal-print-preview';
      previewModal.className = 'fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex flex-col p-2 sm:p-4 overflow-y-auto';
      document.body.appendChild(previewModal);
    }

    previewModal.innerHTML = `
      <div class="max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-2xl flex flex-col my-auto overflow-hidden animate-scaleUp">
        <div class="no-print bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="text-xl">🖨️</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base">Xem Trước Bản In A4 (${isTeacher ? 'Bản Giáo Viên' : 'Bản Học Sinh'})</h3>
              <p class="text-xs text-slate-400">${examData.title}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="window.print()" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5">
              <span>In Ngay / Lưu PDF</span>
            </button>
            <button onclick="document.getElementById('modal-print-preview').classList.add('hidden')" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">
              ✕
            </button>
          </div>
        </div>
        <div id="print-preview-content" class="p-6 sm:p-10 overflow-y-auto max-h-[80vh] bg-white text-black">
          ${contentHTML}
        </div>
      </div>
    `;

    previewModal.classList.remove('hidden');

    // Đóng modal khi bấm nền ngoài
    previewModal.addEventListener('click', (e) => {
      if (e.target.id === 'modal-print-preview') {
        previewModal.classList.add('hidden');
      }
    });

    // Render KaTeX nếu có
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('print-preview-content'), {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  }
};
