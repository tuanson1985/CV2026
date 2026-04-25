// ─── Nguồn dữ liệu duy nhất (Single Source of Truth) ──────────────────────────
// Mọi thay đổi ở đây sẽ tự động phản ánh cả lên Portfolio lẫn file CV tải về.

export const userInfo = {
  name: 'Bùi Tuấn Sơn',
  title: 'Full-Stack Developer (PHP / Laravel)',
  dob: '04/10/1985',
  email: 'sonbt@hqplay.vn',
  phone: '0906240410',
  address: 'C4 Nam Đồng, Đống Đa, Hà Nội',
  github: 'github.com/tuanson1985',
  website: 'https://dophuong1621.github.io/portfolio',
  summary:
    'Full-Stack Developer với 5+ năm kinh nghiệm xây dựng và vận hành hệ thống web quy mô lớn — từ backend API, hạ tầng server đến giao diện người dùng. Có khả năng phát triển app mobile cross-platform (Flutter) và xây dựng tool tự động hoá thao tác nghiệp vụ (TypeScript). Đam mê tối ưu hiệu năng, thiết kế kiến trúc hệ thống linh hoạt và giải quyết các bài toán kỹ thuật phức tạp của doanh nghiệp.',
};

export const education = [
  {
    period: '2004 – 2011',
    school: 'Đại Học Xây Dựng Hà Nội',
    degree: 'Kỹ sư cơ giới hóa xây dựng',
  },
];

export const experiences = [
  {
    period: '01/06/2021 — Nay',
    role: 'Web Developer',
    company: 'HQ Group',
    desc: 'Tham gia phát triển và vận hành các hệ thống web nội bộ của HQ Group, bao gồm: nền tảng thương mại điện tử, hệ thống quản lý kho thành viên, hệ thống thanh toán (nạp/rút tiền, quản lý ví, đối soát giao dịch) và các giải pháp bảo mật hạ tầng như chống DDoS, chống spam, rate limiting.',
    bullets: [
      'Tham gia thiết kế, phát triển các hệ thống web nội bộ theo yêu cầu của doanh nghiệp',
      'Phát triển tính năng, tối ưu backend và hệ thống',
      'Quản trị hạ tầng, cấu hình server và điều phối tài nguyên',
    ],
  },
];

export const projects = [
  {
    name: 'Kho tập trung – Kho thành viên',
    desc: 'Shop acc chuyên mua bán tài khoản và dịch vụ số (game, streaming, phần mềm...). Hệ thống quản lý kho tài khoản theo từng loại sản phẩm, tự động giao hàng sau thanh toán, theo dõi tồn kho và lịch sử giao dịch theo thời gian thực.',
    bullets: [
      'Thiết kế & phát triển giao diện người dùng (storefront) và giao diện quản trị (admin panel)',
      'Tối ưu hiệu năng server, bảo mật hệ thống và cấu hình Nginx',
      'Xây dựng và quản lý domain, cấu hình SSL, DNS',
      'Triển khai các giải pháp chống DDoS, chống spam và rate limiting',
    ],
    tech: 'PHP | Laravel | MySQL | Redis | HTML/CSS | JavaScript | jQuery | Ajax',
  },
  {
    name: 'RitoKey',
    desc: 'Nền tảng mua bán tài khoản và dịch vụ kỹ thuật số (YouTube Premium, Cursor AI, ...). Hệ thống xử lý giao dịch hoàn toàn tự động, quản lý đơn hàng theo thời gian thực và kho hàng thông minh.',
    bullets: [
      'Xây dựng luồng giao dịch tự động: thanh toán → cấp tài khoản',
      'Tích hợp Redis Queue xử lý hàng ngàn đơn hàng đồng thời không block hệ thống',
      'Triển khai rate limiting và các lớp bảo mật chống lạm dụng API',
    ],
    tech: 'PHP | Laravel | MySQL | Redis Queue | Tailwind | JavaScript | jQuery | Ajax',
  },
  {
    name: 'PassionZone',
    desc: 'Nền tảng kết nối người chơi và idol gaming: đặt lịch chơi cùng, chat real-time, tặng quà ảo và theo dõi idol yêu thích. Idol quản lý lịch, đơn booking và thu nhập qua app Flutter riêng.',
    bullets: [
      'Xây dựng hệ thống booking lịch chơi theo slot thời gian, quản lý trạng thái đơn real-time',
      'Tích hợp Socket.IO cho chat real-time 1-1 giữa user và idol, hỗ trợ tặng quà ảo trong phòng',
      'Phát triển app Flutter dành riêng cho idol: nhận đơn, quản lý lịch, theo dõi doanh thu',
      'Xây dựng hệ thống ví nội bộ, thanh toán booking và phân chia hoa hồng tự động',
    ],
    tech: 'PHP | Laravel | MySQL | Socket.IO | Flutter | Dart | JavaScript | jQuery | Ajax',
  },
  {
    name: 'Hub Daily – Game Service Marketplace',
    desc: 'Nền tảng thương mại dịch vụ game multi-shop (multi-tenant) dành cho thị trường Việt Nam: nạp thẻ điện thoại, mua bán nick/acc game, giao dịch Robux B2B và tool game tự động. Hơn 100 controllers, ~100 models, tích hợp đa cổng thanh toán và Roblox bot.',
    bullets: [
      'Xây dựng hệ thống multi-tenant: mỗi shop có domain, cấu hình thanh toán và API key riêng',
      'Phát triển Roblox bot (proxy rotation, multi-version) xử lý đơn Robux B2B tự động',
      'Tích hợp đa cổng thanh toán (nạp thẻ, rút tiền ngân hàng, ví nội bộ) và S3 storage',
      'Xây dựng hệ thống báo cáo tự động qua Telegram, export Excel và dashboard doanh thu',
    ],
    tech: 'PHP | Laravel | MySQL | Redis | JWT | S3 | Telegram API | JavaScript | jQuery | Ajax',
  },
  {
    name: 'BD10F – Khotaptrung Marketplace',
    desc: 'Hệ thống marketplace nội bộ quy mô lớn: quản lý gift card, nick/acc game, đơn hàng tự động & thủ công trên 6 sàn quốc tế (G2G, Eldorado, PlayerOk, ItemKu, GGsel, FunPay). Tích hợp ví điện tử, auto-crawl giá, nạp game tự động và hệ thống thanh toán đa cổng.',
    bullets: [
      'Thiết kế & phát triển hệ thống quản lý đơn hàng tự động và thủ công trên 6 sàn quốc tế',
      'Xây dựng module auto-crawl giá, định giá động và đồng bộ offer theo thời gian thực',
      'Tích hợp đa ví điện tử (FunPay, RBX, ZeusX), cổng thanh toán và hệ thống đối soát',
      'Phát triển REST API (JWT) phục vụ mobile/client, multi-guard auth (web/api/frontend)',
    ],
    tech: 'PHP | Laravel | MySQL | Redis | JWT | TypeScript | JavaScript | jQuery | Ajax',
  },
  {
    name: 'Hub HQ – Game eCommerce Platform',
    desc: 'Nền tảng thương mại điện tử game Việt Nam: bán nick/acc, gift card tích hợp SeaGM tự động, dịch vụ nạp game (NRO, Roblox, Ninja...). B2B API cho merchant, ví điện tử, phê duyệt lô hàng đa cấp, RBAC + 2FA và Sentry monitoring.',
    bullets: [
      'Tích hợp nhà cung cấp SeaGM tự động: mapping category, mua/bán gift card và retry logic Fibonacci',
      'Xây dựng B2B REST API (JWT) cho merchant, hệ thống ví điện tử và transaction ledger',
      'Thiết kế workflow phê duyệt lô hàng đa cấp (lead/CFO/CEO) và hoàn hàng đa bước',
      'Tích hợp Sentry monitoring, RBAC (Spatie), scheduler tự động xác nhận & retry đơn lỗi',
    ],
    tech: 'PHP | Laravel | MySQL | Redis | JWT | Spatie RBAC | Sentry | JavaScript | jQuery | Ajax',
  },
];

export const skills = {
  core: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Nginx', 'REST API', 'UX/UI'],
  architecture: ['System Design', 'API Specs', 'Performance Optimization', 'Playwright', 'Unit Test'],
  devops: ['Linux Server', 'CI/CD', 'Docker', 'Git / GitHub', 'WebRTC', 'Vue 3', 'React', 'WebSocket'],
  mobile: ['Flutter', 'Dart', 'Cross-platform App'],
  automation: ['TypeScript', 'Bot / Automation', 'Macro Simulation'],
};

export const activities = [
  { icon: '🏃', name: 'Chạy bộ',    desc: 'Tham gia đầy đủ các giải nội bộ, thành tích top finisher' },
  { icon: '📚', name: 'Đọc sách',   desc: 'Yêu thích sách công nghệ, tâm lý học và phát triển bản thân' },

  { icon: '🏸', name: 'Cầu lông',   desc: 'Chơi thường xuyên, tham gia sân ngoại khoá' },
  { icon: '🤖', name: 'AI sáng tạo',desc: 'Tạo hình ảnh & âm nhạc bằng công nghệ AI' },
];
