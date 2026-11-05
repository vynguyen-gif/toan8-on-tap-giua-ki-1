// DỮ LIỆU 3 ĐỀ ÔN TẬP CHUẨN MA TRẬN GIỮA HỌC KÌ 1 – TOÁN 8 (NĂM HỌC 2026 – 2027)
// Cấu trúc mỗi đề thi:
// - Phần 1: 12 câu trắc nghiệm nhiều phương án (3.0 điểm)
// - Phần 2: 2 câu trắc nghiệm đúng / sai (2.0 điểm)
// - Phần 3: 4 câu trắc nghiệm trả lời ngắn (2.0 điểm)
// - Phần 4: 3 câu tự luận (3.0 điểm)
// Tổng điểm: 10.0 điểm • Thời gian: 60 - 90 phút

const PRACTICE_EXAMS = [
  {
    id: "de1",
    code: "ĐỀ SỐ 01",
    title: "ĐỀ ÔN TẬP KIỂM TRA GIỮA HỌC KÌ 1 – TOÁN 8 (ĐỀ SỐ 01)",
    timeMinutes: 90,
    part1Ids: [1, 2, 3, 5, 8, 9, 10, 14, 15, 18, 20, 21],
    part2Ids: [31, 34],
    part3Ids: [37, 38, 42, 43],
    part4: [
      {
        num: "Bài 1 (1,0 điểm)",
        title: "Rút gọn các biểu thức đại số:",
        subItems: [
          {
            sub: "a)",
            problem: "$(3x^3 - 2x^2y + xy^2 + 2) + (-x^3 - 2x^2y - xy^2 + 1)$",
            points: "0,5 điểm",
            solution: "$= (3x^3 - x^3) + (-2x^2y - 2x^2y) + (xy^2 - xy^2) + (2 + 1) = 2x^3 - 4x^2y + 3$"
          },
          {
            sub: "b)",
            problem: "$(2x - 3y)(2x + 3y) + (x - 2y)^2$",
            points: "0,5 điểm",
            solution: "$= (4x^2 - 9y^2) + (x^2 - 4xy + 4y^2) = 5x^2 - 4xy - 5y^2$"
          }
        ]
      },
      {
        num: "Bài 2 (1,0 điểm)",
        title: "Bài toán thực tế diện tích:",
        svgKey: "bai4",
        description: "Một khu đất hình chữ nhật có kích thước $2x + 5$ (m) và $y + 3$ (m). Người ta dành một phần hình chữ nhật có kích thước $x$ (m) và $y$ (m) ở góc bên phải để làm nhà kho, phần còn lại có dạng chữ L như hình vẽ.",
        subItems: [
          {
            sub: "a)",
            problem: "Viết biểu thức biểu thị diện tích phần đất chữ L và thu gọn biểu thức đó.",
            points: "0,5 điểm",
            solution: "Diện tích toàn bộ khu đất: $S_{tong} = (2x + 5)(y + 3) = 2xy + 6x + 5y + 15\\text{ }(m^2)$.\nDiện tích nhà kho: $S_{kho} = xy\\text{ }(m^2)$.\nDiện tích phần đất chữ L: $S_L = S_{tong} - S_{kho} = xy + 6x + 5y + 15\\text{ }(m^2)$."
          },
          {
            sub: "b)",
            problem: "Tính diện tích phần đất hình chữ L khi $x = 5$ và $y = 4$.",
            points: "0,5 điểm",
            solution: "Thay $x = 5$ và $y = 4$ vào biểu thức $S_L$:\n$S_L = 5 \\cdot 4 + 6 \\cdot 5 + 5 \\cdot 4 + 15 = 20 + 30 + 20 + 15 = 85\\text{ }(m^2)$."
          }
        ]
      },
      {
        num: "Bài 3 (1,0 điểm)",
        title: "Hình học tổng hợp:",
        svgKey: "bai6",
        description: "Cho tam giác $ABC$ vuông tại $A$ ($AB < AC$), đường cao $AH$. Từ $H$ kẻ $HM \\perp AB$ tại $M$, $HN \\perp AC$ tại $N$.",
        subItems: [
          {
            sub: "a)",
            problem: "Chứng minh tứ giác AMHN là hình chữ nhật.",
            points: "0,5 điểm",
            solution: "Xét tứ giác $AMHN$ có:\n$\\widehat{MAN} = 90^\\circ$ (do $\\triangle ABC$ vuông tại $A$),\n$\\widehat{HMA} = 90^\\circ$ ($HM \\perp AB$),\n$\\widehat{HNA} = 90^\\circ$ ($HN \\perp AC$).\nTứ giác có ba góc vuông nên $AMHN$ là hình chữ nhật."
          },
          {
            sub: "b)",
            problem: "Gọi $I$ là trung điểm của $HC$, lấy $K$ sao cho $I$ là trung điểm của $AK$. Chứng minh tứ giác MNCK là hình thang cân.",
            points: "0,5 điểm",
            solution: "Tứ giác $AHCK$ có hai đường chéo $AK$ và $HC$ cắt nhau tại trung điểm $I$ nên $AHCK$ là hình bình hành $\\implies CK // AH$ và $CK = AH$.\nDo $AH \\perp BC \\implies CK \\perp BC$.\nTrong hình chữ nhật $AMHN$, ta có $MN = AH = CK$ và $MN // BC$, từ đó suy ra $MNCK$ là hình thang có hai đường chéo bằng nhau ($MN = KC$ hoặc hai góc kề đáy bằng $90^\\circ$), do đó $MNCK$ là hình thang cân."
          }
        ]
      }
    ]
  },
  {
    id: "de2",
    code: "ĐỀ SỐ 02",
    title: "ĐỀ ÔN TẬP KIỂM TRA GIỮA HỌC KÌ 1 – TOÁN 8 (ĐỀ SỐ 02)",
    timeMinutes: 90,
    part1Ids: [4, 6, 7, 11, 12, 13, 16, 17, 19, 22, 23, 26],
    part2Ids: [32, 35],
    part3Ids: [39, 40, 44, 45],
    part4: [
      {
        num: "Bài 1 (1,0 điểm)",
        title: "Tìm x, biết:",
        subItems: [
          {
            sub: "a)",
            problem: "$(x - 2)^2 - (x + 1)(x - 3) = 0$",
            points: "0,5 điểm",
            solution: "$(x^2 - 4x + 4) - (x^2 - 2x - 3) = 0 \\iff -2x + 7 = 0 \\iff x = \\frac{7}{2}$."
          },
          {
            sub: "b)",
            problem: "$(2x - 1)^2 - (2x + 3)(2x - 3) = 16$",
            points: "0,5 điểm",
            solution: "$(4x^2 - 4x + 1) - (4x^2 - 9) = 16 \\iff -4x + 10 = 16 \\iff -4x = 6 \\iff x = -\\frac{3}{2}$."
          }
        ]
      },
      {
        num: "Bài 2 (1,0 điểm)",
        title: "Bài toán thực tế khu vườn trồng rau:",
        svgKey: "bai5",
        description: "Một khu vườn có dạng hình vuông cạnh $x$ (m). Người ta muốn dành một mảnh đất hình chữ nhật ở góc khu vườn để trồng rau (như hình vẽ). Biết diện tích của mảnh đất trồng rau bằng $150\\text{ m}^2$. Tính độ dài cạnh $x$ (m) của khu vườn đó.",
        subItems: [
          {
            sub: "Giải",
            problem: "Tính độ dài cạnh $x$ (m) của khu vườn hình vuông.",
            points: "1,0 điểm",
            solution: "Theo hình vẽ, chiều rộng mảnh đất trồng rau là $x - 15$ (m) và chiều dài là $x - 10$ (m) ($x > 15$).\nDiện tích mảnh đất trồng rau bằng $150\\text{ m}^2$:\n$(x - 15)(x - 10) = 150 \\iff x^2 - 25x + 150 = 150 \\iff x(x - 25) = 0$.\nVì $x > 15$ nên $x = 25\\text{ m}$.\nVậy độ dài cạnh của khu vườn là $25\\text{ m}$."
          }
        ]
      },
      {
        num: "Bài 3 (1,0 điểm)",
        title: "Hình học tổng hợp:",
        svgKey: "bai7",
        description: "Cho tam giác $MNP$ vuông tại $M$, gọi $E$ là trung điểm của $NP$. Từ $E$ kẻ $EH \\perp MN$ tại $H$, $EK \\perp MP$ tại $K$.",
        subItems: [
          {
            sub: "a)",
            problem: "Tứ giác MHEK là hình gì? Vì sao?",
            points: "0,5 điểm",
            solution: "Tứ giác $MHEK$ có $\\widehat{M} = 90^\\circ$ (tam giác vuông tại $M$), $\\widehat{EHM} = 90^\\circ$ ($EH \\perp MN$), $\\widehat{EKM} = 90^\\circ$ ($EK \\perp MP$).\nTứ giác có ba góc vuông nên $MHEK$ là hình chữ nhật."
          },
          {
            sub: "b)",
            problem: "Cho $NP = 20\\text{ cm}$. Tính độ dài đoạn thẳng $HK$.",
            points: "0,5 điểm",
            solution: "Trong $\\triangle MNP$ vuông tại $M$, $ME$ là đường trung tuyến ứng với cạnh huyền $NP$ nên $ME = \\frac{1}{2}NP = \\frac{1}{2} \\times 20 = 10\\text{ (cm)}$.\nDo $MHEK$ là hình chữ nhật nên hai đường chéo bằng nhau: $HK = ME = 10\\text{ cm}$."
          }
        ]
      }
    ]
  },
  {
    id: "de3",
    code: "ĐỀ SỐ 03",
    title: "ĐỀ ÔN TẬP KIỂM TRA GIỮA HỌC KÌ 1 – TOÁN 8 (ĐỀ SỐ 03)",
    timeMinutes: 90,
    part1Ids: [1, 3, 5, 9, 10, 14, 15, 17, 24, 25, 27, 28],
    part2Ids: [33, 36],
    part3Ids: [37, 40, 41, 42],
    part4: [
      {
        num: "Bài 1 (1,0 điểm)",
        title: "Khai triển và rút gọn biểu thức:",
        subItems: [
          {
            sub: "a)",
            problem: "Khai triển: $(2x - 3y)^2$ và $(x - 5)(x + 5)$",
            points: "0,5 điểm",
            solution: "- $(2x - 3y)^2 = 4x^2 - 12xy + 9y^2$\n- $(x - 5)(x + 5) = x^2 - 25$"
          },
          {
            sub: "b)",
            problem: "Rút gọn: $3x(x^2 - 2y) + 6xy - 3x^3$",
            points: "0,5 điểm",
            solution: "$= 3x^3 - 6xy + 6xy - 3x^3 = 0$"
          }
        ]
      },
      {
        num: "Bài 2 (1,0 điểm)",
        title: "Vận dụng hằng đẳng thức:",
        subItems: [
          {
            sub: "a)",
            problem: "Chứng minh biểu thức $A = x^2 - 2x + 3$ luôn dương với mọi giá trị của $x$.",
            points: "0,5 điểm",
            solution: "$A = (x^2 - 2x + 1) + 2 = (x - 1)^2 + 2$.\nVì $(x - 1)^2 \\ge 0$ với mọi $x$ nên $(x - 1)^2 + 2 \\ge 2 > 0$ với mọi $x$ (đpcm)."
          },
          {
            sub: "b)",
            problem: "Chứng minh biểu thức $(2n + 1)^2 - 1$ chia hết cho 8 với mọi số nguyên $n$.",
            points: "0,5 điểm",
            solution: "$(2n + 1)^2 - 1 = 4n^2 + 4n = 4n(n + 1)$.\nVì $n(n + 1)$ là tích hai số nguyên liên tiếp nên chia hết cho 2.\nSuy ra $4n(n + 1) \\ \\vdots \\ (4 \\times 2) = 8$ với mọi số nguyên $n$ (đpcm)."
          }
        ]
      },
      {
        num: "Bài 3 (1,0 điểm)",
        title: "Hình học tổng hợp:",
        svgKey: "bai8",
        description: "Cho tam giác $ABC$ vuông tại $A$, trung tuyến $AM$. Từ $M$ kẻ $MD \\perp AB$ tại $D$ và $ME \\perp AC$ tại $E$.",
        subItems: [
          {
            sub: "a)",
            problem: "Chứng minh $AM = DE$.",
            points: "0,5 điểm",
            solution: "Tứ giác $ADME$ có $\\widehat{A} = 90^\\circ, \\widehat{ADM} = 90^\\circ, \\widehat{AEM} = 90^\\circ$ nên là hình chữ nhật.\nTrong hình chữ nhật, hai đường chéo bằng nhau nên $AM = DE$."
          },
          {
            sub: "b)",
            problem: "Gọi $N$ là điểm đối xứng với $M$ qua $D$. Chứng minh tứ giác AMBN là hình thoi.",
            points: "0,5 điểm",
            solution: "Trong tam giác vuông $ABC$, $M$ là trung điểm $BC$ và $MD \\perp AB$, $AC \\perp AB \\implies MD // AC \\implies D$ là trung điểm $AB$.\n$N$ đối xứng với $M$ qua $D \\implies D$ là trung điểm $MN$.\nTứ giác $AMBN$ có hai đường chéo $AB$ và $MN$ cắt nhau tại trung điểm $D$ của mỗi đường nên là hình bình hành.\nLại có $AB \\perp MN$ tại $D$ nên hình bình hành $AMBN$ có hai đường chéo vuông góc là hình thoi."
          }
        ]
      }
    ]
  }
];
