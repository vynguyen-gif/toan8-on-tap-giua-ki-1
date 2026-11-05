// Module hỗ trợ Xuất đề thi và Đáp án cho Giáo viên & Học sinh
// Hỗ trợ in ấn A4 chuẩn bộ GD&ĐT và xuất file Word (.doc) tương thích Microsoft Word

const ExportUtils = {
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
  generateStudentHTML(examData) {
    const p1Count = examData.part1.length;
    const p2Count = examData.part2.length;
    const p3Count = examData.part3.length;
    const p4Count = examData.part4.length;

    return `
      <div class="print-document student-doc">
        <!-- HEADER TRƯỜNG & HỌC SINH -->
        <div class="header-box" style="display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid #000; padding-bottom:12px; margin-bottom:16px;">
          <div style="text-align:center; width:45%;">
            <div style="font-size:13px; text-transform:uppercase;">PHÒNG GD&ĐT ...................................</div>
            <div style="font-weight:bold; font-size:14px; text-transform:uppercase;">TRƯỜNG THCS ...................................</div>
            <div style="font-size:12px; margin-top:4px;">Năm học: 2026 – 2027</div>
          </div>
          <div style="text-align:center; width:52%;">
            <div style="font-weight:bold; font-size:15px; text-transform:uppercase;">ĐỀ KIỂM TRA GIỮA HỌC KÌ 1</div>
            <div style="font-weight:bold; font-size:14px; color:#1e3a8a;">MÔN: TOÁN 8 – ${examData.code}</div>
            <div style="font-size:12px; font-style:italic;">Thời gian làm bài: ${examData.timeMinutes} phút (Không kể phát đề)</div>
          </div>
        </div>

        <!-- KHUNG ĐIỀN THÔNG TIN THÍ SINH & ĐIỂM SỐ -->
        <div style="display:flex; justify-content:space-between; margin-bottom:16px; font-size:13px;">
          <div style="width:62%; line-height:1.9;">
            <div>Họ và tên học sinh: ............................................................................</div>
            <div>Lớp: 8.......... Trường: ......................................................... SBD: ............</div>
          </div>
          <div style="width:36%; border:1.5px solid #000; border-radius:6px; display:flex;">
            <div style="width:40%; border-right:1px solid #000; text-align:center; padding:4px;">
              <div style="font-weight:bold; font-size:11px;">ĐIỂM</div>
            </div>
            <div style="width:60%; text-align:center; padding:4px;">
              <div style="font-weight:bold; font-size:11px;">LỜI PHÊ THẦY / CÔ</div>
            </div>
          </div>
        </div>

        <!-- PHẦN 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN -->
        <div class="part-section" style="margin-bottom:20px;">
          <div style="font-weight:bold; font-size:14px; margin-bottom:8px; border-bottom:1px dashed #666; padding-bottom:4px;">
            PHẦN 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (${p1Count} câu – 3,0 điểm)
          </div>
          <p style="font-style:italic; font-size:12px; margin-bottom:10px;">
            Thí sinh chọn một phương án đúng nhất và ghi vào phiếu trả lời trắc nghiệm dưới đây:
          </p>

          <!-- Bảng điền đáp án Phần 1 -->
          <table style="width:100%; border-collapse:collapse; margin-bottom:14px; text-align:center; font-size:12px;" border="1">
            <tr style="background:#f1f5f9; font-weight:bold;">
              <td style="padding:4px; width:100px;">Câu</td>
              ${examData.part1.map((_, i) => `<td style="padding:4px;">${i + 1}</td>`).join('')}
            </tr>
            <tr>
              <td style="padding:6px; font-weight:bold;">Đáp án</td>
              ${examData.part1.map(() => `<td style="padding:6px; height:24px;"></td>`).join('')}
            </tr>
          </table>

          <!-- Danh sách câu hỏi phần 1 -->
          <div class="questions-list">
            ${examData.part1.map((q, idx) => `
              <div style="margin-bottom:12px; page-break-inside:avoid; font-size:13px; line-height:1.5;">
                <div style="font-weight:bold;">Câu ${idx + 1}: <span style="font-weight:normal;">${q.content}</span></div>
                ${q.svgKey && SVG_DIAGRAMS[q.svgKey] ? `<div style="text-align:center; margin:8px 0;">${SVG_DIAGRAMS[q.svgKey]}</div>` : ''}
                <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:6px; margin-top:5px; padding-left:14px;">
                  ${q.options.map(opt => `
                    <div><strong>${opt.key}.</strong> ${opt.text}</div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI -->
        <div class="part-section" style="margin-bottom:20px; page-break-inside:avoid;">
          <div style="font-weight:bold; font-size:14px; margin-bottom:8px; border-bottom:1px dashed #666; padding-bottom:4px;">
            PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (${p2Count} câu – 2,0 điểm)
          </div>
          <p style="font-style:italic; font-size:12px; margin-bottom:8px;">
            Thí sinh trả lời từ câu 1 đến câu ${p2Count}. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng (Đ) hoặc Sai (S).
          </p>

          ${examData.part2.map((q, idx) => `
            <div style="margin-bottom:14px; page-break-inside:avoid; font-size:13px;">
              <div style="font-weight:bold;">Câu ${idx + 1}: <span style="font-weight:normal;">${q.content}</span></div>
              ${q.svgKey && SVG_DIAGRAMS[q.svgKey] ? `<div style="text-align:center; margin:8px 0;">${SVG_DIAGRAMS[q.svgKey]}</div>` : ''}
              
              <table style="width:100%; border-collapse:collapse; margin-top:6px; font-size:12px;" border="1">
                <tr style="background:#f8fafc; font-weight:bold; text-align:center;">
                  <td style="width:10%; padding:5px;">Ý</td>
                  <td style="padding:5px;">Nội dung mệnh đề</td>
                  <td style="width:15%; padding:5px;">Đúng (Đ)</td>
                  <td style="width:15%; padding:5px;">Sai (S)</td>
                </tr>
                ${q.items.map(item => `
                  <tr>
                    <td style="text-align:center; font-weight:bold; padding:5px;">${item.key}</td>
                    <td style="padding:5px;">${item.text}</td>
                    <td style="text-align:center; padding:5px;"></td>
                    <td style="text-align:center; padding:5px;"></td>
                  </tr>
                `).join('')}
              </table>
            </div>
          `).join('')}
        </div>

        <!-- PHẦN 3: TRẢ LỜI NGẮN -->
        <div class="part-section" style="margin-bottom:20px; page-break-inside:avoid;">
          <div style="font-weight:bold; font-size:14px; margin-bottom:8px; border-bottom:1px dashed #666; padding-bottom:4px;">
            PHẦN 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (${p3Count} câu – 2,0 điểm)
          </div>
          <p style="font-style:italic; font-size:12px; margin-bottom:8px;">
            Thí sinh viết câu trả lời/kết quả tính toán của mình vào ô tương ứng:
          </p>

          <table style="width:100%; border-collapse:collapse; margin-bottom:12px; font-size:12px;" border="1">
            <tr style="background:#f8fafc; font-weight:bold; text-align:center;">
              <td style="width:12%; padding:6px;">Câu</td>
              <td style="padding:6px;">Nội dung câu hỏi</td>
              <td style="width:25%; padding:6px;">Đáp số / Kết quả</td>
            </tr>
            ${examData.part3.map((q, idx) => `
              <tr>
                <td style="text-align:center; font-weight:bold; padding:8px;">Câu ${idx + 1}</td>
                <td style="padding:8px; line-height:1.4;">${q.content}</td>
                <td style="text-align:center; padding:8px; font-weight:bold;"></td>
              </tr>
            `).join('')}
          </table>
        </div>

        <!-- PHẦN 4: TỰ LUẬN -->
        <div class="part-section" style="page-break-before:auto;">
          <div style="font-weight:bold; font-size:14px; margin-bottom:8px; border-bottom:1px dashed #666; padding-bottom:4px;">
            PHẦN 4: TỰ LUẬN (${p4Count} câu – 3,0 điểm)
          </div>
          <p style="font-style:italic; font-size:12px; margin-bottom:10px;">
            Thí sinh trình bày chi tiết lời giải các bài toán sau:
          </p>

          ${examData.part4.map((b, idx) => `
            <div style="margin-bottom:16px; page-break-inside:avoid; font-size:13px; line-height:1.5;">
              <div style="font-weight:bold;">Bài ${idx + 1} ${b.points ? `(${b.points})` : ''}: <span style="font-weight:normal;">${b.title}</span></div>
              ${b.description ? `<div style="margin:4px 0 6px 12px; font-style:italic;">${b.description}</div>` : ''}
              ${b.svgKey && SVG_DIAGRAMS[b.svgKey] ? `<div style="text-align:center; margin:8px 0;">${SVG_DIAGRAMS[b.svgKey]}</div>` : ''}
              
              <div style="padding-left:14px; margin-top:6px;">
                ${b.subItems.map(item => `
                  <div style="margin-bottom:6px;">
                    <strong>${item.sub}</strong> ${item.problem}
                  </div>
                `).join('')}
              </div>

              <!-- Dòng kẻ chấm mờ làm chỗ trình bày -->
              <div style="margin-top:10px; border-bottom:1px dotted #ccc; height:24px;"></div>
              <div style="border-bottom:1px dotted #ccc; height:24px;"></div>
              <div style="border-bottom:1px dotted #ccc; height:24px;"></div>
              <div style="border-bottom:1px dotted #ccc; height:24px;"></div>
            </div>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:24px; font-style:italic; font-size:12px; border-top:1px solid #000; padding-top:6px;">
          ---------- HẾT ----------<br>
          <span style="font-size:11px;">Cán bộ coi thi không giải thích gì thêm. Thí sinh không được sử dụng tài liệu.</span>
        </div>
      </div>
    `;
  },

  // Tạo nội dung HTML cho BẢN GIÁO VIÊN (Kèm Đáp án & Biểu điểm chi tiết)
  generateTeacherHTML(examData) {
    const p1Count = examData.part1.length;
    const p2Count = examData.part2.length;
    const p3Count = examData.part3.length;
    const p4Count = examData.part4.length;

    return `
      <div class="print-document teacher-doc">
        <!-- HEADER GIÁO VIÊN -->
        <div style="text-align:center; border-bottom:2px solid #1e3a8a; padding-bottom:12px; margin-bottom:16px;">
          <div style="font-size:13px; text-transform:uppercase;">HƯỚNG DẪN CHẤM & ĐÁP ÁN CHÍNH THỨC</div>
          <div style="font-weight:bold; font-size:16px; color:#1e3a8a; text-transform:uppercase; margin-top:3px;">
            ĐỀ KIỂM TRA GIỮA HỌC KÌ 1 – MÔN TOÁN 8
          </div>
          <div style="font-weight:bold; font-size:13px; color:#b91c1c; margin-top:2px;">
            ${examData.title}
          </div>
          <div style="font-size:12px; font-style:italic; color:#475569; margin-top:2px;">
            (Thang điểm 10,0 • Chuẩn ma trận cấu trúc đề thi mới)
          </div>
        </div>

        <!-- PHẦN 1: ĐÁP ÁN TRẮC NGHIỆM NHIỀU LỰA CHỌN -->
        <div style="margin-bottom:18px;">
          <div style="font-weight:bold; font-size:14px; color:#1e3a8a; margin-bottom:6px; background:#eff6ff; padding:5px 8px; border-left:4px solid #2563eb;">
            I. PHẦN 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (${p1Count} câu – 3,0 điểm; mỗi câu đúng 0,25 điểm)
          </div>

          <table style="width:100%; border-collapse:collapse; text-align:center; font-size:12px; margin-bottom:10px;" border="1">
            <tr style="background:#f1f5f9; font-weight:bold;">
              <td style="padding:4px; width:70px;">Câu</td>
              ${examData.part1.map((_, i) => `<td style="padding:4px;">${i + 1}</td>`).join('')}
            </tr>
            <tr style="font-weight:bold; color:#b91c1c; background:#fef2f2;">
              <td style="padding:6px; color:#000;">Đáp án</td>
              ${examData.part1.map(q => `<td style="padding:6px; font-size:13px;">${q.correct}</td>`).join('')}
            </tr>
          </table>

          <!-- Lời giải tóm tắt Phần 1 -->
          <div style="font-size:11.5px; line-height:1.5; color:#334155; background:#fafafa; padding:8px 10px; border-radius:6px; border:1px solid #e2e8f0;">
            <div style="font-weight:bold; margin-bottom:4px; color:#0f172a;">Gợi ý & Hướng dẫn tư duy:</div>
            ${examData.part1.map((q, idx) => `
              <div style="margin-bottom:3px;">
                <strong>Câu ${idx + 1} (${q.correct}):</strong> ${q.explanation}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- PHẦN 2: ĐÁP ÁN ĐÚNG / SAI -->
        <div style="margin-bottom:18px; page-break-inside:avoid;">
          <div style="font-weight:bold; font-size:14px; color:#1e3a8a; margin-bottom:6px; background:#eff6ff; padding:5px 8px; border-left:4px solid #2563eb;">
            II. PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (${p2Count} câu – 2,0 điểm)
          </div>
          <div style="font-size:11.5px; margin-bottom:8px; font-style:italic; color:#475569;">
            * Thang điểm mỗi câu: Đúng 1 ý được 0,1đ; đúng 2 ý được 0,25đ; đúng 3 ý được 0,5đ; đúng cả 4 ý được 1,0đ.
          </div>

          ${examData.part2.map((q, idx) => `
            <div style="margin-bottom:12px; font-size:12px;">
              <div style="font-weight:bold; margin-bottom:4px;">Câu ${idx + 1}: ${q.content}</div>
              <table style="width:100%; border-collapse:collapse; font-size:12px; margin-bottom:6px;" border="1">
                <tr style="background:#f8fafc; font-weight:bold; text-align:center;">
                  <td style="width:8%; padding:4px;">Ý</td>
                  <td style="padding:4px;">Nội dung mệnh đề</td>
                  <td style="width:15%; padding:4px;">Đáp án</td>
                  <td style="width:40%; padding:4px;">Lý giải chi tiết</td>
                </tr>
                ${q.items.map(item => `
                  <tr>
                    <td style="text-align:center; font-weight:bold; padding:4px;">${item.key}</td>
                    <td style="padding:4px;">${item.text}</td>
                    <td style="text-align:center; font-weight:bold; color:${item.correct ? '#15803d' : '#b91c1c'}; padding:4px;">
                      ${item.correct ? 'ĐÚNG (Đ)' : 'SAI (S)'}
                    </td>
                    <td style="padding:4px; font-size:11px; color:#475569;">${item.explanation}</td>
                  </tr>
                `).join('')}
              </table>
            </div>
          `).join('')}
        </div>

        <!-- PHẦN 3: ĐÁP ÁN TRẢ LỜI NGẮN -->
        <div style="margin-bottom:18px; page-break-inside:avoid;">
          <div style="font-weight:bold; font-size:14px; color:#1e3a8a; margin-bottom:6px; background:#eff6ff; padding:5px 8px; border-left:4px solid #2563eb;">
            III. PHẦN 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (${p3Count} câu – 2,0 điểm; mỗi câu đúng 0,5 điểm)
          </div>

          <table style="width:100%; border-collapse:collapse; font-size:12px;" border="1">
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
                <td style="padding:5px;">${q.content}</td>
                <td style="text-align:center; font-weight:bold; font-size:13px; color:#b91c1c; padding:5px;">${q.validAnswers[0]}</td>
                <td style="text-align:center; font-weight:bold; padding:5px;">0,5 đ</td>
                <td style="padding:5px; font-size:11px; color:#475569;">${q.explanation}</td>
              </tr>
            `).join('')}
          </table>
        </div>

        <!-- PHẦN 4: HƯỚNG DẪN CHẤM TỰ LUẬN -->
        <div style="page-break-before:auto;">
          <div style="font-weight:bold; font-size:14px; color:#1e3a8a; margin-bottom:8px; background:#eff6ff; padding:5px 8px; border-left:4px solid #2563eb;">
            IV. PHẦN 4: HƯỚNG DẪN CHẤM BÀI TOÁN TỰ LUẬN (${p4Count} câu – 3,0 điểm)
          </div>

          ${examData.part4.map((b, idx) => `
            <div style="margin-bottom:16px; page-break-inside:avoid; font-size:12.5px;">
              <div style="font-weight:bold; color:#0f172a; margin-bottom:4px;">
                Bài ${idx + 1} ${b.points ? `(${b.points})` : ''}: ${b.title}
              </div>
              ${b.description ? `<div style="font-style:italic; margin-bottom:4px; color:#475569;">${b.description}</div>` : ''}

              <table style="width:100%; border-collapse:collapse; font-size:12px; margin-top:6px;" border="1">
                <tr style="background:#f8fafc; font-weight:bold; text-align:center;">
                  <td style="width:8%; padding:4px;">Ý</td>
                  <td style="padding:4px;">Đáp án & Các bước giải chi tiết</td>
                  <td style="width:12%; padding:4px;">Điểm</td>
                </tr>
                ${b.subItems.map(item => `
                  <tr>
                    <td style="text-align:center; font-weight:bold; padding:6px; vertical-align:top;">${item.sub}</td>
                    <td style="padding:6px; line-height:1.5;">
                      <div style="font-weight:600; margin-bottom:2px; color:#334155;">${item.problem}</div>
                      <div style="color:#0f172a; whitespace:pre-line;">${item.solution}</div>
                    </td>
                    <td style="text-align:center; font-weight:bold; color:#b91c1c; padding:6px; vertical-align:top;">
                      ${item.points || '0,5 đ'}
                    </td>
                  </tr>
                `).join('')}
              </table>
            </div>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:20px; font-style:italic; font-size:12px; border-top:1px solid #000; padding-top:6px;">
          * Lưu ý: Thí sinh làm theo cách khác đúng vẫn cho điểm tối đa tương ứng từng phần.
        </div>
      </div>
    `;
  },

  // Xuất file Word (.doc) tương thích 100% với Microsoft Word
  downloadWord(examId, role = 'student') {
    const examData = this.getExamData(examId);
    const isTeacher = role === 'teacher';
    const contentHTML = isTeacher ? this.generateTeacherHTML(examData) : this.generateStudentHTML(examData);

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
            margin: 1.8cm 1.8cm 1.8cm 1.8cm;
            mso-header-margin: 1.0cm;
            mso-footer-margin: 1.0cm;
          }
          body {
            font-family: 'Times New Roman', Times, serif;
            font-size: 13pt;
            line-height: 1.4;
            color: #000000;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            margin: 8px 0;
          }
          td, th {
            border: 1px solid #000000;
            padding: 4px 6px;
            font-size: 12pt;
          }
          svg {
            display: block;
            margin: 6px auto;
            max-width: 320px;
            height: auto;
          }
        </style>
      </head>
      <body>
        ${contentHTML}
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff' + fullDoc], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${docTitle}.doc`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  },

  // In trực tiếp ra PDF / Máy in
  printExam(examId, role = 'student') {
    const examData = this.getExamData(examId);
    const isTeacher = role === 'teacher';
    const contentHTML = isTeacher ? this.generateTeacherHTML(examData) : this.generateStudentHTML(examData);

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('Vui lòng cho phép mở cửa sổ popup để thực hiện in đề!');
      return;
    }

    printWin.document.open();
    printWin.document.write(`
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="UTF-8">
        <title>${isTeacher ? 'Đáp Án - Giáo Viên' : 'Đề Thi - Học Sinh'} - ${examData.code}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
        <style>
          @page {
            size: A4;
            margin: 1.5cm 1.5cm 1.5cm 1.5cm;
          }
          body {
            font-family: 'Times New Roman', Times, serif;
            font-size: 13pt;
            line-height: 1.4;
            color: #000;
            background: #fff;
            padding: 10px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          td, th {
            border: 1px solid #333;
          }
          svg {
            display: block;
            margin: 6px auto;
            max-width: 320px;
            height: auto;
          }
          @media print {
            body { padding: 0; }
            .no-print { display: none !important; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="margin-bottom:15px; padding:10px; background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:14px; font-weight:bold; color:#1e40af;">
            Xem trước bản in: ${examData.title} (${isTeacher ? 'Bản Giáo Viên' : 'Bản Học Sinh'})
          </span>
          <button onclick="window.print()" style="padding:8px 16px; background:#2563eb; color:#fff; border:none; border-radius:6px; font-weight:bold; cursor:pointer;">
            🖨️ Tiến hành in ngay / Lưu PDF
          </button>
        </div>

        <div id="print-root">
          ${contentHTML}
        </div>

        <script>
          window.addEventListener('DOMContentLoaded', () => {
            if (typeof renderMathInElement === 'function') {
              renderMathInElement(document.getElementById('print-root'), {
                delimiters: [
                  { left: '$$', right: '$$', display: true },
                  { left: '$', right: '$', display: false }
                ],
                throwOnError: false
              });
            }
          });
        </script>
      </body>
      </html>
    `);
    printWin.document.close();
  }
};
