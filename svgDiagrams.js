// Bộ thư viện hình vẽ hình học SVG chất lượng cao cho Đề cương Toán 8
const SVG_DIAGRAMS = {
  // Câu 21: Tứ giác ABCD tổng quát
  cau21: `
    <svg viewBox="0 0 320 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#4B5563"/>
        </marker>
      </defs>
      <!-- Background subtle grid -->
      <rect width="320" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Tứ giác ABCD -->
      <polygon points="50,150 110,40 270,70 230,180" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2.5" stroke-linejoin="round"/>
      
      <!-- Đường chéo nét đứt -->
      <line x1="50" y1="150" x2="270" y2="70" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,4"/>
      <line x1="110" y1="40" x2="230" y2="180" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,4"/>

      <!-- Đỉnh -->
      <circle cx="50" cy="150" r="4" fill="#4338CA"/>
      <circle cx="110" cy="40" r="4" fill="#4338CA"/>
      <circle cx="270" cy="70" r="4" fill="#4338CA"/>
      <circle cx="230" cy="180" r="4" fill="#4338CA"/>

      <!-- Nhãn -->
      <text x="32" y="160" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">A</text>
      <text x="105" y="28" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">B</text>
      <text x="280" y="75" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">C</text>
      <text x="235" y="202" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">D</text>
    </svg>
  `,

  // Câu 23: Tứ giác EFGH có EH = FG (2 vạch)
  cau23: `
    <svg viewBox="0 0 320 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Tứ giác EFGH -->
      <!-- E(40,80), F(150,30), G(280,140), H(170,190) -->
      <polygon points="40,80 150,30 280,140 170,190" fill="#F0FDF4" stroke="#16A34A" stroke-width="2.5" stroke-linejoin="round"/>

      <!-- Vạch đánh dấu = nhau trên EH và FG -->
      <!-- Điểm giữa EH: (105, 135), vecto pháp tuyến -->
      <g stroke="#15803D" stroke-width="2">
        <line x1="100" y1="130" x2="108" y2="142"/>
        <line x1="104" y1="128" x2="112" y2="140"/>
      </g>
      <!-- Điểm giữa FG: (215, 85) -->
      <g stroke="#15803D" stroke-width="2">
        <line x1="210" y1="80" x2="218" y2="92"/>
        <line x1="214" y1="78" x2="222" y2="90"/>
      </g>

      <!-- Điểm đỉnh -->
      <circle cx="40" cy="80" r="4" fill="#15803D"/>
      <circle cx="150" cy="30" r="4" fill="#15803D"/>
      <circle cx="280" cy="140" r="4" fill="#15803D"/>
      <circle cx="170" cy="190" r="4" fill="#15803D"/>

      <!-- Nhãn -->
      <text x="22" y="85" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">E</text>
      <text x="145" y="22" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">F</text>
      <text x="290" y="148" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">G</text>
      <text x="165" y="212" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">H</text>
    </svg>
  `,

  // Câu 24: Tứ giác ABCD có góc B = góc D (kí hiệu vòng cung đôi)
  cau24: `
    <svg viewBox="0 0 320 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Tứ giác ABCD nghiêng: D(40,180), A(50,85), B(280,35), C(250,140) -->
      <polygon points="40,180 50,85 280,35 250,140" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5" stroke-linejoin="round"/>

      <!-- Vòng cung góc tại D -->
      <path d="M 43,155 A 25 25 0 0 1 65,177" fill="none" stroke="#EA580C" stroke-width="1.8"/>
      <path d="M 45,150 A 30 30 0 0 1 70,175" fill="none" stroke="#EA580C" stroke-width="1.8"/>

      <!-- Vòng cung góc tại B -->
      <path d="M 255,40 A 25 25 0 0 1 276,60" fill="none" stroke="#EA580C" stroke-width="1.8"/>
      <path d="M 250,42 A 30 30 0 0 1 274,65" fill="none" stroke="#EA580C" stroke-width="1.8"/>

      <circle cx="50" cy="85" r="4" fill="#1D4ED8"/>
      <circle cx="280" cy="35" r="4" fill="#1D4ED8"/>
      <circle cx="250" cy="140" r="4" fill="#1D4ED8"/>
      <circle cx="40" cy="180" r="4" fill="#1D4ED8"/>

      <text x="32" y="80" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">A</text>
      <text x="286" y="32" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">B</text>
      <text x="260" y="152" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">C</text>
      <text x="20" y="195" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">D</text>
    </svg>
  `,

  // Câu 26: Hình chữ nhật với 1 góc vuông & các cạnh đối = nhau
  cau26: `
    <svg viewBox="0 0 320 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Hình chữ nhật: (40, 40) đến (280, 180) -->
      <rect x="40" y="40" width="240" height="140" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5"/>

      <!-- Kí hiệu góc vuông tại góc dưới trái (40, 180) -->
      <polyline points="40,162 58,162 58,180" fill="none" stroke="#D97706" stroke-width="2"/>

      <!-- Vạch 2 gạch trên cạnh trên và dưới -->
      <g stroke="#B45309" stroke-width="2">
        <line x1="156" y1="34" x2="156" y2="46"/>
        <line x1="162" y1="34" x2="162" y2="46"/>
        
        <line x1="156" y1="174" x2="156" y2="186"/>
        <line x1="162" y1="174" x2="162" y2="186"/>
      </g>

      <!-- Vạch 1 gạch trên cạnh trái và phải -->
      <g stroke="#B45309" stroke-width="2">
        <line x1="34" y1="110" x2="46" y2="110"/>
        <line x1="274" y1="110" x2="286" y2="110"/>
      </g>
    </svg>
  `,

  // Câu 27: Hình thoi với 4 cạnh bằng nhau
  cau27: `
    <svg viewBox="0 0 320 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Hình thoi đỉnh: (160, 30), (280, 110), (160, 190), (40, 110) -->
      <polygon points="160,30 280,110 160,190 40,110" fill="#FDF2F8" stroke="#DB2777" stroke-width="2.5"/>

      <!-- Đường chéo nét đứt -->
      <line x1="160" y1="30" x2="160" y2="190" stroke="#F472B6" stroke-width="1.5" stroke-dasharray="4,4"/>
      <line x1="40" y1="110" x2="280" y2="110" stroke="#F472B6" stroke-width="1.5" stroke-dasharray="4,4"/>

      <!-- Góc vuông ở giao điểm O -->
      <polyline points="160,100 170,100 170,110" fill="none" stroke="#DB2777" stroke-width="1.5"/>

      <!-- Kí hiệu 1 gạch ở 4 cạnh -->
      <g stroke="#BE185D" stroke-width="2">
        <line x1="97" y1="67" x2="103" y2="73"/>
        <line x1="217" y1="67" x2="223" y2="73"/>
        <line x1="97" y1="153" x2="103" y2="147"/>
        <line x1="217" y1="153" x2="223" y2="147"/>
      </g>
    </svg>
  `,

  // Câu 28: Hình chữ nhật ABCD có 2 đường chéo cắt nhau tại O, AB = 8cm, BC = 6cm
  cau28: `
    <svg viewBox="0 0 340 230" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="230" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Hình chữ nhật ABCD: A(50,45), B(290,45), C(290,185), D(50,185) -->
      <rect x="50" y="45" width="240" height="140" fill="#EFF6FF" stroke="#1D4ED8" stroke-width="2.5"/>

      <!-- Đường chéo AC, BD -->
      <line x1="50" y1="45" x2="290" y2="185" stroke="#1D4ED8" stroke-width="1.8"/>
      <line x1="50" y1="185" x2="290" y2="45" stroke="#1D4ED8" stroke-width="1.8"/>

      <!-- Giao điểm O -->
      <circle cx="170" cy="115" r="3.5" fill="#DC2626"/>
      <text x="165" y="105" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626">O</text>

      <!-- Các đỉnh -->
      <circle cx="50" cy="45" r="4" fill="#1E3A8A"/>
      <circle cx="290" cy="45" r="4" fill="#1E3A8A"/>
      <circle cx="290" cy="185" r="4" fill="#1E3A8A"/>
      <circle cx="50" cy="185" r="4" fill="#1E3A8A"/>

      <text x="32" y="45" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">A</text>
      <text x="300" y="45" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">B</text>
      <text x="300" y="195" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">C</text>
      <text x="32" y="195" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">D</text>

      <!-- Kích thước AB = 8cm, BC = 6cm -->
      <text x="150" y="38" font-family="sans-serif" font-size="13" font-weight="600" fill="#4338CA">8 cm</text>
      <text x="298" y="120" font-family="sans-serif" font-size="13" font-weight="600" fill="#4338CA">6 cm</text>
    </svg>
  `,

  // Câu 34: Góc xOy và phân giác Ot, tứ giác OAMB
  cau34: `
    <svg viewBox="0 0 340 230" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="230" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Tia Ox, Oy, Ot xuất phát từ O(30, 200) -->
      <!-- O(30, 200) -->
      <!-- Tia Oy theo phương ngang: tới (320, 200) -->
      <line x1="30" y1="200" x2="320" y2="200" stroke="#334155" stroke-width="2"/>
      <text x="322" y="205" font-family="sans-serif" font-weight="bold" font-size="14" fill="#334155">y</text>

      <!-- Tia Ox hướng lên góc 48 độ: dx = 180, dy = -160 -> (210, 40) -->
      <line x1="30" y1="200" x2="200" y2="35" stroke="#334155" stroke-width="2"/>
      <text x="195" y="28" font-family="sans-serif" font-weight="bold" font-size="14" fill="#334155">x</text>

      <!-- Tia Ot góc 24 độ: tới (290, 85) -->
      <line x1="30" y1="200" x2="290" y2="85" stroke="#0284C7" stroke-width="1.8" stroke-dasharray="5,3"/>
      <text x="295" y="85" font-family="sans-serif" font-weight="bold" font-size="14" fill="#0284C7">t</text>

      <!-- Điểm M trên Ot: (210, 120) -->
      <!-- Điểm A trên Ox: (100, 134) -->
      <!-- Điểm B trên Oy: (140, 200) -->
      <!-- Tứ giác OAMB -->
      <polygon points="30,200 100,134 240,134 170,200" fill="#F0FDFA" stroke="#0D9488" stroke-width="2.5"/>
      <line x1="30" y1="200" x2="240" y2="134" stroke="#0D9488" stroke-width="1.8"/>
      <line x1="100" y1="134" x2="170" y2="200" stroke="#0D9488" stroke-width="1.8" stroke-dasharray="4,4"/>

      <!-- Điểm -->
      <circle cx="30" cy="200" r="4" fill="#0F766E"/>
      <circle cx="100" cy="134" r="4" fill="#0F766E"/>
      <circle cx="240" cy="134" r="4" fill="#0F766E"/>
      <circle cx="170" cy="200" r="4" fill="#0F766E"/>

      <text x="15" y="215" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">O</text>
      <text x="90" y="125" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">A</text>
      <text x="245" y="140" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">M</text>
      <text x="170" y="218" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">B</text>
    </svg>
  `,

  // Câu 35: Hình bình hành ABCD và giao điểm O của 2 đường chéo
  cau35: `
    <svg viewBox="0 0 340 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- D(40,170), A(110,50), B(300,50), C(230,170) -->
      <polygon points="110,50 300,50 230,170 40,170" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5" stroke-linejoin="round"/>
      
      <!-- Đường chéo AC, BD cắt tại O(170, 110) -->
      <line x1="110" y1="50" x2="230" y2="170" stroke="#78350F" stroke-width="1.8"/>
      <line x1="40" y1="170" x2="300" y2="50" stroke="#78350F" stroke-width="1.8"/>

      <circle cx="170" cy="110" r="4" fill="#DC2626"/>
      <text x="165" y="100" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626">O</text>

      <circle cx="110" cy="50" r="4" fill="#B45309"/>
      <circle cx="300" cy="50" r="4" fill="#B45309"/>
      <circle cx="230" cy="170" r="4" fill="#B45309"/>
      <circle cx="40" cy="170" r="4" fill="#B45309"/>

      <text x="100" y="40" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">A</text>
      <text x="310" y="55" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">B</text>
      <text x="235" y="185" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">C</text>
      <text x="25" y="180" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">D</text>
    </svg>
  `,

  // Câu 36: Tam giác ABC vuông tại A, trung tuyến AM, MD vuông AB, ME vuông AC
  cau36: `
    <svg viewBox="0 0 320 250" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="250" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Tam giác ABC vuông tại A: A(60,200), B(60,40), C(280,200) -->
      <polygon points="60,200 60,40 280,200" fill="#F1F5F9" stroke="#334155" stroke-width="2.5"/>

      <!-- M là trung điểm BC: M(170, 120) -->
      <!-- D trên AB: D(60, 120) -->
      <!-- E trên AC: E(170, 200) -->
      
      <!-- Trung tuyến AM -->
      <line x1="60" y1="200" x2="170" y2="120" stroke="#4F46E5" stroke-width="2"/>
      
      <!-- MD, ME, DE -->
      <line x1="170" y1="120" x2="60" y2="120" stroke="#2563EB" stroke-width="2"/>
      <line x1="170" y1="120" x2="170" y2="200" stroke="#2563EB" stroke-width="2"/>
      <line x1="60" y1="120" x2="170" y2="200" stroke="#E11D48" stroke-width="1.8" stroke-dasharray="4,4"/>

      <!-- Kí hiệu vuông góc tại A, D, E -->
      <polyline points="60,185 75,185 75,200" fill="none" stroke="#334155" stroke-width="1.5"/>
      <polyline points="60,135 75,135 75,120" fill="none" stroke="#2563EB" stroke-width="1.5"/>
      <polyline points="155,200 155,185 170,185" fill="none" stroke="#2563EB" stroke-width="1.5"/>

      <!-- Kí hiệu = nhau trên BM và MC -->
      <g stroke="#2563EB" stroke-width="2">
        <line x1="110" y1="76" x2="118" y2="84"/>
        <line x1="113" y1="73" x2="121" y2="81"/>
        <line x1="220" y1="156" x2="228" y2="164"/>
        <line x1="223" y1="153" x2="231" y2="161"/>
      </g>

      <!-- Các đỉnh -->
      <circle cx="60" cy="200" r="4" fill="#1E293B"/>
      <circle cx="60" cy="40" r="4" fill="#1E293B"/>
      <circle cx="280" cy="200" r="4" fill="#1E293B"/>
      <circle cx="170" cy="120" r="4" fill="#4F46E5"/>
      <circle cx="60" cy="120" r="4" fill="#2563EB"/>
      <circle cx="170" cy="200" r="4" fill="#2563EB"/>

      <text x="40" y="215" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">A</text>
      <text x="45" y="38" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">B</text>
      <text x="290" y="205" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">C</text>
      <text x="175" y="115" font-family="sans-serif" font-weight="bold" font-size="15" fill="#4F46E5">M</text>
      <text x="40" y="125" font-family="sans-serif" font-weight="bold" font-size="15" fill="#2563EB">D</text>
      <text x="168" y="218" font-family="sans-serif" font-weight="bold" font-size="15" fill="#2563EB">E</text>
    </svg>
  `,

  // Bài 4: Khu đất hình chữ nhật (2x + 5) và (y + 3), nhà kho x và y, phần đất chữ L
  bai4: `
    <svg viewBox="0 0 380 250" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="380" height="250" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Khu đất lớn: (70, 40) đến (320, 200). Chiều dài = 250, Chiều rộng = 160 -->
      <!-- Nhà kho góc trên bên phải: từ x=230 đến 320 (rộng x = 90), từ y=40 đến 115 (dài y = 75) -->
      
      <!-- Phần đất chữ L màu xanh lá nhạt -->
      <polygon points="70,40 230,40 230,115 320,115 320,200 70,200" fill="#ECFDF5" stroke="#059669" stroke-width="2.5"/>
      
      <!-- Nhà kho góc trên bên phải màu vàng cam nhạt -->
      <rect x="230" y="40" width="90" height="75" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5"/>
      
      <!-- Chữ trên hình -->
      <text x="100" y="140" font-family="sans-serif" font-weight="bold" font-size="16" fill="#047857">PHẦN ĐẤT CHỮ L</text>
      <text x="240" y="82" font-family="sans-serif" font-weight="bold" font-size="14" fill="#B45309">NHÀ KHO</text>

      <!-- Kích thước -->
      <!-- Chiều dài dưới: 2x + 5 (m) -->
      <path d="M 70,210 L 70,220 M 70,215 L 320,215 M 320,210 L 320,220" stroke="#334155" stroke-width="1.5"/>
      <text x="165" y="235" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1E293B">2x + 5 (m)</text>

      <!-- Chiều rộng trái: y + 3 (m) -->
      <path d="M 60,40 L 50,40 M 55,40 L 55,200 M 60,200 L 50,200" stroke="#334155" stroke-width="1.5"/>
      <text x="8" y="125" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1E293B">y + 3 (m)</text>

      <!-- Kích thước nhà kho ngang: x (m) -->
      <path d="M 230,30 L 230,20 M 230,25 L 320,25 M 320,30 L 320,20" stroke="#B45309" stroke-width="1.5"/>
      <text x="265" y="18" font-family="sans-serif" font-weight="bold" font-size="13" fill="#B45309">x (m)</text>

      <!-- Kích thước nhà kho dọc: y (m) -->
      <path d="M 330,40 L 340,40 M 335,40 L 335,115 M 330,115 L 340,115" stroke="#B45309" stroke-width="1.5"/>
      <text x="345" y="82" font-family="sans-serif" font-weight="bold" font-size="13" fill="#B45309">y (m)</text>
    </svg>
  `,

  // Bài 5: Khu vườn hình vuông cạnh x (m), mảnh đất trồng rau (150 m2)
  bai5: `
    <svg viewBox="0 0 340 310" class="w-full max-w-xs mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="310" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Khu vườn hình vuông: (40, 40) đến (260, 260) kích thước 220x220 -->
      <rect x="40" y="40" width="220" height="220" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>

      <!-- Mảnh đất trồng rau: góc trên phải. x từ 130 đến 260 (chiều rộng = 130), y từ 40 đến 170 (chiều cao = 130) -->
      <rect x="130" y="40" width="130" height="130" fill="#FFE4E6" stroke="#E11D48" stroke-width="2.5"/>
      
      <!-- Chữ mảnh đất trồng rau -->
      <text x="145" y="100" font-family="sans-serif" font-weight="bold" font-size="13" fill="#BE123C">Mảnh đất</text>
      <text x="142" y="120" font-family="sans-serif" font-weight="bold" font-size="13" fill="#BE123C">trồng rau</text>

      <!-- Kích thước 15 (m): khoảng trống bên trái mảnh rau ở cạnh trên -->
      <path d="M 40,30 L 40,20 M 40,25 L 130,25 M 130,30 L 130,20" stroke="#334155" stroke-width="1.5"/>
      <text x="65" y="18" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1E293B">15 (m)</text>

      <!-- Kích thước 10 (m): khoảng trống phía dưới mảnh rau ở cạnh phải -->
      <path d="M 270,170 L 280,170 M 275,170 L 275,260 M 270,260 L 280,260" stroke="#334155" stroke-width="1.5"/>
      <text x="285" y="220" font-family="sans-serif" font-weight="bold" font-size="13" fill="#1E293B">10 (m)</text>

      <!-- Cạnh đáy: x (m) -->
      <path d="M 40,270 L 40,280 M 40,275 L 260,275 M 260,270 L 260,280" stroke="#1D4ED8" stroke-width="1.5"/>
      <text x="135" y="295" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1D4ED8">x (m)</text>
    </svg>
  `,

  // Bài 6: Tam giác ABC vuông tại A, đường cao AH, HM vuông AB, HN vuông AC
  bai6: `
    <svg viewBox="0 0 340 230" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="230" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- A(90,40), B(30,190), C(310,190). AH vuông góc BC tại H(90,190) -->
      <polygon points="90,40 30,190 310,190" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
      
      <!-- Đường cao AH -->
      <line x1="90" y1="40" x2="90" y2="190" stroke="#DC2626" stroke-width="2"/>

      <!-- HM vuông AB tại M, HN vuông AC tại N -->
      <!-- Điểm M trên AB: (65, 102), N trên AC: (178, 100) -->
      <line x1="90" y1="190" x2="65" y2="102" stroke="#2563EB" stroke-width="1.8"/>
      <line x1="90" y1="190" x2="178" y2="100" stroke="#2563EB" stroke-width="1.8"/>
      <line x1="65" y1="102" x2="178" y2="100" stroke="#059669" stroke-width="1.8" stroke-dasharray="3,3"/>

      <!-- Điểm I trung điểm HC: H=90, C=310 -> I=(200, 190) -->
      <circle cx="200" cy="190" r="3" fill="#7C3AED"/>
      <text x="195" y="208" font-family="sans-serif" font-weight="bold" font-size="13" fill="#7C3AED">I</text>

      <!-- Điểm -->
      <circle cx="90" cy="40" r="4" fill="#1E293B"/>
      <circle cx="30" cy="190" r="4" fill="#1E293B"/>
      <circle cx="310" cy="190" r="4" fill="#1E293B"/>
      <circle cx="90" cy="190" r="4" fill="#DC2626"/>
      <circle cx="65" cy="102" r="3.5" fill="#2563EB"/>
      <circle cx="178" cy="100" r="3.5" fill="#2563EB"/>

      <text x="85" y="30" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1E293B">A</text>
      <text x="15" y="195" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1E293B">B</text>
      <text x="315" y="195" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1E293B">C</text>
      <text x="85" y="208" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626">H</text>
      <text x="45" y="100" font-family="sans-serif" font-weight="bold" font-size="13" fill="#2563EB">M</text>
      <text x="185" y="98" font-family="sans-serif" font-weight="bold" font-size="13" fill="#2563EB">N</text>
    </svg>
  `,

  // Bài 7: Tam giác MNP vuông tại M, E trung điểm NP, EH vuông MN, EK vuông MP
  bai7: `
    <svg viewBox="0 0 320 230" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="230" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Tam giác MNP vuông tại M(50, 180), N(50, 40), P(270, 180) -->
      <polygon points="50,180 50,40 270,180" fill="#F1F5F9" stroke="#334155" stroke-width="2.5"/>

      <!-- E trung điểm NP: (160, 110) -->
      <!-- H trên MN: (50, 110) -->
      <!-- K trên MP: (160, 180) -->
      
      <!-- Đoạn EH, EK, HK -->
      <line x1="160" y1="110" x2="50" y2="110" stroke="#2563EB" stroke-width="2"/>
      <line x1="160" y1="110" x2="160" y2="180" stroke="#2563EB" stroke-width="2"/>
      <line x1="50" y1="110" x2="160" y2="180" stroke="#DC2626" stroke-width="2"/>
      <line x1="50" y1="180" x2="160" y2="110" stroke="#059669" stroke-width="1.8" stroke-dasharray="4,4"/>

      <!-- Kí hiệu vuông góc -->
      <polyline points="50,165 65,165 65,180" fill="none" stroke="#334155" stroke-width="1.5"/>
      <polyline points="50,125 65,125 65,110" fill="none" stroke="#2563EB" stroke-width="1.5"/>
      <polyline points="145,180 145,165 160,165" fill="none" stroke="#2563EB" stroke-width="1.5"/>

      <circle cx="50" cy="180" r="4" fill="#1E293B"/>
      <circle cx="50" cy="40" r="4" fill="#1E293B"/>
      <circle cx="270" cy="180" r="4" fill="#1E293B"/>
      <circle cx="160" cy="110" r="4" fill="#2563EB"/>
      <circle cx="50" cy="110" r="4" fill="#2563EB"/>
      <circle cx="160" cy="180" r="4" fill="#2563EB"/>

      <text x="30" y="195" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">M</text>
      <text x="35" y="38" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">N</text>
      <text x="280" y="185" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">P</text>
      <text x="168" y="105" font-family="sans-serif" font-weight="bold" font-size="15" fill="#2563EB">E</text>
      <text x="30" y="115" font-family="sans-serif" font-weight="bold" font-size="15" fill="#2563EB">H</text>
      <text x="155" y="200" font-family="sans-serif" font-weight="bold" font-size="15" fill="#2563EB">K</text>
    </svg>
  `,

  // Bài 8: Tam giác ABC vuông tại A, trung tuyến AM, MD vuông AB, ME vuông AC, điểm N đối xứng với M qua D
  bai8: `
    <svg viewBox="0 0 340 240" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="240" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- A(110, 190), B(110, 50), C(310, 190) -->
      <polygon points="110,190 110,50 310,190" fill="#F8FAFC" stroke="#334155" stroke-width="2"/>
      
      <!-- M trung điểm BC: (210, 120) -->
      <!-- D trên AB: (110, 120) -->
      <!-- E trên AC: (210, 190) -->
      <!-- N đối xứng M qua D: D là trung điểm MN -> N(10, 120) -->
      
      <!-- Đoạn MN cắt AB tại D -->
      <line x1="10" y1="120" x2="210" y2="120" stroke="#2563EB" stroke-width="2"/>
      <line x1="110" y1="190" x2="210" y2="120" stroke="#4F46E5" stroke-width="2"/>
      <line x1="210" y1="120" x2="210" y2="190" stroke="#2563EB" stroke-width="1.8"/>
      
      <!-- Hình thoi AMBN: nối N với A, N với B -->
      <polygon points="10,120 110,50 210,120 110,190" fill="#EEF2FF" stroke="#4338CA" stroke-width="2" stroke-dasharray="3,2"/>

      <circle cx="110" cy="190" r="4" fill="#1E293B"/>
      <circle cx="110" cy="50" r="4" fill="#1E293B"/>
      <circle cx="310" cy="190" r="4" fill="#1E293B"/>
      <circle cx="210" cy="120" r="4" fill="#4F46E5"/>
      <circle cx="110" cy="120" r="4" fill="#2563EB"/>
      <circle cx="210" cy="190" r="4" fill="#2563EB"/>
      <circle cx="10" cy="120" r="4" fill="#DC2626"/>

      <text x="95" y="208" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1E293B">A</text>
      <text x="95" y="45" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1E293B">B</text>
      <text x="318" y="195" font-family="sans-serif" font-weight="bold" font-size="14" fill="#1E293B">C</text>
      <text x="218" y="115" font-family="sans-serif" font-weight="bold" font-size="14" fill="#4F46E5">M</text>
      <text x="115" y="115" font-family="sans-serif" font-weight="bold" font-size="14" fill="#2563EB">D</text>
      <text x="208" y="208" font-family="sans-serif" font-weight="bold" font-size="14" fill="#2563EB">E</text>
      <text x="2" y="115" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626">N</text>
    </svg>
  `,

  // Bài 9: Hình chữ nhật ABCD, AH vuông BD, CK vuông BD
  bai9: `
    <svg viewBox="0 0 340 230" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="230" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      
      <!-- Hình chữ nhật ABCD: A(40,40), B(280,40), C(280,180), D(40,180) -->
      <rect x="40" y="40" width="240" height="140" fill="#F8FAFC" stroke="#334155" stroke-width="2.5"/>

      <!-- Đường chéo BD -->
      <line x1="40" y1="180" x2="280" y2="40" stroke="#334155" stroke-width="2"/>

      <!-- AH vuông BD tại H: H=(100, 145) -->
      <!-- CK vuông BD tại K: K=(220, 75) -->
      <line x1="40" y1="40" x2="100" y2="145" stroke="#DC2626" stroke-width="2"/>
      <line x1="280" y1="180" x2="220" y2="75" stroke="#DC2626" stroke-width="2"/>

      <!-- AHCK là hình bình hành: nối A-K và H-C nét đứt -->
      <line x1="40" y1="40" x2="220" y2="75" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="4,4"/>
      <line x1="100" y1="145" x2="280" y2="180" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="4,4"/>

      <!-- Kí hiệu vuông góc -->
      <polyline points="93,133 103,127 110,138" fill="none" stroke="#DC2626" stroke-width="1.5"/>
      <polyline points="210,82 217,93 227,87" fill="none" stroke="#DC2626" stroke-width="1.5"/>

      <circle cx="40" cy="40" r="4" fill="#1E293B"/>
      <circle cx="280" cy="40" r="4" fill="#1E293B"/>
      <circle cx="280" cy="180" r="4" fill="#1E293B"/>
      <circle cx="40" cy="180" r="4" fill="#1E293B"/>
      <circle cx="100" cy="145" r="4" fill="#DC2626"/>
      <circle cx="220" cy="75" r="4" fill="#DC2626"/>

      <text x="25" y="40" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">A</text>
      <text x="290" y="40" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">B</text>
      <text x="290" y="190" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">C</text>
      <text x="25" y="190" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">D</text>
      <text x="105" y="160" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626">H</text>
      <text x="215" y="65" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626">K</text>
    </svg>
  `,

  // ==================== HÌNH VẼ CHO ĐỀ SỐ 04 ====================
  // Đề 4 - Câu 12: Tứ giác MNPQ
  cau12_de4: `
    <svg viewBox="0 0 320 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <!-- Tứ giác MNPQ -->
      <polygon points="50,150 110,40 270,70 230,180" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="50" y1="150" x2="270" y2="70" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,4"/>
      <line x1="110" y1="40" x2="230" y2="180" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,4"/>
      <circle cx="50" cy="150" r="4" fill="#4338CA"/>
      <circle cx="110" cy="40" r="4" fill="#4338CA"/>
      <circle cx="270" cy="70" r="4" fill="#4338CA"/>
      <circle cx="230" cy="180" r="4" fill="#4338CA"/>
      <text x="32" y="160" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">M</text>
      <text x="105" y="28" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">N</text>
      <text x="280" y="75" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">P</text>
      <text x="235" y="202" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">Q</text>
    </svg>
  `,

  // Đề 4 - Câu 14: Góc xOy, phân giác Oz, điểm P, PE vuông Ox tại E, PF vuông Oy tại F
  cau14_de4: `
    <svg viewBox="0 0 320 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <!-- Đỉnh O tại (40, 180) -->
      <!-- Tia Ox ngang: (40, 180) -> (280, 180) -->
      <line x1="40" y1="180" x2="280" y2="180" stroke="#334155" stroke-width="2"/>
      <text x="285" y="185" font-family="sans-serif" font-weight="bold" font-size="14" fill="#334155">x</text>
      <!-- Tia Oy hợp góc 60 độ: dy = -sin(60)*220 = -190, dx = 110 -->
      <line x1="40" y1="180" x2="160" y2="30" stroke="#334155" stroke-width="2"/>
      <text x="165" y="30" font-family="sans-serif" font-weight="bold" font-size="14" fill="#334155">y</text>
      <!-- Tia Oz phân giác 30 độ: O(40,180) qua P(200, 88) -->
      <line x1="40" y1="180" x2="270" y2="47" stroke="#EA580C" stroke-width="2" stroke-dasharray="6,4"/>
      <text x="275" y="45" font-family="sans-serif" font-weight="bold" font-size="14" fill="#EA580C">z</text>
      <!-- Điểm P(200, 88) -->
      <!-- PE vuông Ox tại E: E(200, 180) -->
      <line x1="200" y1="88" x2="200" y2="180" stroke="#4F46E5" stroke-width="2"/>
      <!-- PF vuông Oy tại F: F(110, 93) -->
      <line x1="200" y1="88" x2="110" y2="93" stroke="#4F46E5" stroke-width="2"/>
      <polyline points="190,180 190,170 200,170" fill="none" stroke="#4F46E5" stroke-width="1.5"/>
      <circle cx="40" cy="180" r="4" fill="#1E293B"/>
      <circle cx="200" cy="88" r="4" fill="#EA580C"/>
      <circle cx="200" cy="180" r="4" fill="#4F46E5"/>
      <circle cx="110" cy="93" r="4" fill="#4F46E5"/>
      <text x="25" y="195" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">O</text>
      <text x="205" y="80" font-family="sans-serif" font-weight="bold" font-size="15" fill="#EA580C">P</text>
      <text x="200" y="200" font-family="sans-serif" font-weight="bold" font-size="15" fill="#4F46E5">E</text>
      <text x="95" y="90" font-family="sans-serif" font-weight="bold" font-size="15" fill="#4F46E5">F</text>
    </svg>
  `,

  // Đề 4 - Bài 2: Mảnh đất chữ L (3x + 4) và (y + 5), kho x * y
  bai4_de4: `
    <svg viewBox="0 0 340 230" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="230" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <!-- Toàn bộ khu đất (3x+4) x (y+5): A(40,30), B(300,30), C(300,180), D(40,180) -->
      <!-- Phần chữ L màu xanh lá -->
      <path d="M 40,30 L 210,30 L 210,110 L 300,110 L 300,180 L 40,180 Z" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5"/>
      <!-- Phần nhà kho: (210,30) đến (300,110) -->
      <rect x="210" y="30" width="90" height="80" fill="#FEE2E2" stroke="#DC2626" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="255" y="75" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626" text-anchor="middle">Kho x · y</text>
      <text x="120" y="115" font-family="sans-serif" font-weight="bold" font-size="15" fill="#15803D" text-anchor="middle">Phần đất chữ L</text>
      <!-- Kích thước -->
      <line x1="40" y1="200" x2="300" y2="200" stroke="#475569" stroke-width="1.5"/>
      <text x="170" y="218" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">3x + 4 (m)</text>
      <line x1="20" y1="30" x2="20" y2="180" stroke="#475569" stroke-width="1.5"/>
      <text x="14" y="110" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle" transform="rotate(-90 14,110)">y + 5 (m)</text>
    </svg>
  `,

  // Đề 4 - Bài 3: Tam giác DEF vuông tại D, đường cao DH, P trên DE, Q trên DF
  bai6_de4: `
    <svg viewBox="0 0 340 230" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="230" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <!-- Tam giác DEF vuông tại D: D(50,170), E(50,50), F(280,170) -->
      <polygon points="50,170 50,50 280,170" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="50" y="155" width="15" height="15" fill="none" stroke="#2563EB" stroke-width="1.5"/>
      <!-- Đường cao DH: DH vuông EF -->
      <line x1="50" y1="170" x2="100" y2="76" stroke="#DC2626" stroke-width="2"/>
      <!-- HP vuông DE tại P: P=(50, 76) -->
      <line x1="100" y1="76" x2="50" y2="76" stroke="#16A34A" stroke-width="2"/>
      <!-- HQ vuông DF tại Q: Q=(100, 170) -->
      <line x1="100" y1="76" x2="100" y2="170" stroke="#16A34A" stroke-width="2"/>
      <line x1="50" y1="76" x2="100" y2="170" stroke="#9333EA" stroke-width="2" stroke-dasharray="4,4"/>
      <circle cx="50" cy="170" r="4" fill="#1E293B"/>
      <circle cx="50" cy="50" r="4" fill="#1E293B"/>
      <circle cx="280" cy="170" r="4" fill="#1E293B"/>
      <circle cx="100" cy="76" r="4" fill="#DC2626"/>
      <circle cx="50" cy="76" r="4" fill="#16A34A"/>
      <circle cx="100" cy="170" r="4" fill="#16A34A"/>
      <text x="32" y="185" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">D</text>
      <text x="35" y="45" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">E</text>
      <text x="290" y="175" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">F</text>
      <text x="105" y="70" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626">H</text>
      <text x="32" y="80" font-family="sans-serif" font-weight="bold" font-size="14" fill="#16A34A">P</text>
      <text x="95" y="190" font-family="sans-serif" font-weight="bold" font-size="14" fill="#16A34A">Q</text>
    </svg>
  `,

  // ==================== HÌNH VẼ CHO ĐỀ SỐ 05 ====================
  // Đề 5 - Câu 11: Tứ giác ABCD có AD = BC (đánh dấu bằng nhau)
  cau11_de5: `
    <svg viewBox="0 0 320 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <!-- Tứ giác ABCD: A(40,80), B(150,30), C(280,140), D(170,190) -->
      <polygon points="40,80 150,30 280,140 170,190" fill="#F0FDF4" stroke="#16A34A" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Vạch bằng nhau trên AD và BC -->
      <g stroke="#15803D" stroke-width="2">
        <line x1="100" y1="130" x2="108" y2="142"/>
        <line x1="104" y1="128" x2="112" y2="140"/>
      </g>
      <g stroke="#15803D" stroke-width="2">
        <line x1="210" y1="80" x2="218" y2="92"/>
        <line x1="214" y1="78" x2="222" y2="90"/>
      </g>
      <circle cx="40" cy="80" r="4" fill="#15803D"/>
      <circle cx="150" cy="30" r="4" fill="#15803D"/>
      <circle cx="280" cy="140" r="4" fill="#15803D"/>
      <circle cx="170" cy="190" r="4" fill="#15803D"/>
      <text x="22" y="85" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">A</text>
      <text x="145" y="22" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">B</text>
      <text x="290" y="148" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">C</text>
      <text x="165" y="212" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1E293B">D</text>
    </svg>
  `,

  // Đề 5 - Câu 12: Hình chữ nhật MNPQ, giao điểm đường chéo O
  cau12_de5: `
    <svg viewBox="0 0 320 200" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <rect x="40" y="40" width="240" height="120" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5"/>
      <line x1="40" y1="40" x2="280" y2="160" stroke="#9333EA" stroke-width="2"/>
      <line x1="40" y1="160" x2="280" y2="40" stroke="#9333EA" stroke-width="2"/>
      <circle cx="160" cy="100" r="4" fill="#DC2626"/>
      <circle cx="40" cy="40" r="4" fill="#1E293B"/>
      <circle cx="280" cy="40" r="4" fill="#1E293B"/>
      <circle cx="280" cy="160" r="4" fill="#1E293B"/>
      <circle cx="40" cy="160" r="4" fill="#1E293B"/>
      <text x="25" y="38" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">M</text>
      <text x="290" y="38" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">N</text>
      <text x="290" y="175" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">P</text>
      <text x="25" y="175" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">Q</text>
      <text x="160" y="90" font-family="sans-serif" font-weight="bold" font-size="15" fill="#DC2626" text-anchor="middle">O</text>
    </svg>
  `,

  // Đề 5 - Câu 14: Hình bình hành MNPQ, giao điểm 2 đường chéo I
  cau14_de5: `
    <svg viewBox="0 0 320 200" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <polygon points="50,150 100,50 270,50 220,150" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5"/>
      <line x1="50" y1="150" x2="270" y2="50" stroke="#475569" stroke-width="1.8"/>
      <line x1="100" y1="50" x2="220" y2="150" stroke="#475569" stroke-width="1.8"/>
      <circle cx="160" cy="100" r="4" fill="#DC2626"/>
      <text x="32" y="160" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">M</text>
      <text x="95" y="38" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">N</text>
      <text x="280" y="55" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">P</text>
      <text x="225" y="165" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">Q</text>
      <text x="160" y="90" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626" text-anchor="middle">I</text>
    </svg>
  `,

  // Đề 5 - Bài 2: Vườn hình vuông cạnh y, trồng hoa bớt 20m và 12m
  bai5_de5: `
    <svg viewBox="0 0 320 230" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="230" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <rect x="50" y="30" width="170" height="170" fill="#F1F5F9" stroke="#475569" stroke-width="2"/>
      <rect x="50" y="110" width="100" height="90" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5"/>
      <text x="100" y="155" font-family="sans-serif" font-weight="bold" font-size="14" fill="#15803D" text-anchor="middle">Trồng hoa</text>
      <text x="100" y="175" font-family="sans-serif" font-weight="bold" font-size="13" fill="#15803D" text-anchor="middle">180 m²</text>
      <line x1="150" y1="205" x2="220" y2="205" stroke="#EA580C" stroke-width="1.8"/>
      <text x="185" y="222" font-family="sans-serif" font-weight="bold" font-size="13" fill="#EA580C" text-anchor="middle">20 m</text>
      <line x1="225" y1="30" x2="225" y2="110" stroke="#EA580C" stroke-width="1.8"/>
      <text x="245" y="75" font-family="sans-serif" font-weight="bold" font-size="13" fill="#EA580C">12 m</text>
      <line x1="30" y1="30" x2="30" y2="200" stroke="#2563EB" stroke-width="1.5"/>
      <text x="22" y="120" font-family="sans-serif" font-weight="bold" font-size="15" fill="#2563EB" text-anchor="middle">y</text>
      <line x1="50" y1="15" x2="220" y2="15" stroke="#2563EB" stroke-width="1.5"/>
      <text x="135" y="12" font-family="sans-serif" font-weight="bold" font-size="15" fill="#2563EB" text-anchor="middle">y</text>
    </svg>
  `,

  // Đề 5 - Bài 3: Tam giác ABC vuông tại B, trung điểm K của AC, KD vuông AB, KE vuông BC
  bai7_de5: `
    <svg viewBox="0 0 340 230" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="230" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <!-- Tam giác ABC vuông tại B: B(50,170), A(50,50), C(270,170) -->
      <polygon points="50,170 50,50 270,170" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="50" y="155" width="15" height="15" fill="none" stroke="#2563EB" stroke-width="1.5"/>
      <!-- K là trung điểm AC: (160, 110) -->
      <!-- KD vuông AB tại D: D=(50, 110) -->
      <line x1="160" y1="110" x2="50" y2="110" stroke="#16A34A" stroke-width="2"/>
      <!-- KE vuông BC tại E: E=(160, 170) -->
      <line x1="160" y1="110" x2="160" y2="170" stroke="#16A34A" stroke-width="2"/>
      <!-- BK và DE nối nét đứt -->
      <line x1="50" y1="170" x2="160" y2="110" stroke="#DC2626" stroke-width="2"/>
      <line x1="50" y1="110" x2="160" y2="170" stroke="#9333EA" stroke-width="2" stroke-dasharray="4,4"/>
      <circle cx="50" cy="170" r="4" fill="#1E293B"/>
      <circle cx="50" cy="50" r="4" fill="#1E293B"/>
      <circle cx="270" cy="170" r="4" fill="#1E293B"/>
      <circle cx="160" cy="110" r="4" fill="#DC2626"/>
      <circle cx="50" cy="110" r="4" fill="#16A34A"/>
      <circle cx="160" cy="170" r="4" fill="#16A34A"/>
      <text x="32" y="185" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">B</text>
      <text x="35" y="45" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">A</text>
      <text x="280" y="175" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">C</text>
      <text x="170" y="105" font-family="sans-serif" font-weight="bold" font-size="15" fill="#DC2626">K</text>
      <text x="32" y="115" font-family="sans-serif" font-weight="bold" font-size="15" fill="#16A34A">D</text>
      <text x="155" y="190" font-family="sans-serif" font-weight="bold" font-size="15" fill="#16A34A">E</text>
    </svg>
  `,

  // ==================== HÌNH VẼ CHO ĐỀ SỐ 06 ====================
  // Đề 6 - Câu 9: Tứ giác MNPQ có góc N = góc Q
  cau9_de6: `
    <svg viewBox="0 0 320 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <!-- Tứ giác MNPQ: Q(40,180), M(50,85), N(280,35), P(250,140) -->
      <polygon points="40,180 50,85 280,35 250,140" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M 43,155 A 25 25 0 0 1 65,177" fill="none" stroke="#EA580C" stroke-width="1.8"/>
      <path d="M 45,150 A 30 30 0 0 1 70,175" fill="none" stroke="#EA580C" stroke-width="1.8"/>
      <path d="M 255,42 A 25 25 0 0 1 272,60" fill="none" stroke="#EA580C" stroke-width="1.8"/>
      <path d="M 250,45 A 30 30 0 0 1 270,65" fill="none" stroke="#EA580C" stroke-width="1.8"/>
      <circle cx="50" cy="85" r="4" fill="#1E293B"/>
      <circle cx="280" cy="35" r="4" fill="#1E293B"/>
      <circle cx="250" cy="140" r="4" fill="#1E293B"/>
      <circle cx="40" cy="180" r="4" fill="#1E293B"/>
      <text x="32" y="80" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">M</text>
      <text x="290" y="35" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">N</text>
      <text x="260" y="150" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">P</text>
      <text x="25" y="195" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">Q</text>
    </svg>
  `,

  // Đề 6 - Câu 11: Hình thoi EFGH có EG vuông FH tại O
  cau11_de6: `
    <svg viewBox="0 0 320 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <!-- E(160,25), F(280,110), G(160,195), H(40,110) -->
      <polygon points="160,25 280,110 160,195 40,110" fill="#F5F3FF" stroke="#7C3AED" stroke-width="2.5"/>
      <line x1="160" y1="25" x2="160" y2="195" stroke="#DC2626" stroke-width="2"/>
      <line x1="40" y1="110" x2="280" y2="110" stroke="#DC2626" stroke-width="2"/>
      <rect x="160" y="98" width="12" height="12" fill="none" stroke="#DC2626" stroke-width="1.5"/>
      <circle cx="160" cy="110" r="4" fill="#DC2626"/>
      <text x="155" y="20" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">E</text>
      <text x="290" y="115" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">F</text>
      <text x="155" y="210" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">G</text>
      <text x="25" y="115" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">H</text>
      <text x="175" y="125" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626">O</text>
    </svg>
  `,

  // Đề 6 - Câu 14: Tam giác DEF vuông tại D, trung tuyến DI, IM vuông DE, IN vuông DF
  cau14_de6: `
    <svg viewBox="0 0 340 220" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="220" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <!-- D(40,170), E(40,40), F(280,170) -->
      <polygon points="40,170 40,40 280,170" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="40" y="156" width="14" height="14" fill="none" stroke="#2563EB" stroke-width="1.5"/>
      <!-- Trung điểm I của EF: (160, 105) -->
      <line x1="40" y1="170" x2="160" y2="105" stroke="#DC2626" stroke-width="2"/>
      <line x1="160" y1="105" x2="40" y2="105" stroke="#16A34A" stroke-width="2"/>
      <line x1="160" y1="105" x2="160" y2="170" stroke="#16A34A" stroke-width="2"/>
      <circle cx="40" cy="170" r="4" fill="#1E293B"/>
      <circle cx="40" cy="40" r="4" fill="#1E293B"/>
      <circle cx="280" cy="170" r="4" fill="#1E293B"/>
      <circle cx="160" cy="105" r="4" fill="#DC2626"/>
      <circle cx="40" cy="105" r="4" fill="#16A34A"/>
      <circle cx="160" cy="170" r="4" fill="#16A34A"/>
      <text x="25" y="185" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">D</text>
      <text x="25" y="38" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">E</text>
      <text x="290" y="175" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">F</text>
      <text x="170" y="100" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626">I</text>
      <text x="20" y="110" font-family="sans-serif" font-weight="bold" font-size="14" fill="#16A34A">M</text>
      <text x="155" y="190" font-family="sans-serif" font-weight="bold" font-size="14" fill="#16A34A">N</text>
    </svg>
  `,

  // Đề 6 - Bài 3: Tam giác MNP vuông tại M, trung tuyến MK, KH vuông MN, KI vuông MP, điểm đối xứng Q
  bai8_de6: `
    <svg viewBox="0 0 340 240" class="w-full max-w-sm mx-auto my-3" xmlns="http://www.w3.org/2000/svg">
      <rect width="340" height="240" fill="#F8FAFC" rx="10" stroke="#E2E8F0" stroke-width="1"/>
      <!-- M(120,180), N(120,60), P(290,180) -->
      <polygon points="120,180 120,60 290,180" fill="#EFF6FF" stroke="#2563EB" stroke-width="2.5" stroke-linejoin="round"/>
      <rect x="120" y="166" width="14" height="14" fill="none" stroke="#2563EB" stroke-width="1.5"/>
      <!-- K là trung điểm NP: (205, 120) -->
      <!-- KH vuông MN tại H: H=(120, 120) -->
      <line x1="205" y1="120" x2="120" y2="120" stroke="#16A34A" stroke-width="2"/>
      <!-- KI vuông MP tại I: I=(205, 180) -->
      <line x1="205" y1="120" x2="205" y2="180" stroke="#16A34A" stroke-width="2"/>
      <line x1="120" y1="180" x2="205" y2="120" stroke="#DC2626" stroke-width="2"/>
      <!-- Điểm Q đối xứng K qua H: Q=(35, 120) -->
      <line x1="120" y1="120" x2="35" y2="120" stroke="#9333EA" stroke-width="2" stroke-dasharray="4,4"/>
      <!-- Hình thoi MKNQ: nối Q-N và Q-M -->
      <line x1="35" y1="120" x2="120" y2="60" stroke="#9333EA" stroke-width="2"/>
      <line x1="35" y1="120" x2="120" y2="180" stroke="#9333EA" stroke-width="2"/>
      <circle cx="120" cy="180" r="4" fill="#1E293B"/>
      <circle cx="120" cy="60" r="4" fill="#1E293B"/>
      <circle cx="290" cy="180" r="4" fill="#1E293B"/>
      <circle cx="205" cy="120" r="4" fill="#DC2626"/>
      <circle cx="120" cy="120" r="4" fill="#16A34A"/>
      <circle cx="205" cy="180" r="4" fill="#16A34A"/>
      <circle cx="35" cy="120" r="4" fill="#9333EA"/>
      <text x="105" y="195" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">M</text>
      <text x="115" y="50" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">N</text>
      <text x="295" y="185" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1E293B">P</text>
      <text x="215" y="115" font-family="sans-serif" font-weight="bold" font-size="14" fill="#DC2626">K</text>
      <text x="125" y="115" font-family="sans-serif" font-weight="bold" font-size="14" fill="#16A34A">H</text>
      <text x="205" y="198" font-family="sans-serif" font-weight="bold" font-size="14" fill="#16A34A">I</text>
      <text x="18" y="125" font-family="sans-serif" font-weight="bold" font-size="14" fill="#9333EA">Q</text>
    </svg>
  `
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SVG_DIAGRAMS;
}
