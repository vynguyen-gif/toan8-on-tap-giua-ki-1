// DỮ LIỆU 6 ĐỀ ÔN TẬP CHUẨN MA TRẬN GIỮA HỌC KÌ 1 – TOÁN 8 (NĂM HỌC 2026 – 2027)
// Cấu trúc mỗi đề thi:
// - Phần 1: 12 câu trắc nghiệm nhiều phương án (3.0 điểm)
// - Phần 2: 2 câu trắc nghiệm đúng / sai (2.0 điểm)
// - Phần 3: 4 câu trắc nghiệm trả lời ngắn (2.0 điểm)
// - Phần 4: 3 câu tự luận (3.0 điểm)
// Tổng điểm: 10.0 điểm • Thời gian: 60 - 90 phút

const PRACTICE_EXAMS = [
  {
    "id": "de1",
    "code": "ĐỀ SỐ 01",
    "title": "ĐỀ ÔN TẬP KIỂM TRA GIỮA HỌC KÌ 1 – TOÁN 8 (ĐỀ SỐ 01)",
    "timeMinutes": 90,
    "part1Ids": [
      1,
      2,
      3,
      5,
      8,
      9,
      10,
      14,
      15,
      18,
      20,
      21
    ],
    "part2Ids": [
      31,
      34
    ],
    "part3Ids": [
      37,
      38,
      42,
      43
    ],
    "part4": [
      {
        "num": "Bài 1 (1,0 điểm)",
        "title": "Rút gọn các biểu thức đại số:",
        "subItems": [
          {
            "sub": "a)",
            "problem": "$(3x^3 - 2x^2y + xy^2 + 2) + (-x^3 - 2x^2y - xy^2 + 1)$",
            "points": "0,5 điểm",
            "solution": "$= (3x^3 - x^3) + (-2x^2y - 2x^2y) + (xy^2 - xy^2) + (2 + 1) = 2x^3 - 4x^2y + 3$"
          },
          {
            "sub": "b)",
            "problem": "$(2x - 3y)(2x + 3y) + (x - 2y)^2$",
            "points": "0,5 điểm",
            "solution": "$= (4x^2 - 9y^2) + (x^2 - 4xy + 4y^2) = 5x^2 - 4xy - 5y^2$"
          }
        ]
      },
      {
        "num": "Bài 2 (1,0 điểm)",
        "title": "Bài toán thực tế diện tích:",
        "svgKey": "bai4",
        "description": "Một khu đất hình chữ nhật có kích thước $2x + 5$ (m) và $y + 3$ (m). Người ta dành một phần hình chữ nhật có kích thước $x$ (m) và $y$ (m) ở góc bên phải để làm nhà kho, phần còn lại có dạng chữ L như hình vẽ.",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Viết biểu thức biểu thị diện tích phần đất chữ L và thu gọn biểu thức đó.",
            "points": "0,5 điểm",
            "solution": "Diện tích toàn bộ khu đất: $S_{tong} = (2x + 5)(y + 3) = 2xy + 6x + 5y + 15\\text{ }(m^2)$.\nDiện tích nhà kho: $S_{kho} = xy\\text{ }(m^2)$.\nDiện tích phần đất chữ L: $S_L = S_{tong} - S_{kho} = xy + 6x + 5y + 15\\text{ }(m^2)$."
          },
          {
            "sub": "b)",
            "problem": "Tính diện tích phần đất hình chữ L khi $x = 5$ và $y = 4$.",
            "points": "0,5 điểm",
            "solution": "Thay $x = 5$ và $y = 4$ vào biểu thức $S_L$:\n$S_L = 5 \\cdot 4 + 6 \\cdot 5 + 5 \\cdot 4 + 15 = 20 + 30 + 20 + 15 = 85\\text{ }(m^2)$."
          }
        ]
      },
      {
        "num": "Bài 3 (1,0 điểm)",
        "title": "Hình học tổng hợp:",
        "svgKey": "bai6",
        "description": "Cho tam giác $ABC$ vuông tại $A$ ($AB < AC$), đường cao $AH$. Từ $H$ kẻ $HM \\perp AB$ tại $M$, $HN \\perp AC$ tại $N$.",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Chứng minh tứ giác AMHN là hình chữ nhật.",
            "points": "0,5 điểm",
            "solution": "Xét tứ giác $AMHN$ có:\n$\\widehat{MAN} = 90^\\circ$ (do $\\triangle ABC$ vuông tại $A$),\n$\\widehat{HMA} = 90^\\circ$ ($HM \\perp AB$),\n$\\widehat{HNA} = 90^\\circ$ ($HN \\perp AC$).\nTứ giác có ba góc vuông nên $AMHN$ là hình chữ nhật."
          },
          {
            "sub": "b)",
            "problem": "Gọi $I$ là trung điểm của $HC$, lấy $K$ sao cho $I$ là trung điểm của $AK$. Chứng minh tứ giác MNCK là hình thang cân.",
            "points": "0,5 điểm",
            "solution": "Tứ giác $AHCK$ có hai đường chéo $AK$ và $HC$ cắt nhau tại trung điểm $I$ nên $AHCK$ là hình bình hành $\\implies CK // AH$ và $CK = AH$.\nDo $AH \\perp BC \\implies CK \\perp BC$.\nTrong hình chữ nhật $AMHN$, ta có $MN = AH = CK$ và $MN // BC$, từ đó suy ra $MNCK$ là hình thang có hai đường chéo bằng nhau ($MN = KC$ hoặc hai góc kề đáy bằng $90^\\circ$), do đó $MNCK$ là hình thang cân."
          }
        ]
      }
    ]
  },
  {
    "id": "de2",
    "code": "ĐỀ SỐ 02",
    "title": "ĐỀ ÔN TẬP KIỂM TRA GIỮA HỌC KÌ 1 – TOÁN 8 (ĐỀ SỐ 02)",
    "timeMinutes": 90,
    "part1Ids": [
      4,
      6,
      7,
      11,
      12,
      13,
      16,
      17,
      19,
      22,
      23,
      26
    ],
    "part2Ids": [
      32,
      35
    ],
    "part3Ids": [
      39,
      40,
      44,
      45
    ],
    "part4": [
      {
        "num": "Bài 1 (1,0 điểm)",
        "title": "Tìm x, biết:",
        "subItems": [
          {
            "sub": "a)",
            "problem": "$(x - 2)^2 - (x + 1)(x - 3) = 0$",
            "points": "0,5 điểm",
            "solution": "$(x^2 - 4x + 4) - (x^2 - 2x - 3) = 0 \\iff -2x + 7 = 0 \\iff x = \\frac{7}{2}$."
          },
          {
            "sub": "b)",
            "problem": "$(2x - 1)^2 - (2x + 3)(2x - 3) = 16$",
            "points": "0,5 điểm",
            "solution": "$(4x^2 - 4x + 1) - (4x^2 - 9) = 16 \\iff -4x + 10 = 16 \\iff -4x = 6 \\iff x = -\\frac{3}{2}$."
          }
        ]
      },
      {
        "num": "Bài 2 (1,0 điểm)",
        "title": "Bài toán thực tế khu vườn trồng rau:",
        "svgKey": "bai5",
        "description": "Một khu vườn có dạng hình vuông cạnh $x$ (m). Người ta muốn dành một mảnh đất hình chữ nhật ở góc khu vườn để trồng rau (như hình vẽ). Biết diện tích của mảnh đất trồng rau bằng $150\\text{ m}^2$. Tính độ dài cạnh $x$ (m) của khu vườn đó.",
        "subItems": [
          {
            "sub": "Giải",
            "problem": "Tính độ dài cạnh $x$ (m) của khu vườn hình vuông.",
            "points": "1,0 điểm",
            "solution": "Theo hình vẽ, chiều rộng mảnh đất trồng rau là $x - 15$ (m) và chiều dài là $x - 10$ (m) ($x > 15$).\nDiện tích mảnh đất trồng rau bằng $150\\text{ m}^2$:\n$(x - 15)(x - 10) = 150 \\iff x^2 - 25x + 150 = 150 \\iff x(x - 25) = 0$.\nVì $x > 15$ nên $x = 25\\text{ m}$.\nVậy độ dài cạnh của khu vườn là $25\\text{ m}$."
          }
        ]
      },
      {
        "num": "Bài 3 (1,0 điểm)",
        "title": "Hình học tổng hợp:",
        "svgKey": "bai7",
        "description": "Cho tam giác $MNP$ vuông tại $M$, gọi $E$ là trung điểm của $NP$. Từ $E$ kẻ $EH \\perp MN$ tại $H$, $EK \\perp MP$ tại $K$.",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Tứ giác MHEK là hình gì? Vì sao?",
            "points": "0,5 điểm",
            "solution": "Tứ giác $MHEK$ có $\\widehat{M} = 90^\\circ$ (tam giác vuông tại $M$), $\\widehat{EHM} = 90^\\circ$ ($EH \\perp MN$), $\\widehat{EKM} = 90^\\circ$ ($EK \\perp MP$).\nTứ giác có ba góc vuông nên $MHEK$ là hình chữ nhật."
          },
          {
            "sub": "b)",
            "problem": "Cho $NP = 20\\text{ cm}$. Tính độ dài đoạn thẳng $HK$.",
            "points": "0,5 điểm",
            "solution": "Trong $\\triangle MNP$ vuông tại $M$, $ME$ là đường trung tuyến ứng với cạnh huyền $NP$ nên $ME = \\frac{1}{2}NP = \\frac{1}{2} \\times 20 = 10\\text{ (cm)}$.\nDo $MHEK$ là hình chữ nhật nên hai đường chéo bằng nhau: $HK = ME = 10\\text{ cm}$."
          }
        ]
      }
    ]
  },
  {
    "id": "de3",
    "code": "ĐỀ SỐ 03",
    "title": "ĐỀ ÔN TẬP KIỂM TRA GIỮA HỌC KÌ 1 – TOÁN 8 (ĐỀ SỐ 03)",
    "timeMinutes": 90,
    "part1Ids": [
      1,
      3,
      5,
      9,
      10,
      14,
      15,
      17,
      24,
      25,
      27,
      28
    ],
    "part2Ids": [
      33,
      36
    ],
    "part3Ids": [
      37,
      40,
      41,
      42
    ],
    "part4": [
      {
        "num": "Bài 1 (1,0 điểm)",
        "title": "Khai triển và rút gọn biểu thức:",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Khai triển: $(2x - 3y)^2$ và $(x - 5)(x + 5)$",
            "points": "0,5 điểm",
            "solution": "- $(2x - 3y)^2 = 4x^2 - 12xy + 9y^2$\n- $(x - 5)(x + 5) = x^2 - 25$"
          },
          {
            "sub": "b)",
            "problem": "Rút gọn: $3x(x^2 - 2y) + 6xy - 3x^3$",
            "points": "0,5 điểm",
            "solution": "$= 3x^3 - 6xy + 6xy - 3x^3 = 0$"
          }
        ]
      },
      {
        "num": "Bài 2 (1,0 điểm)",
        "title": "Vận dụng hằng đẳng thức:",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Chứng minh biểu thức $A = x^2 - 2x + 3$ luôn dương với mọi giá trị của $x$.",
            "points": "0,5 điểm",
            "solution": "$A = (x^2 - 2x + 1) + 2 = (x - 1)^2 + 2$.\nVì $(x - 1)^2 \\ge 0$ với mọi $x$ nên $(x - 1)^2 + 2 \\ge 2 > 0$ với mọi $x$ (đpcm)."
          },
          {
            "sub": "b)",
            "problem": "Chứng minh biểu thức $(2n + 1)^2 - 1$ chia hết cho 8 với mọi số nguyên $n$.",
            "points": "0,5 điểm",
            "solution": "$(2n + 1)^2 - 1 = 4n^2 + 4n = 4n(n + 1)$.\nVì $n(n + 1)$ là tích hai số nguyên liên tiếp nên chia hết cho 2.\nSuy ra $4n(n + 1) \\ \\vdots \\ (4 \\times 2) = 8$ với mọi số nguyên $n$ (đpcm)."
          }
        ]
      },
      {
        "num": "Bài 3 (1,0 điểm)",
        "title": "Hình học tổng hợp:",
        "svgKey": "bai8",
        "description": "Cho tam giác $ABC$ vuông tại $A$, trung tuyến $AM$. Từ $M$ kẻ $MD \\perp AB$ tại $D$ và $ME \\perp AC$ tại $E$.",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Chứng minh $AM = DE$.",
            "points": "0,5 điểm",
            "solution": "Tứ giác $ADME$ có $\\widehat{A} = 90^\\circ, \\widehat{ADM} = 90^\\circ, \\widehat{AEM} = 90^\\circ$ nên là hình chữ nhật.\nTrong hình chữ nhật, hai đường chéo bằng nhau nên $AM = DE$."
          },
          {
            "sub": "b)",
            "problem": "Gọi $N$ là điểm đối xứng với $M$ qua $D$. Chứng minh tứ giác AMBN là hình thoi.",
            "points": "0,5 điểm",
            "solution": "Trong tam giác vuông $ABC$, $M$ là trung điểm $BC$ và $MD \\perp AB$, $AC \\perp AB \\implies MD // AC \\implies D$ là trung điểm $AB$.\n$N$ đối xứng với $M$ qua $D \\implies D$ là trung điểm $MN$.\nTứ giác $AMBN$ có hai đường chéo $AB$ và $MN$ cắt nhau tại trung điểm $D$ của mỗi đường nên là hình bình hành.\nLại có $AB \\perp MN$ tại $D$ nên hình bình hành $AMBN$ có hai đường chéo vuông góc là hình thoi."
          }
        ]
      }
    ]
  },
  {
    "id": "de4",
    "code": "ĐỀ SỐ 04",
    "title": "ĐỀ ÔN TẬP KIỂM TRA GIỮA HỌC KÌ 1 – TOÁN 8 (ĐỀ SỐ 04)",
    "timeMinutes": 90,
    "part1": [
      {
        "id": 401,
        "part": 1,
        "topic": "Đơn thức & Đa thức",
        "content": "Biểu thức nào sau đây là một đơn thức?",
        "options": [
          {
            "key": "A",
            "text": "$a + b$"
          },
          {
            "key": "B",
            "text": "$-5a^3b^2$"
          },
          {
            "key": "C",
            "text": "$\\frac{a}{b}$"
          },
          {
            "key": "D",
            "text": "$b - 3$"
          }
        ],
        "correct": "B",
        "explanation": "Đơn thức là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa các số và các biến. Biểu thức $-5a^3b^2$ chỉ gồm tích của hệ số $-5$ và các lũy thừa của biến $a, b$ nên là một đơn thức."
      },
      {
        "id": 402,
        "part": 1,
        "topic": "Đơn thức & Đa thức",
        "content": "Phần biến của đơn thức $-\\frac{3}{4}a^2b^3c$ là:",
        "options": [
          {
            "key": "A",
            "text": "$-\\frac{3}{4}$"
          },
          {
            "key": "B",
            "text": "$a^2b^3c$"
          },
          {
            "key": "C",
            "text": "$a^3b^2c$"
          },
          {
            "key": "D",
            "text": "$abc$"
          }
        ],
        "correct": "B",
        "explanation": "Đơn thức $-\\frac{3}{4}a^2b^3c$ có hệ số là $-\\frac{3}{4}$ và phần biến là $a^2b^3c$."
      },
      {
        "id": 403,
        "part": 1,
        "topic": "Bậc của đơn thức",
        "content": "Bậc của đơn thức $-7x^3y^2z^2$ bằng:",
        "options": [
          {
            "key": "A",
            "text": "5"
          },
          {
            "key": "B",
            "text": "6"
          },
          {
            "key": "C",
            "text": "7"
          },
          {
            "key": "D",
            "text": "8"
          }
        ],
        "correct": "C",
        "explanation": "Bậc của đơn thức là tổng số mũ của tất cả các biến: $3 + 2 + 2 = 7$."
      },
      {
        "id": 404,
        "part": 1,
        "topic": "Đơn thức đồng dạng",
        "content": "Đơn thức nào sau đây đồng dạng với đơn thức $6x^3y^2$?",
        "options": [
          {
            "key": "A",
            "text": "$6x^2y^3$"
          },
          {
            "key": "B",
            "text": "$-\\frac{1}{3}x^3y^2$"
          },
          {
            "key": "C",
            "text": "$6x^3y$"
          },
          {
            "key": "D",
            "text": "$3xy^2$"
          }
        ],
        "correct": "B",
        "explanation": "Hai đơn thức đồng dạng có hệ số khác 0 và có cùng phần biến. Đơn thức $-\\frac{1}{3}x^3y^2$ có cùng phần biến $x^3y^2$."
      },
      {
        "id": 405,
        "part": 1,
        "topic": "Cộng trừ đơn thức đồng dạng",
        "content": "Kết quả của phép tính $4x^3y + 7x^3y$ là:",
        "options": [
          {
            "key": "A",
            "text": "$11x^6y^2$"
          },
          {
            "key": "B",
            "text": "$11x^3y$"
          },
          {
            "key": "C",
            "text": "$28x^3y$"
          },
          {
            "key": "D",
            "text": "$3x^3y$"
          }
        ],
        "correct": "B",
        "explanation": "Ta cộng phần hệ số và giữ nguyên phần biến: $(4 + 7)x^3y = 11x^3y$."
      },
      {
        "id": 406,
        "part": 1,
        "topic": "Nhân đơn thức với đa thức",
        "content": "Kết quả của phép tính nhân $3x(2x^2 - 4y)$ là:",
        "options": [
          {
            "key": "A",
            "text": "$6x^3 - 12xy$"
          },
          {
            "key": "B",
            "text": "$5x^3 - 7xy$"
          },
          {
            "key": "C",
            "text": "$6x^2 - 12xy$"
          },
          {
            "key": "D",
            "text": "$6x^3 + 12xy$"
          }
        ],
        "correct": "A",
        "explanation": "$3x \\cdot 2x^2 - 3x \\cdot 4y = 6x^3 - 12xy$."
      },
      {
        "id": 407,
        "part": 1,
        "topic": "Hằng đẳng thức hiệu hai bình phương",
        "content": "Khai triển hằng đẳng thức $(2x - 3y)(2x + 3y)$ ta được kết quả:",
        "options": [
          {
            "key": "A",
            "text": "$4x^2 - 9y^2$"
          },
          {
            "key": "B",
            "text": "$2x^2 - 3y^2$"
          },
          {
            "key": "C",
            "text": "$4x^2 - 6xy + 9y^2$"
          },
          {
            "key": "D",
            "text": "$4x^2 + 9y^2$"
          }
        ],
        "correct": "A",
        "explanation": "Áp dụng $(A - B)(A + B) = A^2 - B^2$: $(2x)^2 - (3y)^2 = 4x^2 - 9y^2$."
      },
      {
        "id": 408,
        "part": 1,
        "topic": "Hằng đẳng thức bình phương một hiệu",
        "content": "Khai triển hằng đẳng thức $(3x - 2y)^2$ ta được:",
        "options": [
          {
            "key": "A",
            "text": "$9x^2 - 6xy + 4y^2$"
          },
          {
            "key": "B",
            "text": "$9x^2 - 12xy + 4y^2$"
          },
          {
            "key": "C",
            "text": "$9x^2 - 4y^2$"
          },
          {
            "key": "D",
            "text": "$9x^2 + 12xy + 4y^2$"
          }
        ],
        "correct": "B",
        "explanation": "$(3x)^2 - 2 \\cdot 3x \\cdot 2y + (2y)^2 = 9x^2 - 12xy + 4y^2$."
      },
      {
        "id": 409,
        "part": 1,
        "topic": "Hằng đẳng thức lập phương",
        "content": "Viết biểu thức $x^3 - 6x^2 + 12x - 8$ dưới dạng lập phương của một hiệu:",
        "options": [
          {
            "key": "A",
            "text": "$(x - 8)^3$"
          },
          {
            "key": "B",
            "text": "$(x - 2)^3$"
          },
          {
            "key": "C",
            "text": "$(x + 2)^3$"
          },
          {
            "key": "D",
            "text": "$(x - 4)^3$"
          }
        ],
        "correct": "B",
        "explanation": "$x^3 - 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 - 2^3 = (x - 2)^3$."
      },
      {
        "id": 410,
        "part": 1,
        "topic": "Tổng các góc trong tứ giác",
        "content": "Một tứ giác có số đo ba góc lần lượt là $70^\\circ, 110^\\circ, 80^\\circ$. Số đo góc còn lại bằng:",
        "options": [
          {
            "key": "A",
            "text": "$90^\\circ$"
          },
          {
            "key": "B",
            "text": "$100^\\circ$"
          },
          {
            "key": "C",
            "text": "$110^\\circ$"
          },
          {
            "key": "D",
            "text": "$120^\\circ$"
          }
        ],
        "correct": "B",
        "explanation": "Tổng 4 góc trong tứ giác bằng $360^\\circ$. Góc còn lại: $360^\\circ - (70^\\circ + 110^\\circ + 80^\\circ) = 360^\\circ - 260^\\circ = 100^\\circ$."
      },
      {
        "id": 411,
        "part": 1,
        "topic": "Hình thang cân",
        "content": "Khẳng định nào sau đây là ĐÚNG về hình thang cân?",
        "options": [
          {
            "key": "A",
            "text": "Hình thang cân có hai đường chéo vuông góc với nhau"
          },
          {
            "key": "B",
            "text": "Hình thang cân có hai đường chéo bằng nhau"
          },
          {
            "key": "C",
            "text": "Hình thang cân có bốn cạnh bằng nhau"
          },
          {
            "key": "D",
            "text": "Hình thang cân có hai góc đối bằng nhau"
          }
        ],
        "correct": "B",
        "explanation": "Theo định lí về tính chất hình thang cân, trong hình thang cân hai đường chéo bằng nhau."
      },
      {
        "id": 412,
        "part": 1,
        "topic": "Tứ giác MNPQ",
        "svgKey": "cau12_de4",
        "content": "Cho tứ giác $MNPQ$ (hình vẽ) có $\\widehat{M} = 85^\\circ, \\widehat{N} = 115^\\circ, \\widehat{P} = 65^\\circ$. Số đo góc $\\widehat{Q}$ là:",
        "options": [
          {
            "key": "A",
            "text": "$85^\\circ$"
          },
          {
            "key": "B",
            "text": "$90^\\circ$"
          },
          {
            "key": "C",
            "text": "$95^\\circ$"
          },
          {
            "key": "D",
            "text": "$105^\\circ$"
          }
        ],
        "correct": "C",
        "explanation": "Số đo góc $\\widehat{Q} = 360^\\circ - (85^\\circ + 115^\\circ + 65^\\circ) = 360^\\circ - 265^\\circ = 95^\\circ$."
      }
    ],
    "part2": [
      {
        "id": 413,
        "part": 2,
        "topic": "Thu gọn & Bậc đa thức",
        "content": "Cho đa thức $P = 5x^2y - 3xy^2 + 2x^2y - 4xy^2 + 1$. Xét tính đúng/sai của các mệnh đề sau:",
        "items": [
          {
            "key": "A",
            "text": "Thu gọn đa thức $P$ ta được $P = 7x^2y - 7xy^2 + 1$.",
            "correct": true,
            "explanation": "$P = (5x^2y + 2x^2y) + (-3xy^2 - 4xy^2) + 1 = 7x^2y - 7xy^2 + 1$."
          },
          {
            "key": "B",
            "text": "Bậc của đa thức $P$ bằng 4.",
            "correct": false,
            "explanation": "Hạng tử $7x^2y$ có bậc 3, $-7xy^2$ có bậc 3. Do đó bậc của đa thức là 3, không phải 4."
          },
          {
            "key": "C",
            "text": "Tại $x = 1, y = -1$, giá trị của $P$ bằng $-13$.",
            "correct": true,
            "explanation": "Thay $x = 1, y = -1$: $7(1)^2(-1) - 7(1)(-1)^2 + 1 = -7 - 7 + 1 = -13$."
          },
          {
            "key": "D",
            "text": "Biểu thức $P - (7x^2y - 7xy^2)$ nhận giá trị bằng 1 với mọi $x, y$.",
            "correct": true,
            "explanation": "$(7x^2y - 7xy^2 + 1) - (7x^2y - 7xy^2) = 1$ với mọi $x, y$."
          }
        ]
      },
      {
        "id": 414,
        "part": 2,
        "topic": "Góc xOy & Phân giác Oz",
        "content": "Cho góc nhọn $xOy = 60^\\circ$, tia phân giác $Oz$. Lấy điểm $P$ trên tia $Oz$. Từ $P$ kẻ $PE \\perp Ox$ tại $E$ và $PF \\perp Oy$ tại $F$. Xét tính đúng/sai của các mệnh đề sau:",
        "svgKey": "cau14_de4",
        "items": [
          {
            "key": "A",
            "text": "$\\triangle OEP = \\triangle OFP$.",
            "correct": true,
            "explanation": "Hai tam giác vuông có cạnh huyền $OP$ chung và góc nhọn $\\widehat{EOP} = \\widehat{FOP} = 30^\\circ$ nên $\\triangle OEP = \\triangle OFP$."
          },
          {
            "key": "B",
            "text": "Đoạn thẳng $PE = PF$.",
            "correct": true,
            "explanation": "Do $\\triangle OEP = \\triangle OFP$ nên hai cạnh tương ứng $PE = PF$ (điểm trên phân giác cách đều hai cạnh của góc)."
          },
          {
            "key": "C",
            "text": "Tứ giác $OEPF$ có tổng hai góc $\\widehat{xOy} + \\widehat{EPF} = 180^\\circ$.",
            "correct": true,
            "explanation": "Tổng 4 góc trong tứ giác $OEPF$ là $360^\\circ$, mà $\\widehat{OEP} = \\widehat{OFP} = 90^\\circ$ nên $\\widehat{xOy} + \\widehat{EPF} = 360^\\circ - 180^\\circ = 180^\\circ$."
          },
          {
            "key": "D",
            "text": "Số đo góc $\\widehat{EPF} = 130^\\circ$.",
            "correct": false,
            "explanation": "Ta có $\\widehat{EPF} = 180^\\circ - \\widehat{xOy} = 180^\\circ - 60^\\circ = 120^\\circ$, không phải $130^\\circ$."
          }
        ]
      }
    ],
    "part3": [
      {
        "id": 415,
        "part": 3,
        "topic": "Giá trị biểu thức",
        "content": "Thu gọn biểu thức $A = (2x + 5)^2 - (2x - 5)^2$. Tại $x = 3$, giá trị của biểu thức $A$ bằng bao nhiêu?",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "120"
        ],
        "explanation": "Áp dụng $a^2 - b^2$: $A = [(2x + 5) - (2x - 5)][(2x + 5) + (2x - 5)] = 10 \\cdot 4x = 40x$. Tại $x = 3 \\implies A = 40 \\cdot 3 = 120$."
      },
      {
        "id": 416,
        "part": 3,
        "topic": "Tìm x",
        "content": "Tìm $x$ biết: $(x + 4)^2 - x(x + 5) = 19$.",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "1",
          "x=1",
          "x = 1"
        ],
        "explanation": "$x^2 + 8x + 16 - (x^2 + 5x) = 19 \\iff 3x + 16 = 19 \\iff 3x = 3 \\iff x = 1$."
      },
      {
        "id": 417,
        "part": 3,
        "topic": "Góc tứ giác",
        "content": "Cho tứ giác $MNPQ$ có $\\widehat{M} = 60^\\circ, \\widehat{N} = 120^\\circ, \\widehat{P} = 100^\\circ$. Số đo góc $\\widehat{Q}$ bằng bao nhiêu độ?",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "80",
          "80°",
          "80 độ"
        ],
        "explanation": "Tổng 4 góc tứ giác là $360^\\circ \\implies \\widehat{Q} = 360^\\circ - (60^\\circ + 120^\\circ + 100^\\circ) = 360^\\circ - 280^\\circ = 80^\\circ$."
      },
      {
        "id": 418,
        "part": 3,
        "topic": "Diện tích hình thang cân",
        "content": "Cho hình thang cân $ABCD$ ($AB // CD$) có đáy nhỏ $AB = 6\\text{ cm}$, đáy lớn $CD = 14\\text{ cm}$, đường cao $AH = 4\\text{ cm}$. Diện tích của hình thang cân $ABCD$ bằng bao nhiêu $\\text{cm}^2$?",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "40",
          "40 cm2",
          "40cm2"
        ],
        "explanation": "Diện tích hình thang: $S = \\frac{(a + b) \\cdot h}{2} = \\frac{(6 + 14) \\cdot 4}{2} = \\frac{20 \\cdot 4}{2} = 40\\text{ (cm}^2\\text{)}$."
      }
    ],
    "part4": [
      {
        "num": "Bài 1 (1,0 điểm)",
        "title": "Rút gọn các biểu thức đại số:",
        "subItems": [
          {
            "sub": "a)",
            "problem": "$(4x^3 - 3x^2y + 2xy^2 + 5) + (-2x^3 - 3x^2y - 2xy^2 + 1)$",
            "points": "0,5 điểm",
            "solution": "$= (4x^3 - 2x^3) + (-3x^2y - 3x^2y) + (2xy^2 - 2xy^2) + (5 + 1) = 2x^3 - 6x^2y + 6$"
          },
          {
            "sub": "b)",
            "problem": "$(3x - 2y)(3x + 2y) + (x - 3y)^2$",
            "points": "0,5 điểm",
            "solution": "$= (9x^2 - 4y^2) + (x^2 - 6xy + 9y^2) = 10x^2 - 6xy + 5y^2$"
          }
        ]
      },
      {
        "num": "Bài 2 (1,0 điểm)",
        "title": "Bài toán thực tế diện tích:",
        "svgKey": "bai4_de4",
        "description": "Một khu đất hình chữ nhật có kích thước $3x + 4$ (m) và $y + 5$ (m). Người ta dành một phần hình chữ nhật có kích thước $x$ (m) và $y$ (m) ở góc để làm kho vật tư, phần còn lại có dạng chữ L như hình vẽ.",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Viết biểu thức biểu thị diện tích phần đất chữ L và thu gọn biểu thức đó.",
            "points": "0,5 điểm",
            "solution": "Diện tích toàn bộ khu đất: $S_{tong} = (3x + 4)(y + 5) = 3xy + 15x + 4y + 20\\text{ }(m^2)$.\nDiện tích nhà kho: $S_{kho} = xy\\text{ }(m^2)$.\nDiện tích phần đất chữ L: $S_L = S_{tong} - S_{kho} = 2xy + 15x + 4y + 20\\text{ }(m^2)$."
          },
          {
            "sub": "b)",
            "problem": "Tính diện tích phần đất hình chữ L khi $x = 4$ và $y = 3$.",
            "points": "0,5 điểm",
            "solution": "Thay $x = 4$ và $y = 3$ vào biểu thức $S_L$:\n$S_L = 2(4)(3) + 15(4) + 4(3) + 20 = 24 + 60 + 12 + 20 = 116\\text{ }(m^2)$."
          }
        ]
      },
      {
        "num": "Bài 3 (1,0 điểm)",
        "title": "Hình học tổng hợp:",
        "svgKey": "bai6_de4",
        "description": "Cho tam giác $DEF$ vuông tại $D$ ($DE < DF$), đường cao $DH$. Từ $H$ kẻ $HP \\perp DE$ tại $P$, $HQ \\perp DF$ tại $Q$.",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Chứng minh tứ giác DPHQ là hình chữ nhật.",
            "points": "0,5 điểm",
            "solution": "Xét tứ giác $DPHQ$ có:\n$\\widehat{EDF} = 90^\\circ$ (do $\\triangle DEF$ vuông tại $D$),\n$\\widehat{HPD} = 90^\\circ$ ($HP \\perp DE$),\n$\\widehat{HQD} = 90^\\circ$ ($HQ \\perp DF$).\nTứ giác có ba góc vuông nên $DPHQ$ là hình chữ nhật."
          },
          {
            "sub": "b)",
            "problem": "Gọi $M$ là trung điểm của $HF$, lấy điểm $K$ sao cho $M$ là trung điểm của $DK$. Chứng minh tứ giác PQFK là hình thang cân.",
            "points": "0,5 điểm",
            "solution": "Tứ giác $DHFK$ có hai đường chéo $DK$ và $HF$ cắt nhau tại trung điểm $M$ nên $DHFK$ là hình bình hành $\\implies FK // DH$ và $FK = DH$.\nDo $DH \\perp EF \\implies FK \\perp EF$.\nTrong hình chữ nhật $DPHQ$, hai đường chéo bằng nhau: $PQ = DH = FK$ và $PQ // EF$, từ đó suy ra $PQFK$ là hình thang có hai đường chéo bằng nhau, do đó $PQFK$ là hình thang cân."
          }
        ]
      }
    ]
  },
  {
    "id": "de5",
    "code": "ĐỀ SỐ 05",
    "title": "ĐỀ ÔN TẬP KIỂM TRA GIỮA HỌC KÌ 1 – TOÁN 8 (ĐỀ SỐ 05)",
    "timeMinutes": 90,
    "part1": [
      {
        "id": 501,
        "part": 1,
        "topic": "Đơn thức đồng dạng",
        "content": "Đơn thức nào sau đây đồng dạng với đơn thức $-5x^3y^2$?",
        "options": [
          {
            "key": "A",
            "text": "$3x^2y^3$"
          },
          {
            "key": "B",
            "text": "$\\frac{2}{5}x^3y^2$"
          },
          {
            "key": "C",
            "text": "$-5x^3y$"
          },
          {
            "key": "D",
            "text": "$2x^2y^2$"
          }
        ],
        "correct": "B",
        "explanation": "Hai đơn thức đồng dạng có hệ số khác 0 và có cùng phần biến $x^3y^2$."
      },
      {
        "id": 502,
        "part": 1,
        "topic": "Thu gọn đa thức",
        "content": "Thu gọn đa thức $4x^2y - 2xy + 3x^2y + 5xy$ ta được:",
        "options": [
          {
            "key": "A",
            "text": "$7x^2y + 3xy$"
          },
          {
            "key": "B",
            "text": "$7x^4y^2 + 3x^2y^2$"
          },
          {
            "key": "C",
            "text": "$x^2y + 3xy$"
          },
          {
            "key": "D",
            "text": "$7x^2y - 3xy$"
          }
        ],
        "correct": "A",
        "explanation": "$(4x^2y + 3x^2y) + (-2xy + 5xy) = 7x^2y + 3xy$."
      },
      {
        "id": 503,
        "part": 1,
        "topic": "Bậc của đa thức",
        "content": "Bậc của đa thức $2x^4y - 5x^3y^3 + 7xy^2 - 1$ là:",
        "options": [
          {
            "key": "A",
            "text": "4"
          },
          {
            "key": "B",
            "text": "5"
          },
          {
            "key": "C",
            "text": "6"
          },
          {
            "key": "D",
            "text": "7"
          }
        ],
        "correct": "C",
        "explanation": "Hạng tử $-5x^3y^3$ có bậc cao nhất là $3 + 3 = 6$. Vậy bậc của đa thức là 6."
      },
      {
        "id": 504,
        "part": 1,
        "topic": "Tổng hai lập phương",
        "content": "Khai triển hằng đẳng thức $(x + 3)(x^2 - 3x + 9)$ ta được:",
        "options": [
          {
            "key": "A",
            "text": "$x^3 + 27$"
          },
          {
            "key": "B",
            "text": "$x^3 - 27$"
          },
          {
            "key": "C",
            "text": "$x^3 + 9$"
          },
          {
            "key": "D",
            "text": "$(x + 3)^3$"
          }
        ],
        "correct": "A",
        "explanation": "$(x + 3)(x^2 - 3x + 9) = x^3 + 3^3 = x^3 + 27$."
      },
      {
        "id": 505,
        "part": 1,
        "topic": "Lập phương một tổng",
        "content": "Khai triển lập phương của một tổng $(2x + 1)^3$ ta được:",
        "options": [
          {
            "key": "A",
            "text": "$8x^3 + 12x^2 + 6x + 1$"
          },
          {
            "key": "B",
            "text": "$8x^3 + 6x^2 + 6x + 1$"
          },
          {
            "key": "C",
            "text": "$8x^3 + 1$"
          },
          {
            "key": "D",
            "text": "$8x^3 + 4x^2 + 2x + 1$"
          }
        ],
        "correct": "A",
        "explanation": "$(2x)^3 + 3(2x)^2(1) + 3(2x)(1)^2 + 1^3 = 8x^3 + 12x^2 + 6x + 1$."
      },
      {
        "id": 506,
        "part": 1,
        "topic": "Tính giá trị",
        "content": "Giá trị của biểu thức $M = (x - 1)^3$ tại $x = 11$ bằng:",
        "options": [
          {
            "key": "A",
            "text": "100"
          },
          {
            "key": "B",
            "text": "1000"
          },
          {
            "key": "C",
            "text": "121"
          },
          {
            "key": "D",
            "text": "1331"
          }
        ],
        "correct": "B",
        "explanation": "Thay $x = 11$: $M = (11 - 1)^3 = 10^3 = 1000$."
      },
      {
        "id": 507,
        "part": 1,
        "topic": "Tứ giác lồi",
        "content": "Tứ giác lồi là tứ giác:",
        "options": [
          {
            "key": "A",
            "text": "Luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kì cạnh nào"
          },
          {
            "key": "B",
            "text": "Có 4 cạnh bằng nhau"
          },
          {
            "key": "C",
            "text": "Có 4 góc bằng nhau"
          },
          {
            "key": "D",
            "text": "Có hai đường chéo vuông góc"
          }
        ],
        "correct": "A",
        "explanation": "Định nghĩa: Tứ giác lồi là tứ giác luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kì cạnh nào của tứ giác."
      },
      {
        "id": 508,
        "part": 1,
        "topic": "Định nghĩa hình thang",
        "content": "Hình thang là tứ giác có:",
        "options": [
          {
            "key": "A",
            "text": "Hai cạnh kề bằng nhau"
          },
          {
            "key": "B",
            "text": "Hai cạnh đối song song"
          },
          {
            "key": "C",
            "text": "Hai đường chéo vuông góc"
          },
          {
            "key": "D",
            "text": "Bốn góc bằng nhau"
          }
        ],
        "correct": "B",
        "explanation": "Hình thang là tứ giác có hai cạnh đối song song."
      },
      {
        "id": 509,
        "part": 1,
        "topic": "Dấu hiệu nhận biết hình chữ nhật",
        "content": "Hình bình hành có một góc vuông là:",
        "options": [
          {
            "key": "A",
            "text": "Hình thoi"
          },
          {
            "key": "B",
            "text": "Hình chữ nhật"
          },
          {
            "key": "C",
            "text": "Hình vuông"
          },
          {
            "key": "D",
            "text": "Hình thang cân"
          }
        ],
        "correct": "B",
        "explanation": "Dấu hiệu nhận biết: Hình bình hành có một góc vuông là hình chữ nhật."
      },
      {
        "id": 510,
        "part": 1,
        "topic": "Định nghĩa hình thoi",
        "content": "Hình thoi là tứ giác có:",
        "options": [
          {
            "key": "A",
            "text": "Hai cạnh kề bằng nhau"
          },
          {
            "key": "B",
            "text": "Bốn góc bằng nhau"
          },
          {
            "key": "C",
            "text": "Bốn cạnh bằng nhau"
          },
          {
            "key": "D",
            "text": "Hai đường chéo bằng nhau"
          }
        ],
        "correct": "C",
        "explanation": "Định nghĩa: Hình thoi là tứ giác có bốn cạnh bằng nhau."
      },
      {
        "id": 511,
        "part": 1,
        "topic": "Tứ giác ABCD",
        "svgKey": "cau11_de5",
        "content": "Cho tứ giác $ABCD$ như hình vẽ có $AD = BC$. Khẳng định nào sau đây là điều kiện để tứ giác $ABCD$ là hình bình hành?",
        "options": [
          {
            "key": "A",
            "text": "$AB = CD$"
          },
          {
            "key": "B",
            "text": "$AC = BD$"
          },
          {
            "key": "C",
            "text": "$\\widehat{A} = \\widehat{C}$"
          },
          {
            "key": "D",
            "text": "$AB \\perp CD$"
          }
        ],
        "correct": "A",
        "explanation": "Dấu hiệu: Tứ giác có các cạnh đối bằng nhau ($AD = BC$ và $AB = CD$) là hình bình hành."
      },
      {
        "id": 512,
        "part": 1,
        "topic": "Hình chữ nhật MNPQ",
        "svgKey": "cau12_de5",
        "content": "Cho hình chữ nhật $MNPQ$ (hình vẽ) có hai đường chéo $MP$ và $NQ$ cắt nhau tại $O$. Biết $MP = 12\\text{ cm}$. Độ dài đoạn thẳng $OP$ bằng:",
        "options": [
          {
            "key": "A",
            "text": "$12\\text{ cm}$"
          },
          {
            "key": "B",
            "text": "$6\\text{ cm}$"
          },
          {
            "key": "C",
            "text": "$24\\text{ cm}$"
          },
          {
            "key": "D",
            "text": "$3\\text{ cm}$"
          }
        ],
        "correct": "B",
        "explanation": "Trong hình chữ nhật, giao điểm hai đường chéo là trung điểm của mỗi đường nên $OP = \\frac{1}{2}MP = \\frac{12}{2} = 6\\text{ cm}$."
      }
    ],
    "part2": [
      {
        "id": 513,
        "part": 2,
        "topic": "Cộng trừ đa thức nhiều biến",
        "content": "Cho hai đa thức $A = 3x^2 - 2xy + y^2$ và $B = x^2 + 3xy - 2y^2$. Xét tính đúng/sai của các mệnh đề sau:",
        "items": [
          {
            "key": "A",
            "text": "$A + B = 4x^2 + xy - y^2$.",
            "correct": true,
            "explanation": "$A + B = (3x^2 + x^2) + (-2xy + 3xy) + (y^2 - 2y^2) = 4x^2 + xy - y^2$."
          },
          {
            "key": "B",
            "text": "$A - B = 2x^2 - 5xy + 3y^2$.",
            "correct": true,
            "explanation": "$A - B = (3x^2 - x^2) + (-2xy - 3xy) + [y^2 - (-2y^2)] = 2x^2 - 5xy + 3y^2$."
          },
          {
            "key": "C",
            "text": "Bậc của đa thức $A + B$ bằng 4.",
            "correct": false,
            "explanation": "Các hạng tử $4x^2, xy, -y^2$ đều có bậc 2 nên bậc của $A + B$ bằng 2, không phải 4."
          },
          {
            "key": "D",
            "text": "Tại $x = 1, y = 2$, giá trị của $A + B$ bằng 2.",
            "correct": true,
            "explanation": "Thay $x = 1, y = 2$: $4(1)^2 + 1(2) - 2^2 = 4 + 2 - 4 = 2$."
          }
        ]
      },
      {
        "id": 514,
        "part": 2,
        "topic": "Hình bình hành MNPQ",
        "content": "Cho hình bình hành $MNPQ$ có hai đường chéo $MP$ và $NQ$ cắt nhau tại điểm $I$. Xét tính đúng/sai của các mệnh đề sau:",
        "svgKey": "cau14_de5",
        "items": [
          {
            "key": "A",
            "text": "Điểm $I$ là trung điểm của cả hai đường chéo $MP$ và $NQ$.",
            "correct": true,
            "explanation": "Trong hình bình hành, hai đường chéo cắt nhau tại trung điểm của mỗi đường."
          },
          {
            "key": "B",
            "text": "$\\triangle IMN = \\triangle IPQ$.",
            "correct": true,
            "explanation": "Do $IM = IP, IN = IQ$ và góc đối đỉnh $\\widehat{MIN} = \\widehat{PIQ}$ nên $\\triangle IMN = \\triangle IPQ$ (c-g-c)."
          },
          {
            "key": "C",
            "text": "Hai góc đối $\\widehat{MNP}$ và $\\widehat{MQP}$ bằng nhau.",
            "correct": true,
            "explanation": "Trong hình bình hành, các góc đối bằng nhau: $\\widehat{MNP} = \\widehat{MQP}$."
          },
          {
            "key": "D",
            "text": "Nếu $MP \\perp NQ$ thì hình bình hành $MNPQ$ là hình chữ nhật.",
            "correct": false,
            "explanation": "Hình bình hành có hai đường chéo vuông góc là hình thoi, không phải hình chữ nhật."
          }
        ]
      }
    ],
    "part3": [
      {
        "id": 515,
        "part": 3,
        "topic": "Rút gọn hằng đẳng thức",
        "content": "Rút gọn biểu thức $(x - 4)(x + 4) - (x + 2)^2$ ta được biểu thức dạng $ax + b$. Giá trị của tổng $a + b$ bằng bao nhiêu?",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "-24"
        ],
        "explanation": "$(x^2 - 16) - (x^2 + 4x + 4) = -4x - 20$. Suy ra $a = -4, b = -20 \\implies a + b = -4 + (-20) = -24$."
      },
      {
        "id": 516,
        "part": 3,
        "topic": "Giá trị nhỏ nhất",
        "content": "Tìm giá trị nhỏ nhất của biểu thức $M = x^2 - 6x + 14$.",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "5"
        ],
        "explanation": "$M = (x^2 - 6x + 9) + 5 = (x - 3)^2 + 5 \\ge 5$. Dấu '=' xảy ra khi $x = 3$. Giá trị nhỏ nhất là 5."
      },
      {
        "id": 517,
        "part": 3,
        "topic": "Cạnh hình thoi",
        "content": "Cho hình thoi $ABCD$ có độ dài hai đường chéo là $AC = 12\\text{ cm}$ và $BD = 16\\text{ cm}$. Độ dài cạnh của hình thoi bằng bao nhiêu cm?",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "10",
          "10 cm",
          "10cm"
        ],
        "explanation": "Hai đường chéo vuông góc tại trung điểm mỗi đường. Nửa các đường chéo: $OA = 6\\text{ cm}, OB = 8\\text{ cm}$. Cạnh hình thoi $AB = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10\\text{ cm}$."
      },
      {
        "id": 518,
        "part": 3,
        "topic": "Trung tuyến tam giác vuông",
        "content": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 9\\text{ cm}, AC = 12\\text{ cm}$. Gọi $M$ là trung điểm của $BC$. Độ dài đoạn thẳng $AM$ bằng bao nhiêu cm?",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "7.5",
          "7,5",
          "15/2"
        ],
        "explanation": "$BC = \\sqrt{AB^2 + AC^2} = \\sqrt{9^2 + 12^2} = 15\\text{ cm}$. Trung tuyến ứng với cạnh huyền: $AM = \\frac{1}{2}BC = 7,5\\text{ cm}$."
      }
    ],
    "part4": [
      {
        "num": "Bài 1 (1,0 điểm)",
        "title": "Tìm x, biết:",
        "subItems": [
          {
            "sub": "a)",
            "problem": "$(x - 3)^2 - (x + 2)(x - 4) = 0$",
            "points": "0,5 điểm",
            "solution": "$(x^2 - 6x + 9) - (x^2 - 2x - 8) = 0 \\iff -4x + 17 = 0 \\iff x = \\frac{17}{4}$."
          },
          {
            "sub": "b)",
            "problem": "$(3x - 1)^2 - (3x + 2)(3x - 2) = 17$",
            "points": "0,5 điểm",
            "solution": "$(9x^2 - 6x + 1) - (9x^2 - 4) = 17 \\iff -6x + 5 = 17 \\iff -6x = 12 \\iff x = -2$."
          }
        ]
      },
      {
        "num": "Bài 2 (1,0 điểm)",
        "title": "Bài toán thực tế khu vườn trồng hoa:",
        "svgKey": "bai5_de5",
        "description": "Một khu vườn có dạng hình vuông cạnh $y$ (m). Người ta muốn dành một mảnh đất hình chữ nhật ở góc khu vườn để trồng hoa (như hình vẽ). Biết một chiều bị bớt đi $20\\text{ m}$ và một chiều bị bớt đi $12\\text{ m}$ ($y > 20$). Diện tích của mảnh đất trồng hoa bằng $180\\text{ m}^2$. Tính độ dài cạnh $y$ (m) của khu vườn đó.",
        "subItems": [
          {
            "sub": "Giải",
            "problem": "Tính độ dài cạnh $y$ (m) của khu vườn hình vuông.",
            "points": "1,0 điểm",
            "solution": "Chiều rộng và chiều dài mảnh đất trồng hoa là $y - 20$ (m) và $y - 12$ (m) ($y > 20$).\nDiện tích mảnh đất trồng hoa bằng $180\\text{ m}^2$:\n$(y - 20)(y - 12) = 180 \\iff y^2 - 32y + 240 = 180 \\iff y^2 - 32y + 60 = 0 \\iff (y - 30)(y - 2) = 0$.\nVì $y > 20$ nên $y = 30\\text{ m}$.\nVậy độ dài cạnh của khu vườn là $30\\text{ m}$."
          }
        ]
      },
      {
        "num": "Bài 3 (1,0 điểm)",
        "title": "Hình học tổng hợp:",
        "svgKey": "bai7_de5",
        "description": "Cho tam giác $ABC$ vuông tại $B$, gọi $K$ là trung điểm của cạnh huyền $AC$. Từ $K$ kẻ $KD \\perp AB$ tại $D$ và $KE \\perp BC$ tại $E$.",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Tứ giác BDKE là hình gì? Vì sao?",
            "points": "0,5 điểm",
            "solution": "Tứ giác $BDKE$ có $\\widehat{B} = 90^\\circ$ (tam giác vuông tại $B$), $\\widehat{KDB} = 90^\\circ$ ($KD \\perp AB$), $\\widehat{KEB} = 90^\\circ$ ($KE \\perp BC$).\nTứ giác có ba góc vuông nên $BDKE$ là hình chữ nhật."
          },
          {
            "sub": "b)",
            "problem": "Cho $AC = 26\\text{ cm}$. Tính độ dài đoạn thẳng $DE$.",
            "points": "0,5 điểm",
            "solution": "Trong tam giác vuông $ABC$ tại $B$, $BK$ là đường trung tuyến ứng với cạnh huyền $AC$ nên $BK = \\frac{1}{2}AC = \\frac{1}{2} \\times 26 = 13\\text{ cm}$.\nDo $BDKE$ là hình chữ nhật nên hai đường chéo bằng nhau: $DE = BK = 13\\text{ cm}$."
          }
        ]
      }
    ]
  },
  {
    "id": "de6",
    "code": "ĐỀ SỐ 06",
    "title": "ĐỀ ÔN TẬP KIỂM TRA GIỮA HỌC KÌ 1 – TOÁN 8 (ĐỀ SỐ 06)",
    "timeMinutes": 90,
    "part1": [
      {
        "id": 601,
        "part": 1,
        "topic": "Đơn thức thu gọn",
        "content": "Biểu thức nào sau đây là đơn thức thu gọn?",
        "options": [
          {
            "key": "A",
            "text": "$-\\frac{5}{7}x^4y^2$"
          },
          {
            "key": "B",
            "text": "$2x^2 \\cdot 3y$"
          },
          {
            "key": "C",
            "text": "$x + 2y$"
          },
          {
            "key": "D",
            "text": "$3x(x - 1)$"
          }
        ],
        "correct": "A",
        "explanation": "Đơn thức thu gọn chỉ gồm tích của một số với các biến mà mỗi biến đã được nâng lên lũy thừa với số mũ nguyên dương. $-\\frac{5}{7}x^4y^2$ là đơn thức thu gọn."
      },
      {
        "id": 602,
        "part": 1,
        "topic": "Bậc của đơn thức",
        "content": "Bậc của đơn thức $-2x^4y^3z$ bằng:",
        "options": [
          {
            "key": "A",
            "text": "7"
          },
          {
            "key": "B",
            "text": "8"
          },
          {
            "key": "C",
            "text": "9"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "correct": "B",
        "explanation": "Tổng số mũ của các biến: $4 + 3 + 1 = 8$ (chú ý biến $z$ có số mũ là 1)."
      },
      {
        "id": 603,
        "part": 1,
        "topic": "Trừ đơn thức đồng dạng",
        "content": "Kết quả của phép tính trừ hai đơn thức $7x^2y^3 - 9x^2y^3$ là:",
        "options": [
          {
            "key": "A",
            "text": "$-2x^2y^3$"
          },
          {
            "key": "B",
            "text": "$2x^2y^3$"
          },
          {
            "key": "C",
            "text": "$-16x^2y^3$"
          },
          {
            "key": "D",
            "text": "$-2$"
          }
        ],
        "correct": "A",
        "explanation": "$(7 - 9)x^2y^3 = -2x^2y^3$."
      },
      {
        "id": 604,
        "part": 1,
        "topic": "Hiệu hai bình phương",
        "content": "Khai triển hằng đẳng thức $(3x - 4y)(3x + 4y)$ ta được:",
        "options": [
          {
            "key": "A",
            "text": "$9x^2 - 16y^2$"
          },
          {
            "key": "B",
            "text": "$9x^2 + 16y^2$"
          },
          {
            "key": "C",
            "text": "$3x^2 - 4y^2$"
          },
          {
            "key": "D",
            "text": "$9x^2 - 24xy + 16y^2$"
          }
        ],
        "correct": "A",
        "explanation": "$(3x)^2 - (4y)^2 = 9x^2 - 16y^2$."
      },
      {
        "id": 605,
        "part": 1,
        "topic": "Bình phương một tổng",
        "content": "Khai triển bình phương của một tổng $(2x + 5)^2$ ta được:",
        "options": [
          {
            "key": "A",
            "text": "$4x^2 + 20x + 25$"
          },
          {
            "key": "B",
            "text": "$4x^2 + 10x + 25$"
          },
          {
            "key": "C",
            "text": "$4x^2 + 25$"
          },
          {
            "key": "D",
            "text": "$2x^2 + 20x + 25$"
          }
        ],
        "correct": "A",
        "explanation": "$(2x)^2 + 2(2x)(5) + 5^2 = 4x^2 + 20x + 25$."
      },
      {
        "id": 606,
        "part": 1,
        "topic": "Hiệu hai lập phương",
        "content": "Khai triển hằng đẳng thức $x^3 - 27$ thành nhân tử ta được:",
        "options": [
          {
            "key": "A",
            "text": "$(x - 3)(x^2 + 3x + 9)$"
          },
          {
            "key": "B",
            "text": "$(x - 3)(x^2 - 3x + 9)$"
          },
          {
            "key": "C",
            "text": "$(x - 3)^3$"
          },
          {
            "key": "D",
            "text": "$(x + 3)(x^2 - 3x + 9)$"
          }
        ],
        "correct": "A",
        "explanation": "$x^3 - 3^3 = (x - 3)(x^2 + 3x + 3^2) = (x - 3)(x^2 + 3x + 9)$."
      },
      {
        "id": 607,
        "part": 1,
        "topic": "Góc của tứ giác",
        "content": "Một tứ giác có 4 góc bằng nhau thì số đo mỗi góc bằng:",
        "options": [
          {
            "key": "A",
            "text": "$60^\\circ$"
          },
          {
            "key": "B",
            "text": "$90^\\circ$"
          },
          {
            "key": "C",
            "text": "$120^\\circ$"
          },
          {
            "key": "D",
            "text": "$180^\\circ$"
          }
        ],
        "correct": "B",
        "explanation": "Tổng 4 góc tứ giác là $360^\\circ$. Do 4 góc bằng nhau nên mỗi góc bằng $360^\\circ : 4 = 90^\\circ$."
      },
      {
        "id": 608,
        "part": 1,
        "topic": "Hình thang vuông",
        "content": "Hình thang vuông là hình thang có:",
        "options": [
          {
            "key": "A",
            "text": "Một góc vuông"
          },
          {
            "key": "B",
            "text": "Hai góc vuông kề một đáy"
          },
          {
            "key": "C",
            "text": "Hai đường chéo bằng nhau"
          },
          {
            "key": "D",
            "text": "Hai cạnh bên bằng nhau"
          }
        ],
        "correct": "A",
        "explanation": "Định nghĩa: Hình thang vuông là hình thang có một góc vuông."
      },
      {
        "id": 609,
        "part": 1,
        "topic": "Tứ giác MNPQ",
        "svgKey": "cau9_de6",
        "content": "Cho tứ giác $MNPQ$ (hình vẽ) có hai góc đối $\\widehat{N} = \\widehat{Q} = 110^\\circ$ và $\\widehat{M} = 80^\\circ$. Số đo góc $\\widehat{P}$ bằng:",
        "options": [
          {
            "key": "A",
            "text": "$60^\\circ$"
          },
          {
            "key": "B",
            "text": "$70^\\circ$"
          },
          {
            "key": "C",
            "text": "$80^\\circ$"
          },
          {
            "key": "D",
            "text": "$90^\\circ$"
          }
        ],
        "correct": "A",
        "explanation": "$\\widehat{P} = 360^\\circ - (110^\\circ + 110^\\circ + 80^\\circ) = 360^\\circ - 300^\\circ = 60^\\circ$."
      },
      {
        "id": 610,
        "part": 1,
        "topic": "Tính chất hình thoi",
        "content": "Tứ giác nào sau đây có hai đường chéo vừa vuông góc vừa cắt nhau tại trung điểm của mỗi đường?",
        "options": [
          {
            "key": "A",
            "text": "Hình chữ nhật"
          },
          {
            "key": "B",
            "text": "Hình bình hành"
          },
          {
            "key": "C",
            "text": "Hình thoi"
          },
          {
            "key": "D",
            "text": "Hình thang cân"
          }
        ],
        "correct": "C",
        "explanation": "Hình thoi có hai đường chéo vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường."
      },
      {
        "id": 611,
        "part": 1,
        "topic": "Hình thoi EFGH",
        "svgKey": "cau11_de6",
        "content": "Cho hình thoi $EFGH$ (hình vẽ) có hai đường chéo $EG$ và $FH$ cắt nhau tại $O$. Khẳng định nào sau đây là SAI?",
        "options": [
          {
            "key": "A",
            "text": "$EG \\perp FH$ tại $O$"
          },
          {
            "key": "B",
            "text": "$O$ là trung điểm của $EG$ và $FH$"
          },
          {
            "key": "C",
            "text": "$EF = FG = GH = HE$"
          },
          {
            "key": "D",
            "text": "$EG = FH$"
          }
        ],
        "correct": "D",
        "explanation": "Hai đường chéo của hình thoi nói chung không bằng nhau (chỉ bằng nhau khi nó là hình vuông). Khẳng định D sai."
      },
      {
        "id": 612,
        "part": 1,
        "topic": "Dấu hiệu nhận biết hình bình hành",
        "content": "Dấu hiệu nào sau đây KHÔNG PHẢI là dấu hiệu nhận biết hình bình hành?",
        "options": [
          {
            "key": "A",
            "text": "Tứ giác có các cạnh đối song song"
          },
          {
            "key": "B",
            "text": "Tứ giác có các cạnh đối bằng nhau"
          },
          {
            "key": "C",
            "text": "Tứ giác có hai đường chéo vuông góc với nhau"
          },
          {
            "key": "D",
            "text": "Tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường"
          }
        ],
        "correct": "C",
        "explanation": "Tứ giác có hai đường chéo vuông góc không nhất thiết là hình bình hành (chẳng hạn tứ giác có dạng con diều). Do đó C không phải dấu hiệu nhận biết hình bình hành."
      }
    ],
    "part2": [
      {
        "id": 613,
        "part": 2,
        "topic": "Thu gọn hằng đẳng thức",
        "content": "Cho biểu thức $Q = (2x - 3)^2 - 4x(x - 3)$. Xét tính đúng/sai của các mệnh đề sau:",
        "items": [
          {
            "key": "A",
            "text": "Khai triển $(2x - 3)^2 = 4x^2 - 12x + 9$.",
            "correct": true,
            "explanation": "$(2x - 3)^2 = 4x^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9$."
          },
          {
            "key": "B",
            "text": "Tích $4x(x - 3) = 4x^2 - 12x$.",
            "correct": true,
            "explanation": "$4x \\cdot x - 4x \\cdot 3 = 4x^2 - 12x$."
          },
          {
            "key": "C",
            "text": "Giá trị của biểu thức $Q$ luôn bằng 9 với mọi giá trị của biến $x$.",
            "correct": true,
            "explanation": "$Q = (4x^2 - 12x + 9) - (4x^2 - 12x) = 9$ với mọi $x$."
          },
          {
            "key": "D",
            "text": "Tại $x = 50$, giá trị của $Q$ bằng 109.",
            "correct": false,
            "explanation": "Biểu thức $Q$ luôn bằng 9 với mọi giá trị của $x$, do đó tại $x = 50$ thì $Q = 9$, không phải 109."
          }
        ]
      },
      {
        "id": 614,
        "part": 2,
        "topic": "Tam giác vuông DEF & Trung tuyến DI",
        "content": "Cho tam giác $DEF$ vuông tại $D$, đường trung tuyến $DI$ ứng với cạnh huyền $EF$. Từ $I$ kẻ $IM \\perp DE$ tại $M$, $IN \\perp DF$ tại $N$. Xét tính đúng/sai của các mệnh đề sau:",
        "svgKey": "cau14_de6",
        "items": [
          {
            "key": "A",
            "text": "Tứ giác $DMIN$ là hình chữ nhật.",
            "correct": true,
            "explanation": "Tứ giác có 3 góc vuông tại $D, M, N$ nên là hình chữ nhật."
          },
          {
            "key": "B",
            "text": "Đoạn thẳng $DI = MN$.",
            "correct": true,
            "explanation": "Trong hình chữ nhật $DMIN$, hai đường chéo bằng nhau: $DI = MN$."
          },
          {
            "key": "C",
            "text": "Điểm $M$ là trung điểm của $DE$ và $N$ là trung điểm của $DF$.",
            "correct": true,
            "explanation": "Trong tam giác $DEF$, $I$ là trung điểm $EF$ và $IM // DF \\implies M$ là trung điểm $DE$; tương tự $IN // DE \\implies N$ là trung điểm $DF$."
          },
          {
            "key": "D",
            "text": "Nếu tam giác $DEF$ vuông cân tại $D$ thì tứ giác $DMIN$ là hình vuông.",
            "correct": true,
            "explanation": "Khi $DE = DF$, do $M, N$ là trung điểm nên $DM = DN$. Hình chữ nhật có hai cạnh kề bằng nhau là hình vuông."
          }
        ]
      }
    ],
    "part3": [
      {
        "id": 615,
        "part": 3,
        "topic": "Rút gọn hằng đẳng thức",
        "content": "Thu gọn biểu thức $B = (3x + 2)^2 - (3x - 2)^2$. Tại $x = 5$, giá trị của biểu thức $B$ bằng bao nhiêu?",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "120"
        ],
        "explanation": "$B = (9x^2 + 12x + 4) - (9x^2 - 12x + 4) = 24x$. Tại $x = 5 \\implies B = 24 \\cdot 5 = 120$."
      },
      {
        "id": 616,
        "part": 3,
        "topic": "Giá trị lớn nhất",
        "content": "Tìm giá trị lớn nhất của biểu thức $P = -x^2 + 4x + 7$.",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "11"
        ],
        "explanation": "$P = -(x^2 - 4x + 4) + 11 = -(x - 2)^2 + 11 \\le 11$. Dấu '=' xảy ra khi $x = 2$. Giá trị lớn nhất là 11."
      },
      {
        "id": 617,
        "part": 3,
        "topic": "Tính tổng bình phương",
        "content": "Cho hai số $x, y$ thỏa mãn $x + y = 6$ và $xy = 8$. Tính giá trị của biểu thức $x^2 + y^2$.",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "20"
        ],
        "explanation": "$x^2 + y^2 = (x + y)^2 - 2xy = 6^2 - 2(8) = 36 - 16 = 20$."
      },
      {
        "id": 618,
        "part": 3,
        "topic": "Số đo góc tứ giác",
        "content": "Cho tứ giác $ABCD$ có $\\widehat{A} = 75^\\circ, \\widehat{B} = 105^\\circ, \\widehat{C} = 85^\\circ$. Số đo góc $\\widehat{D}$ bằng bao nhiêu độ?",
        "placeholder": "Nhập kết quả...",
        "validAnswers": [
          "95",
          "95°",
          "95 độ"
        ],
        "explanation": "Tổng 4 góc tứ giác bằng $360^\\circ \\implies \\widehat{D} = 360^\\circ - (75^\\circ + 105^\\circ + 85^\\circ) = 360^\\circ - 265^\\circ = 95^\\circ$."
      }
    ],
    "part4": [
      {
        "num": "Bài 1 (1,0 điểm)",
        "title": "Khai triển và rút gọn biểu thức:",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Khai triển: $(3x - 4y)^2$ và $(2x - 7)(2x + 7)$",
            "points": "0,5 điểm",
            "solution": "- $(3x - 4y)^2 = 9x^2 - 24xy + 16y^2$\n- $(2x - 7)(2x + 7) = 4x^2 - 49$"
          },
          {
            "sub": "b)",
            "problem": "Rút gọn: $4x(x^2 - 3y) + 12xy - 4x^3$",
            "points": "0,5 điểm",
            "solution": "$= 4x^3 - 12xy + 12xy - 4x^3 = 0$"
          }
        ]
      },
      {
        "num": "Bài 2 (1,0 điểm)",
        "title": "Vận dụng hằng đẳng thức & chia hết:",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Chứng minh biểu thức $B = x^2 - 4x + 7$ luôn nhận giá trị dương với mọi số thực $x$.",
            "points": "0,5 điểm",
            "solution": "$B = (x^2 - 4x + 4) + 3 = (x - 2)^2 + 3$.\nVì $(x - 2)^2 \\ge 0$ với mọi $x$ nên $(x - 2)^2 + 3 \\ge 3 > 0$ với mọi $x$ (đpcm)."
          },
          {
            "sub": "b)",
            "problem": "Chứng minh biểu thức $(2n + 3)^2 - 9$ chia hết cho 8 với mọi số nguyên $n$.",
            "points": "0,5 điểm",
            "solution": "$(2n + 3)^2 - 9 = 4n^2 + 12n = 4n(n + 3)$.\n- Nếu $n$ chẵn: $n = 2k \\implies 4n(n+3) = 8k(2k+3) \\ \\vdots \\ 8$.\n- Nếu $n$ lẻ: $n = 2k + 1 \\implies n + 3 = 2(k + 2) \\implies 4n(n+3) = 8(2k+1)(k+2) \\ \\vdots \\ 8$.\nVậy biểu thức luôn chia hết cho 8 với mọi số nguyên $n$ (đpcm)."
          }
        ]
      },
      {
        "num": "Bài 3 (1,0 điểm)",
        "title": "Hình học tổng hợp:",
        "svgKey": "bai8_de6",
        "description": "Cho tam giác $MNP$ vuông tại $M$, đường trung tuyến $MK$. Từ $K$ kẻ $KH \\perp MN$ tại $H$ và $KI \\perp MP$ tại $I$.",
        "subItems": [
          {
            "sub": "a)",
            "problem": "Chứng minh $MK = HI$.",
            "points": "0,5 điểm",
            "solution": "Tứ giác $MHIK$ có $\\widehat{M} = 90^\\circ, \\widehat{MHK} = 90^\\circ, \\widehat{MIK} = 90^\\circ$ nên là hình chữ nhật.\nTrong hình chữ nhật, hai đường chéo bằng nhau nên $MK = HI$."
          },
          {
            "sub": "b)",
            "problem": "Gọi $Q$ là điểm đối xứng với $K$ qua $H$. Chứng minh tứ giác MKNQ là hình thoi.",
            "points": "0,5 điểm",
            "solution": "Trong tam giác vuông $MNP$, $K$ là trung điểm $NP$ và $KH \\perp MN, MP \\perp MN \\implies KH // MP \\implies H$ là trung điểm $MN$.\n$Q$ đối xứng với $K$ qua $H \\implies H$ là trung điểm $QK$.\nTứ giác $MKNQ$ có hai đường chéo $MN$ và $QK$ cắt nhau tại trung điểm $H$ của mỗi đường nên là hình bình hành.\nLại có $MN \\perp QK$ tại $H$ nên hình bình hành có hai đường chéo vuông góc là hình thoi (đpcm)."
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRACTICE_EXAMS;
}
