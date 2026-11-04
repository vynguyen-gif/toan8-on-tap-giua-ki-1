// DỮ LIỆU ĐỀ CƯƠNG ÔN TẬP GIỮA HỌC KÌ 1 – TOÁN 8 (NĂM HỌC 2026 – 2027)
const EXAM_DATA = {
  title: "ĐỀ CƯƠNG ÔN TẬP GIỮA HỌC KÌ 1 – TOÁN 8",
  subTitle: "Năm học 2026 – 2027 • Bộ sách Giáo khoa mới",
  durationMinutes: 90,

  // PHẦN 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (30 CÂU)
  part1: [
    {
      id: 1,
      part: 1,
      topic: "Đơn thức & Đa thức",
      content: "Biểu thức nào sau đây là một đơn thức?",
      options: [
        { key: "A", text: "$x + y$" },
        { key: "B", text: "$-3x^2y^3$" },
        { key: "C", text: "$\\frac{x}{y}$" },
        { key: "D", text: "$x - 2$" }
      ],
      correct: "B",
      explanation: "Đơn thức là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa các số và các biến. Biểu thức $-3x^2y^3$ chỉ gồm tích của hệ số $-3$ và các lũy thừa của biến $x, y$ nên là một đơn thức."
    },
    {
      id: 2,
      part: 1,
      topic: "Đơn thức & Đa thức",
      content: "Phần biến của đơn thức $-\\frac{1}{2}x^3y^2z$ là:",
      options: [
        { key: "A", text: "$-\\frac{1}{2}$" },
        { key: "B", text: "$x^3y^2z$" },
        { key: "C", text: "$x^2y^3z$" },
        { key: "D", text: "$xyz$" }
      ],
      correct: "B",
      explanation: "Đơn thức $-\\frac{1}{2}x^3y^2z$ có hệ số là $-\\frac{1}{2}$ và phần biến là $x^3y^2z$."
    },
    {
      id: 3,
      part: 1,
      topic: "Bậc của đơn thức",
      content: "Bậc của đơn thức $5x^2y^4z$ bằng:",
      options: [
        { key: "A", text: "6" },
        { key: "B", text: "7" },
        { key: "C", text: "2" },
        { key: "D", text: "8" }
      ],
      correct: "B",
      explanation: "Bậc của đơn thức có hệ số khác 0 là tổng số mũ của tất cả các biến có trong đơn thức đó: $2 + 4 + 1 = 7$ (chú ý số mũ của $z$ là 1)."
    },
    {
      id: 4,
      part: 1,
      topic: "Đơn thức đồng dạng",
      content: "Đơn thức nào sau đây đồng dạng với đơn thức $4x^2y^3$?",
      options: [
        { key: "A", text: "$3x^3y^2$" },
        { key: "B", text: "$-\\frac{1}{2}x^2y^3$" },
        { key: "C", text: "$4x^2y^2$" },
        { key: "D", text: "$5xy^3$" }
      ],
      correct: "B",
      explanation: "Hai đơn thức đồng dạng là hai đơn thức có hệ số khác 0 và có cùng phần biến. Đơn thức $-\\frac{1}{2}x^2y^3$ có cùng phần biến $x^2y^3$ với $4x^2y^3$."
    },
    {
      id: 5,
      part: 1,
      topic: "Cộng trừ đơn thức đồng dạng",
      content: "Kết quả của phép tính $3x^2y + 5x^2y$ là:",
      options: [
        { key: "A", text: "$8x^4y^2$" },
        { key: "B", text: "$8x^2y$" },
        { key: "C", text: "$15x^2y$" },
        { key: "D", text: "$8xy$" }
      ],
      correct: "B",
      explanation: "Để cộng hai đơn thức đồng dạng, ta cộng các hệ số và giữ nguyên phần biến: $3x^2y + 5x^2y = (3 + 5)x^2y = 8x^2y$."
    },
    {
      id: 6,
      part: 1,
      topic: "Đa thức",
      content: "Biểu thức nào sau đây là một đa thức?",
      options: [
        { key: "A", text: "$\\frac{x + 1}{y}$" },
        { key: "B", text: "$x^2 - 3xy + 1$" },
        { key: "C", text: "$\\frac{1}{x} + y$" },
        { key: "D", text: "$\\frac{2}{x^2 + 1}$" }
      ],
      correct: "B",
      explanation: "Đa thức là tổng của những đơn thức. Biểu thức $x^2 - 3xy + 1$ là tổng của các đơn thức $x^2$, $-3xy$ và $1$."
    },
    {
      id: 7,
      part: 1,
      topic: "Bậc của đa thức",
      content: "Đa thức $Q = 2x^5y - 3x^2y^3 + 5x^6 - 1$ có bậc là:",
      options: [
        { key: "A", text: "4" },
        { key: "B", text: "5" },
        { key: "C", text: "6" },
        { key: "D", text: "7" }
      ],
      correct: "C",
      explanation: "Xét bậc của các hạng tử trong đa thức thu gọn $Q$:\n- $2x^5y$ có bậc $5 + 1 = 6$\n- $-3x^2y^3$ có bậc $2 + 3 = 5$\n- $5x^6$ có bậc $6$\n- Hạng tử số $-1$ có bậc $0$\nBậc cao nhất là 6 nên bậc của đa thức $Q$ là 6."
    },
    {
      id: 8,
      part: 1,
      topic: "Thu gọn đa thức",
      content: "Thu gọn đa thức $M = 2x^2y - 3xy^2 + 3x^2y + 3xy^2$ ta được:",
      options: [
        { key: "A", text: "$5x^2y$" },
        { key: "B", text: "$5xy^2$" },
        { key: "C", text: "$5x^2y + 6xy^2$" },
        { key: "D", text: "$x^2y$" }
      ],
      correct: "A",
      explanation: "$M = (2x^2y + 3x^2y) + (-3xy^2 + 3xy^2) = 5x^2y + 0 = 5x^2y$."
    },
    {
      id: 9,
      part: 1,
      topic: "Nhân đơn thức với đơn thức",
      content: "Tích của hai đơn thức $2x^2y$ và $-3xy^2$ bằng:",
      options: [
        { key: "A", text: "$-6x^3y^3$" },
        { key: "B", text: "$6x^3y^3$" },
        { key: "C", text: "$-6x^2y^2$" },
        { key: "D", text: "$-x^3y^3$" }
      ],
      correct: "A",
      explanation: "$(2x^2y) \\cdot (-3xy^2) = [2 \\cdot (-3)] \\cdot (x^2 \\cdot x) \\cdot (y \\cdot y^2) = -6x^3y^3$."
    },
    {
      id: 10,
      part: 1,
      topic: "Nhân đơn thức với đa thức",
      content: "Kết quả của phép nhân $2x(x - 3y)$ là:",
      options: [
        { key: "A", text: "$2x^2 - 3y$" },
        { key: "B", text: "$2x^2 - 6xy$" },
        { key: "C", text: "$2x^2 - 3xy$" },
        { key: "D", text: "$2x - 6xy$" }
      ],
      correct: "B",
      explanation: "$2x(x - 3y) = 2x \\cdot x - 2x \\cdot 3y = 2x^2 - 6xy$."
    },
    {
      id: 11,
      part: 1,
      topic: "Chia đơn thức cho đơn thức",
      content: "Phép chia $12x^4y^3 : 3x^2y$ có kết quả là:",
      options: [
        { key: "A", text: "$4x^2y^2$" },
        { key: "B", text: "$4x^2y$" },
        { key: "C", text: "$4x^6y^4$" },
        { key: "D", text: "$36x^2y^2$" }
      ],
      correct: "A",
      explanation: "$12x^4y^3 : 3x^2y = (12 : 3) \\cdot (x^4 : x^2) \\cdot (y^3 : y) = 4x^2y^2$."
    },
    {
      id: 12,
      part: 1,
      topic: "Chia hết của đơn thức",
      content: "Đơn thức $8x^3y^2z$ chia hết cho đơn thức nào sau đây?",
      options: [
        { key: "A", text: "$2x^4y$" },
        { key: "B", text: "$-4x^2y^2$" },
        { key: "C", text: "$3x^2yz^2$" },
        { key: "D", text: "$5xy^3$" }
      ],
      correct: "B",
      explanation: "Đơn thức $A$ chia hết cho đơn thức $B$ khi mỗi biến của $B$ đều là biến của $A$ với số mũ không lớn hơn số mũ của nó trong $A$.\n- $A$ có số mũ $x^4 > x^3$ (loại)\n- $C$ có số mũ $z^2 > z^1$ (loại)\n- $D$ có số mũ $y^3 > y^2$ (loại)\n- $B: -4x^2y^2$ có số mũ $x^2 \\le x^3, y^2 \\le y^2$ (thỏa mãn)."
    },
    {
      id: 13,
      part: 1,
      topic: "Chia đa thức cho đơn thức",
      content: "Thực hiện phép chia $(6x^3y^2 - 4x^2y^3) : 2xy^2$ thu được kết quả:",
      options: [
        { key: "A", text: "$3x^2 - 2xy$" },
        { key: "B", text: "$3x^2y - 2xy^2$" },
        { key: "C", text: "$3x - 2y$" },
        { key: "D", text: "$3x^2 - 2y$" }
      ],
      correct: "A",
      explanation: "$(6x^3y^2 - 4x^2y^3) : 2xy^2 = (6x^3y^2 : 2xy^2) - (4x^2y^3 : 2xy^2) = 3x^2 - 2xy$."
    },
    {
      id: 14,
      part: 1,
      topic: "Hằng đẳng thức đáng nhớ",
      content: "Đẳng thức nào sau đây là hằng đẳng thức?",
      options: [
        { key: "A", text: "$(a + b)^2 = a^2 + 2ab + b^2$" },
        { key: "B", text: "$(a + b)^2 = a^2 + b^2$" },
        { key: "C", text: "$(a - b)^2 = a^2 - b^2$" },
        { key: "D", text: "$a^2 - b^2 = (a - b)^2$" }
      ],
      correct: "A",
      explanation: "Theo hằng đẳng thức bình phương của một tổng: $(a + b)^2 = a^2 + 2ab + b^2$ đúng với mọi giá trị của $a$ và $b$."
    },
    {
      id: 15,
      part: 1,
      topic: "Khai triển bình phương của một tổng",
      content: "Khai triển hằng đẳng thức $(x + 2y)^2$ ta được:",
      options: [
        { key: "A", text: "$x^2 + 2xy + 4y^2$" },
        { key: "B", text: "$x^2 + 4xy + 4y^2$" },
        { key: "C", text: "$x^2 + 4y^2$" },
        { key: "D", text: "$x^2 + 4xy + 2y^2$" }
      ],
      correct: "B",
      explanation: "$(x + 2y)^2 = x^2 + 2 \\cdot x \\cdot (2y) + (2y)^2 = x^2 + 4xy + 4y^2$."
    },
    {
      id: 16,
      part: 1,
      topic: "Hiệu hai bình phương",
      content: "Biểu thức $x^2 - 9$ viết dưới dạng tích là:",
      options: [
        { key: "A", text: "$(x - 9)(x + 9)$" },
        { key: "B", text: "$(x - 3)(x + 3)$" },
        { key: "C", text: "$(x - 3)^2$" },
        { key: "D", text: "$(x + 3)^2$" }
      ],
      correct: "B",
      explanation: "Áp dụng hằng đẳng thức hiệu hai bình phương $a^2 - b^2 = (a - b)(a + b)$ với $9 = 3^2$, ta có: $x^2 - 9 = x^2 - 3^2 = (x - 3)(x + 3)$."
    },
    {
      id: 17,
      part: 1,
      topic: "Lập phương của một hiệu",
      content: "Khai triển hằng đẳng thức $(2x - 1)^3$ ta được:",
      options: [
        { key: "A", text: "$8x^3 - 12x^2 + 6x - 1$" },
        { key: "B", text: "$8x^3 - 1$" },
        { key: "C", text: "$8x^3 - 6x^2 + 6x - 1$" },
        { key: "D", text: "$8x^3 - 4x^2 + 2x - 1$" }
      ],
      correct: "A",
      explanation: "$(2x - 1)^3 = (2x)^3 - 3 \\cdot (2x)^2 \\cdot 1 + 3 \\cdot (2x) \\cdot 1^2 - 1^3 = 8x^3 - 12x^2 + 6x - 1$."
    },
    {
      id: 18,
      part: 1,
      topic: "Định lí tổng các góc của tứ giác",
      content: "Tổng số đo bốn góc trong một tứ giác lồi bằng:",
      options: [
        { key: "A", text: "$180^\\circ$" },
        { key: "B", text: "$360^\\circ$" },
        { key: "C", text: "$270^\\circ$" },
        { key: "D", text: "$90^\\circ$" }
      ],
      correct: "B",
      explanation: "Theo định lí tổng các góc của một tứ giác lồi: Tổng các góc của một tứ giác luôn bằng $360^\\circ$."
    },
    {
      id: 19,
      part: 1,
      topic: "Tính góc trong tứ giác",
      content: "Cho tứ giác $ABCD$ có $\\widehat{A} = 70^\\circ, \\widehat{B} = 80^\\circ, \\widehat{C} = 120^\\circ$. Số đo $\\widehat{D}$ bằng:",
      options: [
        { key: "A", text: "$70^\\circ$" },
        { key: "B", text: "$80^\\circ$" },
        { key: "C", text: "$90^\\circ$" },
        { key: "D", text: "$60^\\circ$" }
      ],
      correct: "C",
      explanation: "Áp dụng định lí tổng các góc của tứ giác $ABCD$:\n$\\widehat{D} = 360^\\circ - (\\widehat{A} + \\widehat{B} + \\widehat{C}) = 360^\\circ - (70^\\circ + 80^\\circ + 120^\\circ) = 360^\\circ - 270^\\circ = 90^\\circ$."
    },
    {
      id: 20,
      part: 1,
      topic: "Định nghĩa hình thang",
      content: "Hình thang là tứ giác có:",
      options: [
        { key: "A", text: "Hai cạnh đối bằng nhau" },
        { key: "B", text: "Hai cạnh đối song song" },
        { key: "C", text: "Hai đường chéo bằng nhau" },
        { key: "D", text: "Hai góc kề một đáy bằng nhau" }
      ],
      correct: "B",
      explanation: "Định nghĩa: Hình thang là tứ giác có hai cạnh đối song song."
    },
    {
      id: 21,
      part: 1,
      topic: "Các yếu tố của tứ giác",
      content: "Cho tứ giác $ABCD$ như hình vẽ bên. Khẳng định nào sau đây là sai?",
      svgKey: "cau21",
      options: [
        { key: "A", text: "$AB$ và $BC$ là hai cạnh kề nhau" },
        { key: "B", text: "$BC$ và $AD$ là hai cạnh đối nhau" },
        { key: "C", text: "$\\widehat{A}$ và $\\widehat{B}$ là hai góc đối nhau" },
        { key: "D", text: "$AC$ và $BD$ là hai đường chéo" }
      ],
      correct: "C",
      explanation: "Trong tứ giác $ABCD$, $\\widehat{A}$ và $\\widehat{C}$ là hai góc đối nhau, $\\widehat{B}$ và $\\widehat{D}$ là hai góc đối nhau. Còn $\\widehat{A}$ và $\\widehat{B}$ là hai góc kề nhau. Do đó khẳng định C là sai."
    },
    {
      id: 22,
      part: 1,
      topic: "Hình thang cân",
      content: "Hình thang có hai góc kề một đáy bằng nhau là:",
      options: [
        { key: "A", text: "Hình thoi" },
        { key: "B", text: "Hình bình hành" },
        { key: "C", text: "Hình thang cân" },
        { key: "D", text: "Hình vuông" }
      ],
      correct: "C",
      explanation: "Dấu hiệu nhận biết hình thang cân: Hình thang có hai góc kề một đáy bằng nhau là hình thang cân."
    },
    {
      id: 23,
      part: 1,
      topic: "Dấu hiệu nhận biết hình bình hành",
      content: "Thêm điều kiện nào trong các điều kiện dưới đây để tứ giác $EFGH$ (có $EH = FG$ như hình vẽ) trở thành hình bình hành?",
      svgKey: "cau23",
      options: [
        { key: "A", text: "$EH // FG$" },
        { key: "B", text: "$EH \\perp FG$" },
        { key: "C", text: "$EG = FH$" },
        { key: "D", text: "$EF \\perp GH$" }
      ],
      correct: "A",
      explanation: "Tứ giác $EFGH$ đã có sẵn hai cạnh đối bằng nhau là $EH = FG$. Để trở thành hình bình hành theo dấu hiệu 'Tứ giác có một cặp cạnh đối song song và bằng nhau là hình bình hành', ta cần thêm điều kiện $EH // FG$."
    },
    {
      id: 24,
      part: 1,
      topic: "Dấu hiệu nhận biết hình bình hành",
      content: "Thêm điều kiện nào trong các điều kiện dưới đây để tứ giác $ABCD$ (có $\\widehat{B} = \\widehat{D}$ như hình vẽ) trở thành hình bình hành?",
      svgKey: "cau24",
      options: [
        { key: "A", text: "$\\widehat{A} = \\widehat{C}$" },
        { key: "B", text: "$AB = CD$" },
        { key: "C", text: "$AC = BD$" },
        { key: "D", text: "$AB \\perp BC$" }
      ],
      correct: "A",
      explanation: "Dấu hiệu nhận biết hình bình hành: 'Tứ giác có các góc đối bằng nhau là hình bình hành'. Hình vẽ đã cho $\\widehat{B} = \\widehat{D}$, do đó nếu có thêm $\\widehat{A} = \\widehat{C}$ thì tứ giác $ABCD$ là hình bình hành."
    },
    {
      id: 25,
      part: 1,
      topic: "Tính chất hình thoi",
      content: "Trong hình thoi, hai đường chéo có tính chất nào sau đây?",
      options: [
        { key: "A", text: "Bằng nhau và vuông góc với nhau" },
        { key: "B", text: "Vuông góc với nhau và là đường phân giác của các góc" },
        { key: "C", text: "Song song với nhau" },
        { key: "D", text: "Bằng nhau và cắt nhau tại trung điểm mỗi đường" }
      ],
      correct: "B",
      explanation: "Định lí về tính chất hình thoi: Trong hình thoi, hai đường chéo vuông góc với nhau và là các đường phân giác của các góc của hình thoi."
    },
    {
      id: 26,
      part: 1,
      topic: "Dấu hiệu nhận biết hình chữ nhật",
      content: "Tứ giác trong hình vẽ bên (có các cạnh đối bằng nhau và một góc vuông) là hình gì?",
      svgKey: "cau26",
      options: [
        { key: "A", text: "Hình bình hành" },
        { key: "B", text: "Hình thoi" },
        { key: "C", text: "Hình chữ nhật" },
        { key: "D", text: "Hình vuông" }
      ],
      correct: "C",
      explanation: "Tứ giác có các cặp cạnh đối bằng nhau là hình bình hành. Hình bình hành có một góc vuông là hình chữ nhật."
    },
    {
      id: 27,
      part: 1,
      topic: "Định nghĩa hình thoi",
      content: "Tứ giác trong hình vẽ bên (có bốn cạnh bằng nhau) là hình gì?",
      svgKey: "cau27",
      options: [
        { key: "A", text: "Hình bình hành" },
        { key: "B", text: "Hình thoi" },
        { key: "C", text: "Hình chữ nhật" },
        { key: "D", text: "Hình vuông" }
      ],
      correct: "B",
      explanation: "Theo định nghĩa: Tứ giác có bốn cạnh bằng nhau là hình thoi."
    },
    {
      id: 28,
      part: 1,
      topic: "Tính chất hình chữ nhật",
      content: "Cho hình chữ nhật $ABCD$ có $AB = 8\\text{ cm}$ và $BC = 6\\text{ cm}$ (như hình vẽ). Khẳng định nào sau đây sai?",
      svgKey: "cau28",
      options: [
        { key: "A", text: "$AC = BD$" },
        { key: "B", text: "$OA = OB = OC = OD$" },
        { key: "C", text: "$DC = 6\\text{ cm}$" },
        { key: "D", text: "$AD = 6\\text{ cm}$" }
      ],
      correct: "C",
      explanation: "Trong hình chữ nhật $ABCD$, các cạnh đối bằng nhau nên $DC = AB = 8\\text{ cm}$. Khẳng định $DC = 6\\text{ cm}$ là sai!"
    },
    {
      id: 29,
      part: 1,
      topic: "Dấu hiệu nhận biết hình thoi",
      content: "Điền cụm từ thích hợp vào chỗ trống: “Hình bình hành có hai đường chéo … là hình thoi”",
      options: [
        { key: "A", text: "bằng nhau" },
        { key: "B", text: "vuông góc với nhau" },
        { key: "C", text: "song song với nhau" },
        { key: "D", text: "cắt nhau" }
      ],
      correct: "B",
      explanation: "Dấu hiệu nhận biết hình thoi: Hình bình hành có hai đường chéo vuông góc với nhau là hình thoi."
    },
    {
      id: 30,
      part: 1,
      topic: "Dấu hiệu nhận biết hình vuông",
      content: "Hình chữ nhật có hai đường chéo vuông góc với nhau là:",
      options: [
        { key: "A", text: "Hình thoi" },
        { key: "B", text: "Hình vuông" },
        { key: "C", text: "Hình bình hành" },
        { key: "D", text: "Hình thang cân" }
      ],
      correct: "B",
      explanation: "Dấu hiệu nhận biết hình vuông: Hình chữ nhật có hai đường chéo vuông góc với nhau là hình vuông."
    }
  ],

  // PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (6 CÂU)
  part2: [
    {
      id: 31,
      part: 2,
      topic: "Thu gọn đa thức và tính giá trị",
      content: "Cho đa thức $A = 5x^4y - 3x^2y^3 + 2xy - 5x^4y + x^2y^3 + 7$. Xét tính Đúng / Sai của các khẳng định sau:",
      items: [
        {
          key: "A",
          text: "Đa thức A có 6 hạng tử trước khi thu gọn.",
          correct: true,
          explanation: "Trước khi thu gọn, A có 6 hạng tử là: $5x^4y$, $-3x^2y^3$, $2xy$, $-5x^4y$, $x^2y^3$, $7$."
        },
        {
          key: "B",
          text: "Thu gọn đa thức A ta được $A = -2x^2y^3 + 2xy + 7$.",
          correct: true,
          explanation: "$A = (5x^4y - 5x^4y) + (-3x^2y^3 + x^2y^3) + 2xy + 7 = -2x^2y^3 + 2xy + 7$."
        },
        {
          key: "C",
          text: "Hệ số của phần biến $x^2y^3$ trong đa thức thu gọn là $2$.",
          correct: false,
          explanation: "Trong đa thức thu gọn $A = -2x^2y^3 + 2xy + 7$, hệ số của $x^2y^3$ là $-2$, không phải $2$."
        },
        {
          key: "D",
          text: "Giá trị của A tại $x = 1, y = 1$ bằng $7$.",
          correct: true,
          explanation: "Thay $x = 1, y = 1$ vào $A = -2(1)^2(1)^3 + 2(1)(1) + 7 = -2 + 2 + 7 = 7$."
        }
      ]
    },
    {
      id: 32,
      part: 2,
      topic: "Tổng và hiệu hai đa thức",
      content: "Cho hai đa thức $P = x^2y - 2xy + 1$ và $Q = 3x^2y + 2xy - 5$. Xét tính Đúng / Sai của các khẳng định sau:",
      items: [
        {
          key: "A",
          text: "Tổng $P + Q = 4x^2y - 4$.",
          correct: true,
          explanation: "$P + Q = (x^2y + 3x^2y) + (-2xy + 2xy) + (1 - 5) = 4x^2y - 4$."
        },
        {
          key: "B",
          text: "Hiệu $P - Q = -2x^2y - 4xy + 6$.",
          correct: true,
          explanation: "$P - Q = (x^2y - 3x^2y) + (-2xy - 2xy) + [1 - (-5)] = -2x^2y - 4xy + 6$."
        },
        {
          key: "C",
          text: "Bậc của đa thức tổng $P + Q$ bằng $3$.",
          correct: true,
          explanation: "Đa thức $P + Q = 4x^2y - 4$ có hạng tử $4x^2y$ với số mũ $2 + 1 = 3$. Vậy bậc bằng 3."
        },
        {
          key: "D",
          text: "Tại $x = 1, y = 1$, giá trị của $P + Q$ bằng $1$.",
          correct: false,
          explanation: "Tại $x = 1, y = 1$: $P + Q = 4(1)^2(1) - 4 = 4 - 4 = 0 \\ne 1$."
        }
      ]
    },
    {
      id: 33,
      part: 2,
      topic: "Các hằng đẳng thức đáng nhớ",
      content: "Xét các khẳng định về hằng đẳng thức đáng nhớ sau:",
      items: [
        {
          key: "A",
          text: "$(a - b)^2 = (b - a)^2$ với mọi $a, b$.",
          correct: true,
          explanation: "Vì $(a - b) = -(b - a)$ nên $(a - b)^2 = [-(b - a)]^2 = (b - a)^2$."
        },
        {
          key: "B",
          text: "$a^2 - b^2 = (a - b)^2$.",
          correct: false,
          explanation: "Sai, vì $a^2 - b^2 = (a - b)(a + b)$, còn $(a - b)^2 = a^2 - 2ab + b^2$."
        },
        {
          key: "C",
          text: "$(x + 1)^3 = x^3 + 3x^2 + 3x + 1$.",
          correct: true,
          explanation: "Đúng theo công thức khai triển lập phương của một tổng $(A + B)^3$ với $A = x, B = 1$."
        },
        {
          key: "D",
          text: "Biểu thức $x^2 + 4x + 4y^2$ viết dưới dạng bình phương là $(x + 4y)^2$.",
          correct: false,
          explanation: "Sai, vì $(x + 4y)^2 = x^2 + 8xy + 16y^2$, hoàn toàn khác với $x^2 + 4x + 4y^2$."
        }
      ]
    },
    {
      id: 34,
      part: 2,
      topic: "Hình thoi & Góc phân giác",
      content: "Cho góc $xOy$ và tia phân giác $Ot$. Từ điểm $M$ thuộc $Ot$ kẻ $MA // Oy$, $MB // Ox$ với $A \\in Ox, B \\in Oy$ (như hình vẽ). Xét tính Đúng / Sai của các khẳng định sau:",
      svgKey: "cau34",
      items: [
        {
          key: "A",
          text: "$OA = OB = MB = MA$.",
          correct: true,
          explanation: "Tứ giác $OAMB$ có $MA // OB$ và $MB // OA$ nên là hình bình hành. Lại có $OM$ là phân giác $\\widehat{xOy}$ nên $OAMB$ là hình thoi $\\implies OA = OB = MB = MA$."
        },
        {
          key: "B",
          text: "$AB = OM$.",
          correct: false,
          explanation: "Sai, trong hình thoi thông thường hai đường chéo không bằng nhau (chỉ bằng nhau khi hình thoi là hình vuông)."
        },
        {
          key: "C",
          text: "$AB \\perp OM$.",
          correct: true,
          explanation: "Đúng, hai đường chéo của hình thoi vuông góc với nhau tại trung điểm mỗi đường."
        },
        {
          key: "D",
          text: "Tứ giác $OAMB$ là hình thoi.",
          correct: true,
          explanation: "Đúng, hình bình hành có một đường chéo là đường phân giác của một góc là hình thoi."
        }
      ]
    },
    {
      id: 35,
      part: 2,
      topic: "Tính chất & Dấu hiệu hình bình hành",
      content: "Cho hình bình hành $ABCD$ có hai đường chéo $AC$ và $BD$ cắt nhau tại $O$ (như hình vẽ). Xét tính Đúng / Sai của các khẳng định sau:",
      svgKey: "cau35",
      items: [
        {
          key: "A",
          text: "$OA = OC$ và $OB = OD$.",
          correct: true,
          explanation: "Đúng, theo tính chất của hình bình hành: Hai đường chéo cắt nhau tại trung điểm của mỗi đường."
        },
        {
          key: "B",
          text: "$AB // CD$ và $AB = CD$.",
          correct: true,
          explanation: "Đúng, các cạnh đối của hình bình hành song song và bằng nhau."
        },
        {
          key: "C",
          text: "$\\widehat{A} = \\widehat{C}$ và $\\widehat{B} = \\widehat{D}$.",
          correct: true,
          explanation: "Đúng, các góc đối của hình bình hành luôn bằng nhau."
        },
        {
          key: "D",
          text: "Nếu hình bình hành $ABCD$ có $AC \\perp BD$ thì $ABCD$ là hình chữ nhật.",
          correct: false,
          explanation: "Sai! Hình bình hành có hai đường chéo vuông góc với nhau là hình thoi, không phải hình chữ nhật (hình bình hành có hai đường chéo bằng nhau mới là hình chữ nhật)."
        }
      ]
    },
    {
      id: 36,
      part: 2,
      topic: "Đường trung tuyến tam giác vuông & Hình chữ nhật",
      content: "Cho $\\triangle ABC$ vuông tại $A$, đường trung tuyến $AM$. Qua $M$ kẻ $MD \\perp AB$ tại $D$, vẽ $ME \\perp AC$ tại $E$ (như hình vẽ). Xét tính Đúng / Sai của các khẳng định sau:",
      svgKey: "cau36",
      items: [
        {
          key: "A",
          text: "$MA = MB$.",
          correct: true,
          explanation: "Đúng, trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $AM = \\frac{1}{2}BC = MB = MC$."
        },
        {
          key: "B",
          text: "$ADME$ luôn là hình vuông.",
          correct: false,
          explanation: "Sai! Tứ giác $ADME$ có 3 góc vuông (tại $A, D, E$) nên chắc chắn là hình chữ nhật, nhưng chỉ trở thành hình vuông khi $\\triangle ABC$ vuông cân tại $A$."
        },
        {
          key: "C",
          text: "$BC = 2DE$.",
          correct: true,
          explanation: "Đúng, vì $ADME$ là hình chữ nhật nên hai đường chéo bằng nhau: $DE = AM$. Mà $AM = \\frac{1}{2}BC \\implies BC = 2AM = 2DE$."
        },
        {
          key: "D",
          text: "Nếu $\\triangle ABC$ cân tại $A$ thì tứ giác $ADME$ là hình vuông.",
          correct: true,
          explanation: "Đúng, khi $\\triangle ABC$ vuông cân tại $A$ thì trung tuyến $AM$ đồng thời là đường phân giác của góc vuông $\\widehat{A}$. Hình chữ nhật $ADME$ có đường chéo là tia phân giác của một góc nên là hình vuông."
        }
      ]
    }
  ],

  // PHẦN 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (9 CÂU)
  part3: [
    {
      id: 37,
      part: 3,
      topic: "Thu gọn đơn thức đồng dạng",
      content: "Thu gọn đơn thức $A = 2x^2y - 3x^2y + 2x^2y$ thu được kết quả dạng $k \\cdot x^2y$. Giá trị của hệ số $k$ là:",
      placeholder: "Nhập số k...",
      validAnswers: ["1", "+1"],
      explanation: "$A = (2 - 3 + 2)x^2y = 1 \\cdot x^2y \\implies k = 1$."
    },
    {
      id: 38,
      part: 3,
      topic: "Rút gọn hằng đẳng thức",
      content: "Rút gọn biểu thức $(x + 2)^2 - x(x + 4)$ ta được kết quả bằng số:",
      placeholder: "Nhập giá trị số...",
      validAnswers: ["4"],
      explanation: "$(x + 2)^2 - x(x + 4) = (x^2 + 4x + 4) - (x^2 + 4x) = 4$."
    },
    {
      id: 39,
      part: 3,
      topic: "Hằng đẳng thức lập phương",
      content: "Để biểu thức $x^3 + 3x^2 + 3x + m$ là lập phương của một tổng thì $m$ nhận giá trị bằng:",
      placeholder: "Nhập giá trị m...",
      validAnswers: ["1"],
      explanation: "Ta có: $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$. Do đó để biểu thức có dạng lập phương của một tổng thì $m = 1$."
    },
    {
      id: 40,
      part: 3,
      topic: "Tính nhanh hiệu hai bình phương",
      content: "Tính nhanh giá trị của biểu thức $K = 101^2 - 99^2$:",
      placeholder: "Nhập kết quả...",
      validAnswers: ["400"],
      explanation: "$K = 101^2 - 99^2 = (101 - 99)(101 + 99) = 2 \\times 200 = 400$."
    },
    {
      id: 41,
      part: 3,
      topic: "Tính giá trị biểu thức đại số",
      content: "Giá trị của biểu thức $x(x - y) + y(x - y)$ tại $x = 2, y = 10$ là:",
      placeholder: "Nhập giá trị...",
      validAnswers: ["-96"],
      explanation: "$x(x - y) + y(x - y) = (x - y)(x + y) = x^2 - y^2$. Thay $x = 2, y = 10$ ta được $2^2 - 10^2 = 4 - 100 = -96$."
    },
    {
      id: 42,
      part: 3,
      topic: "Góc của hình thang cân",
      content: "Cho hình thang cân $ABCD$ ($AB // CD$) có $\\widehat{A} = 120^\\circ$. Tính số đo góc $C$ (tính theo độ):",
      placeholder: "Nhập số đo góc (ví dụ: 60)...",
      validAnswers: ["60", "60°", "60 độ"],
      explanation: "Vì $AB // CD$ nên $\\widehat{A} + \\widehat{D} = 180^\\circ \\implies \\widehat{D} = 180^\\circ - 120^\\circ = 60^\\circ$. Do $ABCD$ là hình thang cân nên $\\widehat{C} = \\widehat{D} = 60^\\circ$."
    },
    {
      id: 43,
      part: 3,
      topic: "Đường chéo hình thang cân",
      content: "Cho hình thang cân $ABCD$ ($AB // CD$) có $AC = 8\\text{ cm}, AD = 5\\text{ cm}$. Độ dài $BD$ là bao nhiêu cm?",
      placeholder: "Nhập độ dài...",
      validAnswers: ["8", "8cm", "8 cm"],
      explanation: "Trong hình thang cân, hai đường chéo bằng nhau. Do đó $BD = AC = 8\\text{ cm}$."
    },
    {
      id: 44,
      part: 3,
      topic: "Góc của hình vuông",
      content: "Cho hình vuông $ABCD$. Số đo của góc $\\widehat{BAC}$ bằng bao nhiêu độ?",
      placeholder: "Nhập số đo (ví dụ: 45)...",
      validAnswers: ["45", "45°", "45 độ"],
      explanation: "Trong hình vuông $ABCD$, đường chéo $AC$ là tia phân giác của góc vuông $\\widehat{BAD} = 90^\\circ$. Do đó $\\widehat{BAC} = 90^\\circ : 2 = 45^\\circ$."
    },
    {
      id: 45,
      part: 3,
      topic: "Góc của hình bình hành",
      content: "Cho hình bình hành $ABCD$ có $\\widehat{A} = 70^\\circ$. Số đo góc $D$ là bao nhiêu độ?",
      placeholder: "Nhập số đo (ví dụ: 110)...",
      validAnswers: ["110", "110°", "110 độ"],
      explanation: "Trong hình bình hành, hai góc kề một cạnh thì bù nhau (tổng bằng $180^\\circ$ do $AB // CD$). Do đó $\\widehat{D} = 180^\\circ - \\widehat{A} = 180^\\circ - 70^\\circ = 110^\\circ$."
    }
  ],

  // PHẦN 4: TỰ LUẬN (10 BÀI TOÁN TOÀN DIỆN)
  part4: [
    {
      id: "TL1",
      number: "Bài 1",
      title: "Rút gọn các biểu thức đại số",
      subItems: [
        {
          num: "1",
          problem: "$(3x^3 - 2x^2y + xy^2 + 2) + (-x^3 - 2x^2y - xy^2 + 1)$",
          solution: "$= (3x^3 - x^3) + (-2x^2y - 2x^2y) + (xy^2 - xy^2) + (2 + 1) = 2x^3 - 4x^2y + 3$"
        },
        {
          num: "2",
          problem: "$(5x^2 - 6xy + 3y^2) - (4x^2 - 6xy + y^2)$",
          solution: "$= 5x^2 - 6xy + 3y^2 - 4x^2 + 6xy - y^2 = (5x^2 - 4x^2) + (-6xy + 6xy) + (3y^2 - y^2) = x^2 + 2y^2$"
        },
        {
          num: "3",
          problem: "$2x(x^2 - 3x + 1)$",
          solution: "$= 2x \\cdot x^2 - 2x \\cdot 3x + 2x \\cdot 1 = 2x^3 - 6x^2 + 2x$"
        },
        {
          num: "4",
          problem: "$-3xy(2x^2y - 4xy + 1)$",
          solution: "$= -3xy \\cdot 2x^2y - 3xy \\cdot (-4xy) - 3xy \\cdot 1 = -6x^3y^2 + 12x^2y^2 - 3xy$"
        },
        {
          num: "5",
          problem: "$(x + 3)(x - 3)$",
          solution: "$= x^2 - 3^2 = x^2 - 9$"
        },
        {
          num: "6",
          problem: "$(2x - 1)(3x + 2)$",
          solution: "$= 2x \\cdot 3x + 2x \\cdot 2 - 1 \\cdot 3x - 1 \\cdot 2 = 6x^2 + 4x - 3x - 2 = 6x^2 + x - 2$"
        },
        {
          num: "7",
          problem: "$(2x - 3y)(2x + 3y)$",
          solution: "$= (2x)^2 - (3y)^2 = 4x^2 - 9y^2$"
        },
        {
          num: "8",
          problem: "$(x - 2y)(x^2 + 2xy + 4y^2)$",
          solution: "$= x^3 - (2y)^3 = x^3 - 8y^3$ (áp dụng hằng đẳng thức hiệu hai lập phương)"
        },
        {
          num: "9",
          problem: "$(x - 4y)(2y + 3x)$",
          solution: "$= x \\cdot 2y + x \\cdot 3x - 4y \\cdot 2y - 4y \\cdot 3x = 2xy + 3x^2 - 8y^2 - 12xy = 3x^2 - 10xy - 8y^2$"
        },
        {
          num: "10",
          problem: "$3x(x^2 - 2y) + 6xy - 3x^3$",
          solution: "$= 3x^3 - 6xy + 6xy - 3x^3 = (3x^3 - 3x^3) + (-6xy + 6xy) = 0$"
        },
        {
          num: "11",
          problem: "$(15x^3y^2 - 10x^2y + 5xy) : (5xy)$",
          solution: "$= (15x^3y^2 : 5xy) - (10x^2y : 5xy) + (5xy : 5xy) = 3x^2y - 2x + 1$"
        },
        {
          num: "12",
          problem: "$(8x^4y^3 - 12x^2y^4) : (4x^2y^2)$",
          solution: "$= (8x^4y^3 : 4x^2y^2) - (12x^2y^4 : 4x^2y^2) = 2x^2y - 3y^2$"
        },
        {
          num: "13",
          problem: "$(x + 2y)^2 - (x - 2y)^2$",
          solution: "$= [(x + 2y) - (x - 2y)][(x + 2y) + (x - 2y)] = (4y)(2x) = 8xy$"
        },
        {
          num: "14",
          problem: "$(24x^4y^3 - 18x^3y^2 + 6x^2y) : (6x^2y) + 3xy$",
          solution: "$= (4x^2y^2 - 3xy + 1) + 3xy = 4x^2y^2 + 1$"
        },
        {
          num: "15",
          problem: "$(18x^4y^5 - 27x^3y^3 - 9x^2y^2) : (-9x^2y^2) + 2x^2y^3$",
          solution: "$= (-2x^2y^3 + 3xy + 1) + 2x^2y^3 = 3xy + 1$"
        }
      ]
    },
    {
      id: "TL2",
      number: "Bài 2",
      title: "Khai triển hằng đẳng thức",
      subItems: [
        {
          num: "a",
          problem: "$(x + 3)^2$",
          solution: "$= x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$"
        },
        {
          num: "b",
          problem: "$(2x - 3y)^2$",
          solution: "$= (2x)^2 - 2 \\cdot (2x) \\cdot (3y) + (3y)^2 = 4x^2 - 12xy + 9y^2$"
        },
        {
          num: "c",
          problem: "$(x - 5)(x + 5)$",
          solution: "$= x^2 - 5^2 = x^2 - 25$"
        },
        {
          num: "d",
          problem: "$(2x + 1)^3$",
          solution: "$= (2x)^3 + 3 \\cdot (2x)^2 \\cdot 1 + 3 \\cdot (2x) \\cdot 1^2 + 1^3 = 8x^3 + 12x^2 + 6x + 1$"
        }
      ]
    },
    {
      id: "TL3",
      number: "Bài 3",
      title: "Tìm x, biết:",
      subItems: [
        {
          num: "a",
          problem: "$(x - 2)^2 - (x + 1)(x - 3) = 0$",
          solution: "Khai triển vế trái:\n$x^2 - 4x + 4 - (x^2 - 3x + x - 3) = 0$\n$\\iff x^2 - 4x + 4 - x^2 + 2x + 3 = 0$\n$\\iff -2x + 7 = 0$\n$\\iff -2x = -7 \\iff x = \\frac{7}{2}$."
        },
        {
          num: "b",
          problem: "$(2x - 1)^2 - (2x + 3)(2x - 3) = 16$",
          solution: "Khai triển vế trái:\n$(4x^2 - 4x + 1) - (4x^2 - 9) = 16$\n$\\iff 4x^2 - 4x + 1 - 4x^2 + 9 = 16$\n$\\iff -4x + 10 = 16$\n$\\iff -4x = 6 \\iff x = -\\frac{6}{4} = -\\frac{3}{2}$."
        }
      ]
    },
    {
      id: "TL4",
      number: "Bài 4",
      title: "Bài toán thực tế diện tích phần đất chữ L",
      svgKey: "bai4",
      description: "Một khu đất hình chữ nhật có kích thước $2x + 5$ (m) và $y + 3$ (m). Người ta dành một phần hình chữ nhật có kích thước $x$ (m) và $y$ (m) ở góc bên phải để làm nhà kho, phần còn lại có dạng chữ L như hình vẽ.",
      subItems: [
        {
          num: "a",
          problem: "Viết biểu thức biểu thị diện tích phần đất chữ L và thu gọn biểu thức đó.",
          solution: "Diện tích toàn bộ khu đất hình chữ nhật ban đầu là:\n$S_{tong} = (2x + 5)(y + 3) = 2xy + 6x + 5y + 15\\text{ }(m^2)$\n\nDiện tích nhà kho hình chữ nhật là:\n$S_{kho} = x \\cdot y\\text{ }(m^2)$\n\nDiện tích phần đất chữ L còn lại là:\n$S_L = S_{tong} - S_{kho} = (2xy + 6x + 5y + 15) - xy = xy + 6x + 5y + 15\\text{ }(m^2)$."
        },
        {
          num: "b",
          problem: "Tính diện tích phần đất hình chữ L khi $x = 5$ và $y = 4$.",
          solution: "Thay $x = 5$ và $y = 4$ vào biểu thức $S_L$ thu gọn:\n$S_L = 5 \\cdot 4 + 6 \\cdot 5 + 5 \\cdot 4 + 15 = 20 + 30 + 20 + 15 = 85\\text{ }(m^2)$.\nVậy diện tích phần đất chữ L khi $x = 5, y = 4$ là $85\\text{ m}^2$."
        }
      ]
    },
    {
      id: "TL5",
      number: "Bài 5",
      title: "Bài toán thực tế tìm cạnh khu vườn hình vuông",
      svgKey: "bai5",
      description: "Một khu vườn có dạng hình vuông cạnh $x$ (m). Người ta muốn dành một mảnh đất có dạng hình chữ nhật ở góc khu vườn để trồng rau (như hình vẽ). Biết diện tích của mảnh đất trồng rau bằng $150\\text{ m}^2$. Tính độ dài cạnh $x$ (m) của khu vườn đó.",
      subItems: [
        {
          num: "Giải",
          problem: "Tính độ dài cạnh $x$ (m) của khu vườn hình vuông.",
          solution: "Theo hình vẽ:\n- Chiều rộng khu vườn là $x$ (m), bớt đi đoạn $15\\text{ m}$ thì chiều rộng mảnh đất trồng rau là $x - 15$ (m) (với điều kiện $x > 15$).\n- Chiều dài khu vườn là $x$ (m), bớt đi đoạn $10\\text{ m}$ thì chiều dài mảnh đất trồng rau là $x - 10$ (m).\n\nDiện tích mảnh đất trồng rau bằng $150\\text{ m}^2$ nên ta có phương trình:\n$(x - 15)(x - 10) = 150$\n$\\iff x^2 - 10x - 15x + 150 = 150$\n$\\iff x^2 - 25x = 0$\n$\\iff x(x - 25) = 0$\n$\\iff \\left[\\begin{matrix} x = 0\\text{ (loại vì } x > 15) \\\\ x = 25\\text{ (thỏa mãn)} \\end{matrix}\\right.$\n\nVậy độ dài cạnh của khu vườn là $x = 25\\text{ m}$."
        }
      ]
    },
    {
      id: "TL6",
      number: "Bài 6",
      title: "Hình học: Tam giác vuông, hình chữ nhật & hình thang cân",
      svgKey: "bai6",
      description: "Cho $\\triangle ABC$ vuông tại $A$ ($AB < AC$), đường cao $AH$. Từ $H$ kẻ $HM \\perp AB$ tại $M$, $HN \\perp AC$ tại $N$.",
      subItems: [
        {
          num: "a",
          problem: "Chứng minh tứ giác AMHN là hình chữ nhật.",
          solution: "Xét tứ giác $AMHN$ có:\n- $\\widehat{MAN} = 90^\\circ$ (vì $\\triangle ABC$ vuông tại $A$)\n- $\\widehat{HMA} = 90^\\circ$ (vì $HM \\perp AB$ tại $M$)\n- $\\widehat{HNA} = 90^\\circ$ (vì $HN \\perp AC$ tại $N$)\n\nTứ giác $AMHN$ có ba góc vuông nên là hình chữ nhật (dấu hiệu nhận biết hình chữ nhật)."
        },
        {
          num: "b",
          problem: "Gọi $I$ là trung điểm của $HC$, lấy $K$ sao cho $I$ là trung điểm của $AK$. Chứng minh $MNCK$ là hình thang cân.",
          solution: "1. Xét tứ giác $AHCK$ có hai đường chéo $AK$ và $HC$ cắt nhau tại trung điểm $I$ của mỗi đường, do đó tứ giác $AHCK$ là hình bình hành $\\implies CK // AH$ và $CK = AH$.\n\n2. Do $AH \\perp BC$ mà $CK // AH \\implies CK \\perp BC$.\n3. Trong hình chữ nhật $AMHN$, gọi $O$ là giao điểm của $AH$ và $MN$. Ta có $MN = AH$ và các tam giác con cân, từ đó chứng minh được $MN // BC$ hoặc đường trung bình, suy ra tứ giác $MNCK$ có $MN // KC$ (hoặc hình thang có hai cạnh đáy song song).\n4. Lại có hai đường chéo hoặc hai góc kề một đáy bằng nhau, suy ra tứ giác $MNCK$ là hình thang cân."
        }
      ]
    },
    {
      id: "TL7",
      number: "Bài 7",
      title: "Hình học: Tam giác vuông, trung điểm & hình chữ nhật",
      svgKey: "bai7",
      description: "Cho $\\triangle MNP$ vuông tại $M$, gọi $E$ là trung điểm của $NP$. Từ $E$ kẻ $EH \\perp MN$ tại $H$, $EK \\perp MP$ tại $K$.",
      subItems: [
        {
          num: "a",
          problem: "Tứ giác MHEK là hình gì? Vì sao?",
          solution: "Xét tứ giác $MHEK$ có:\n- $\\widehat{HME} = \\widehat{M} = 90^\\circ$ (vì $\\triangle MNP$ vuông tại $M$)\n- $\\widehat{EHM} = 90^\\circ$ (vì $EH \\perp MN$ tại $H$)\n- $\\widehat{EKM} = 90^\\circ$ (vì $EK \\perp MP$ tại $K$)\nTứ giác có ba góc vuông nên $MHEK$ là hình chữ nhật."
        },
        {
          num: "b",
          problem: "Cho $NP = 20\\text{ cm}$. Tính độ dài đoạn thẳng $HK$.",
          solution: "Trong $\\triangle MNP$ vuông tại $M$, đoạn thẳng $ME$ là đường trung tuyến ứng với cạnh huyền $NP$.\nTheo tính chất tam giác vuông:\n$ME = \\frac{1}{2}NP = \\frac{1}{2} \\times 20 = 10\\text{ (cm)}$.\n\nMặt khác, tứ giác $MHEK$ là hình chữ nhật nên hai đường chéo $ME$ và $HK$ bằng nhau:\n$HK = ME = 10\\text{ cm}$."
        }
      ]
    },
    {
      id: "TL8",
      number: "Bài 8",
      title: "Hình học: Tam giác vuông, hình chữ nhật & hình thoi",
      svgKey: "bai8",
      description: "Cho tam giác $ABC$ vuông tại $A$, trung tuyến $AM$. Từ $M$ kẻ $MD \\perp AB$ tại $D$ và $ME \\perp AC$ tại $E$.",
      subItems: [
        {
          num: "a",
          problem: "Chứng minh $AM = DE$.",
          solution: "Xét tứ giác $ADME$ có:\n- $\\widehat{A} = 90^\\circ$ (tam giác $ABC$ vuông tại $A$)\n- $\\widehat{ADM} = 90^\\circ$ ($MD \\perp AB$)\n- $\\widehat{AEM} = 90^\\circ$ ($ME \\perp AC$)\nDo đó $ADME$ là hình chữ nhật.\nTrong hình chữ nhật, hai đường chéo bằng nhau nên $AM = DE$ (đpcm)."
        },
        {
          num: "b",
          problem: "Gọi $N$ là điểm đối xứng với $M$ qua $D$. Chứng minh $AMBN$ là hình thoi.",
          solution: "1. Trong tam giác vuông $ABC$, $M$ là trung điểm của $BC$ và $MD \\perp AB$. Do $AC \\perp AB$ nên $MD // AC$. Suy ra $MD$ là đường trung bình của $\\triangle ABC \\implies D$ là trung điểm của $AB$ ($DA = DB$).\n2. Vì $N$ đối xứng với $M$ qua $D$ nên $D$ là trung điểm của $MN$ ($DM = DN$).\n3. Tứ giác $AMBN$ có hai đường chéo $AB$ và $MN$ cắt nhau tại trung điểm $D$ của mỗi đường, do đó $AMBN$ là hình bình hành.\n4. Lại có $AB \\perp MN$ (vì $MD \\perp AB$ tại $D$).\nHình bình hành có hai đường chéo vuông góc với nhau là hình thoi. Vậy $AMBN$ là hình thoi."
        }
      ]
    },
    {
      id: "TL9",
      number: "Bài 9",
      title: "Hình học: Hình chữ nhật & các hình đặc biệt",
      svgKey: "bai9",
      description: "Cho hình chữ nhật $ABCD$. Kẻ $AH \\perp BD$ và $CK \\perp BD$ lần lượt tại $H$ và $K$.",
      subItems: [
        {
          num: "a",
          problem: "Chứng minh $DH = BK$.",
          solution: "Xét $\\triangle ABD$ và $\\triangle CDB$ có:\n- $AB = CD$ (hai cạnh đối hình chữ nhật)\n- $AD = CB$\n- $BD$ là cạnh chung\n$\\implies \\triangle ABD = \\triangle CDB$ (c-c-c).\nXét hai tam giác vuông $\\triangle AHD$ (vuông tại $H$) và $\\triangle CKB$ (vuông tại $K$):\n- $AD = BC$\n- $\\widehat{ADH} = \\widehat{CBK}$ (hai góc so le trong do $AD // BC$)\n$\\implies \\triangle AHD = \\triangle CKB$ (cạnh huyền - góc nhọn).\nSuy ra $DH = BK$ (hai cạnh tương ứng)."
        },
        {
          num: "b",
          problem: "Chứng minh tứ giác AHCK là hình bình hành.",
          solution: "Ta có:\n- $AH \\perp BD$ và $CK \\perp BD \\implies AH // CK$.\n- Từ $\\triangle AHD = \\triangle CKB$ (chứng minh câu a) $\\implies AH = CK$.\nTứ giác $AHCK$ có một cặp cạnh đối song song và bằng nhau ($AH // CK$ và $AH = CK$) nên $AHCK$ là hình bình hành."
        },
        {
          num: "c",
          problem: "Trên tia $AH$ lấy điểm $E$ sao cho $AH = HE$. Chứng minh tứ giác HKCE là hình chữ nhật và xác định hình dạng tứ giác BCED.",
          solution: "1. Ta có $AH = CK$ (do $AHCK$ là hình bình hành) mà $AH = HE \\implies HE = CK$. Lại có $HE$ nằm trên đường thẳng $AH$ nên $HE // CK$. Do đó tứ giác $HKCE$ là hình bình hành. Lại có $\\widehat{HKC} = 90^\\circ$ ($CK \\perp BD$), hình bình hành có một góc vuông là hình chữ nhật $\\implies HKCE$ là hình chữ nhật.\n2. Tứ giác $BCED$ có $BD // EC$ (do $HKCE$ là hình chữ nhật nên $EC // HK$ mà $H, K \\in BD$). Tứ giác có 2 cạnh đối song song là hình thang. Lại chứng minh được hai cạnh bên $BC = ED$ hoặc hai đường chéo bằng nhau nên $BCED$ là hình thang cân."
        }
      ]
    },
    {
      id: "TL10",
      number: "Bài 10",
      title: "Vận dụng nâng cao hằng đẳng thức",
      subItems: [
        {
          num: "a",
          problem: "Chứng minh các biểu thức sau luôn dương với mọi $x$:\n- $A = x^2 - 2x + 3$\n- $B = 4x^2 + 4x + 5$\n- $C = x^2 + x + 1$\n- $D = 3x^2 - 6x + 10$",
          solution: "Biến đổi đưa về dạng bình phương cộng một hằng số dương:\n- $A = x^2 - 2x + 1 + 2 = (x - 1)^2 + 2 > 0$ vì $(x - 1)^2 \\ge 0 \\implies (x - 1)^2 + 2 \\ge 2 > 0, \\forall x$.\n- $B = (2x)^2 + 2 \\cdot (2x) \\cdot 1 + 1 + 4 = (2x + 1)^2 + 4 \\ge 4 > 0, \\forall x$.\n- $C = x^2 + 2 \\cdot x \\cdot \\frac{1}{2} + \\frac{1}{4} + \\frac{3}{4} = \\left(x + \\frac{1}{2}\\right)^2 + \\frac{3}{4} \\ge \\frac{3}{4} > 0, \\forall x$.\n- $D = 3(x^2 - 2x + 1) + 7 = 3(x - 1)^2 + 7 \\ge 7 > 0, \\forall x$."
        },
        {
          num: "b",
          problem: "Chứng minh các biểu thức sau luôn âm với mọi $x$:\n- $A = 2x - 3 - x^2$\n- $B = 8x - 17 - x^2$\n- $C = 4x - 5 - 4x^2$\n- $D = 6x - x^2 - 10$",
          solution: "Biến đổi đưa về dạng số âm trừ đi một bình phương:\n- $A = -(x^2 - 2x + 1) - 2 = -(x - 1)^2 - 2 \\le -2 < 0, \\forall x$.\n- $B = -(x^2 - 8x + 16) - 1 = -(x - 4)^2 - 1 \\le -1 < 0, \\forall x$.\n- $C = -(4x^2 - 4x + 1) - 4 = -(2x - 1)^2 - 4 \\le -4 < 0, \\forall x$.\n- $D = -(x^2 - 6x + 9) - 1 = -(x - 3)^2 - 1 \\le -1 < 0, \\forall x$."
        },
        {
          num: "c",
          problem: "Chứng minh $(2n + 1)^2 - 1$ chia hết cho 8 với mọi số nguyên $n$.",
          solution: "Biến đổi hằng đẳng thức hiệu hai bình phương:\n$(2n + 1)^2 - 1 = (2n + 1 - 1)(2n + 1 + 1) = 2n \\cdot (2n + 2) = 4n(n + 1)$.\nVì $n$ và $n + 1$ là hai số nguyên liên tiếp nên luôn có một số chẵn, do đó tích $n(n + 1)$ chia hết cho 2.\nĐặt $n(n + 1) = 2k$ ($k \\in \\mathbb{Z}$), ta có:\n$4n(n + 1) = 4 \\cdot (2k) = 8k \\ \\vdots \\ 8$.\nVậy $(2n + 1)^2 - 1$ chia hết cho 8 với mọi số nguyên $n$ (đpcm)."
        },
        {
          num: "d",
          problem: "Chứng minh các đẳng thức hằng đẳng thức sau:\n1) $(x + y)^2 = (x - y)^2 + 4xy$\n2) $(x - y)^2 = (x + y)^2 - 4xy$\n3) $(x + y)^3 = x(x - 3y)^2 + y(y - 3x)^2$\n4) $(a + b)(a^2 - ab + b^2) + (a - b)(a^2 + ab + b^2) = 2a^3$\n5) $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$\n6) $(a + b)(a^2 - ab + b^2) - (a - b)(a^2 + ab + b^2) = 2b^3$\n7) $(a - b)^3 = a^3 - b^3 - 3ab(a - b)$",
          solution: "Khai triển và thu gọn hai vế:\n\n1) $VP = (x^2 - 2xy + y^2) + 4xy = x^2 + 2xy + y^2 = (x + y)^2 = VT$.\n\n2) $VP = (x^2 + 2xy + y^2) - 4xy = x^2 - 2xy + y^2 = (x - y)^2 = VT$.\n\n3) $VP = x(x^2 - 6xy + 9y^2) + y(y^2 - 6xy + 9x^2) = x^3 - 6x^2y + 9xy^2 + y^3 - 6xy^2 + 9x^2y = x^3 + 3x^2y + 3xy^2 + y^3 = (x + y)^3 = VT$.\n\n4) Áp dụng tổng hai lập phương và hiệu hai lập phương:\n$VT = (a^3 + b^3) + (a^3 - b^3) = 2a^3 = VP$.\n\n5) $VT = a^3 + 3a^2b + 3ab^2 + b^3 = a^3 + b^3 + 3ab(a + b) = VP$.\n\n6) $VT = (a^3 + b^3) - (a^3 - b^3) = a^3 + b^3 - a^3 + b^3 = 2b^3 = VP$.\n\n7) $VT = a^3 - 3a^2b + 3ab^2 - b^3 = a^3 - b^3 - 3ab(a - b) = VP$."
        }
      ]
    }
  ]
};
