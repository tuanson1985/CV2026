import{r,j as n}from"./vendor-react-C9DAJJD3.js";const a={name:"Bùi Tuấn Sơn",email:"sonbt@hqplay.vn",phone:"0906240410",zaloUrl:"https://zalo.me/0906240410",techStack:{languages:["PHP","JavaScript","TypeScript","Dart","HTML5","CSS3","SQL","Apps Script"],frameworks:["Laravel","Flutter","Vue.js","React","Node.js","jQuery","Ajax","Tailwind CSS","WebSocket","WebRTC","REST API"],tools:["Git / GitHub","MySQL","Redis","Linux","Nginx","Postman","Figma","Playwright","Unit Test","Feature Test","Bot / Automation","Macro Simulation"]},projects:[{name:"PassionZone",icon:"💜",tags:["Laravel","Socket.IO","Flutter","MySQL","JavaScript","jQuery"],desc:"Nền tảng kết nối user & idol gaming: booking chơi cùng, chat real-time Socket.IO, tặng quà ảo. App Flutter riêng cho idol quản lý lịch, đơn và doanh thu."},{name:"Hub Daily – Game Service Marketplace",icon:"🎮",tags:["Laravel","MySQL","Redis","JWT","S3","Telegram API","jQuery","Ajax"],desc:"Nền tảng multi-shop dịch vụ game: nạp thẻ, nick/acc, Robux B2B, tool game (NRO, BloxFruits...). Bot Roblox proxy rotation, đa cổng thanh toán, báo cáo Telegram, 2FA + IP whitelist."},{name:"BD10F – Khotaptrung Marketplace",icon:"🏗️",tags:["Laravel","MySQL","Redis","JWT","TypeScript","jQuery","Ajax"],desc:"Marketplace nội bộ quy mô lớn: gift card, nick/acc game, đơn hàng tự động trên 6 sàn quốc tế (G2G, Eldorado, PlayerOk, ItemKu, GGsel, FunPay). Auto-crawl giá, multi-wallet, JWT API, 169 bảng."},{name:"Ritokey",icon:"🔑",tags:["Laravel","HTML/CSS","Tailwind CSS","jQuery","Ajax","MySQL","Pusher"],desc:"Nền tảng mua bán tài khoản và dịch vụ kỹ thuật số (YouTube, Cursor, ...). Hỗ trợ giao dịch tự động, quản lý đơn hàng và hệ thống kho thông minh.",demo:"https://ritokey.com"},{name:"Hub HQ – Game eCommerce Platform",icon:"🏬",tags:["Laravel","MySQL","Redis","JWT","Spatie RBAC","Sentry","jQuery","Ajax"],desc:"Nền tảng thương mại điện tử game Việt Nam: nick/acc, gift card SeaGM tự động, nạp game, B2B API merchant, ví điện tử, phê duyệt lô hàng đa cấp, RBAC + 2FA, Sentry monitoring."},{name:"Kho tập trung – Kho thành viên",icon:"🏪",tags:["Laravel","MySQL","HTML/CSS","JavaScript","jQuery","Ajax"],desc:"Nền tảng thương mại điện tử chuyên cung cấp tài khoản game và dịch vụ số tự động. Tối ưu quy trình bảo mật, tốc độ giao dịch và quản lý kho thông minh.",demo:"https://shoprito.com"},{name:"Báo cáo tài chính",icon:"📊",tags:["Laravel","MySQL","JavaScript","jQuery","Ajax"],desc:"Hệ thống báo cáo tài chính nội bộ, tổng hợp dữ liệu giao dịch, xuất báo cáo theo kỳ và trực quan hóa số liệu cho ban quản lý."}],experience:[{period:"01/06/2021 — Nay",role:"Web Developer",company:"HQ Group",desc:"Phát triển và vận hành hệ thống web thương mại điện tử tập trung, quản lý kho thành viên và tối ưu hạ tầng server."}]};function N(h){const d=h.toLowerCase().trim(),b=" "+d.replace(/[.,!?()[\]{}"':;\-]/g," ")+" ",i=(...c)=>c.some(e=>e.length<=3?b.includes(" "+e+" "):d.includes(e));if(i("hello","hi","xin chào","chào","hey","alo"))return`👋 Xin chào! Tôi là trợ lý AI của **${a.name}** – một Full-stack Developer nhiệt huyết.

Bạn muốn biết gì về Sơn? Kỹ năng, dự án, hay muốn xem CV? Tôi sẵn sàng hỗ trợ! 😊`;if(i("phương là ai","giới thiệu","who is","introduce","về phương","về anh ấy","about","thông tin cá nhân","cá nhân","bản thân"))return`**${a.name}** là một Full-stack Developer với năng lực phát triển toàn diện:

• 💻 **Dev**: Xây dựng Backend API & thiết kế Frontend UI/UX
• 🖥️ **DevOps**: Cấu hình Nginx, Linux Server Admin
• 🤖 **Tool & Automation**: Viết tool tự động hoá thao tác, bot nghiệp vụ bằng TypeScript
• 📱 **Mobile**: Phát triển app cross-platform với Flutter/Dart
• 🧪 **QA**: Tự động hóa kiểm thử phần mềm

Sơn cover **toàn bộ vòng đời** của một dự án – từ backend, frontend, mobile đến automation!

📄 Bạn có thể bấm nút "Tải CV" ở màn hình đầu trang để biết thêm nha!`;if(i("skill","kỹ năng","tech","stack","công nghệ","laravel","php","vue","react","backend","frontend","server","nginx","websocket","typescript","playwright","redis","flutter","dart","tool","automation","bot","macro","tự động")){const c=a.techStack;return`⚡ **Tech Stack của Sơn:**

🔤 **Ngôn ngữ:** ${c.languages.join(", ")}

📦 **Framework & Library:** ${c.frameworks.join(", ")}

🛠️ **Tools & Platform:** ${c.tools.join(", ")}

Kéo xuống phần **Kỹ Năng** để xem chi tiết!`}if(i("dự án","project","work","làm gì","portfolio","ritokey","hub hq","kho","báo cáo","tài chính","warehouse","bd10f","marketplace","g2g","eldorado","gift card","hub daily","robux","roblox","daily","nro","tool game","seagm","nick","acc game","sentry","passionzone","passion","idol","booking","socket")){const c=a.projects.map(e=>{const l=e.tags?` _(${e.tags.slice(0,3).join(", ")}…)_`:"",v=e.demo?` → [Demo](${e.demo})`:e.source?` → [Source](${e.source})`:"";return`• **${e.icon} ${e.name}**${l}: ${e.desc}${v}`}).join(`
`);return`🚀 **Các dự án nổi bật (${a.projects.length} dự án):**

${c}

Kéo xuống phần **Dự Án** để xem chi tiết!`}return i("kinh nghiệm","experience","năm kinh nghiệm","career","sự nghiệp","làm việc","công ty","hq group")?`💼 **Kinh nghiệm làm việc:**

${a.experience.map(e=>`• **${e.role}** @ **${e.company}** _(${e.period})_
  ${e.desc}`).join(`
`)}

Tổng cộng **5+ năm** kinh nghiệm. Kéo xuống phần **Kinh Nghiệm** để xem chi tiết!`:i("realtime","real-time","chat","websocket","socket")?`💬 **Real-time Chat System:**

Sơn đã xây dựng hoàn chỉnh hệ thống chat WebSocket với:
• Đồng bộ biệt danh người dùng
• Đếm unread_count per-user chính xác
• Đánh dấu đọc / chưa đọc real-time
• Tự động test với **ReadUnreadTest** (PHPUnit)

Rất phù hợp cho các hệ thống cần tính năng real-time!`:i("test","unit test","phpunit","automation","tự động")?`🧪 **Testing:**

Sơn viết Unit Test nghiêm túc với **PHPUnit / Laravel**:
• Test case cho các luồng nghiệp vụ phức tạp
• Ví dụ: **ReadUnreadTest** cho hệ thống chat
• Đảm bảo chất lượng code trước khi deploy

Đây là điểm cộng lớn khi so với nhiều developer khác!`:i("liên hệ","contact","email","hire","tuyển dụng","recruit","work together","hợp tác","offer")?`📬 **Liên hệ với Sơn:**

• 📧 **Email:** [${a.email}](mailto:${a.email})
• 📞 **Điện thoại:** [${a.phone}](tel:${a.phone})
• 💬 **Zalo:** [Nhắn tin Zalo](${a.zaloUrl})

Sơn đang **mở cửa cho các cơ hội mới**! Hãy gửi email hoặc gọi trực tiếp để trao đổi nhé. 🤝`:i("cv","resume","hồ sơ","tải","download")?`📄 **Tải CV của Sơn:**

Bạn có thể nhấn nút **"Tải CV"** ngay tại phần giới thiệu ở đầu trang web nhé!

CV bao gồm:
• Kinh nghiệm làm việc chi tiết
• Quá trình học tập & Kỹ năng
• Các dự án nổi bật

⬆️ Cuộn lên và bấm nút "Tải CV" nha!`:i("lương","salary","mức lương","compensation","số điện thoại","phone","address","địa chỉ","zalo")?`ℹ️ Về thông tin này, bạn có thể **trao đổi trực tiếp với anh Sơn** nhé!

📧 **Email:** [${a.email}](mailto:${a.email})
💬 **Zalo:** [${a.phone}](${a.zaloUrl})`:i("sở thích","hobby","hobbies","ngoài công việc","outside work","đọc sách","sách","reading","ai","sáng tạo","ngoại khoá","ngoai khoa","extracurricular","thể thao","sport","cầu lông","badminton","chạy bộ","running","hoạt động")?`🌟 **Ngoài công việc, Sơn:**

🏃 **Hoạt động ngoại khoá**
• **Chạy bộ** – Tham gia đầy đủ các giải nội bộ, thành tích top finisher
• **Cầu lông** – Chơi thường xuyên, tham gia sân ngoại khoá
• **Đọc sách** – Yêu thích sách công nghệ, tâm lý học và phát triển bản thân

🤖 **AI sáng tạo** – Đam mê tạo hình ảnh & âm nhạc bằng AI

Sơn là người năng động, hoà đồng và gắn kết tốt với văn hoá công ty! 😄`:i("system design","thiết kế hệ thống","kiến trúc","architecture","hiệu năng","performance","metric","con số")?`📊 **System Architecture & Performance:**

Sơn thiết kế hệ thống tập trung vào hiệu năng và khả năng mở rộng:
• **Tối ưu tự động hóa:** Giảm 85% thời gian xử lý đơn (Dự án Ritokey).
• **Tối ưu tài nguyên:** Giảm 70% băng thông server nhờ kiến trúc WebRTC (Dự án Chat System).
• **Thiết kế luồng dữ liệu:** Xây dựng ERD, Sequence Diagram, API Specs rõ ràng để scale hệ thống an toàn.

Sự kết hợp giữa code tốt và thiết kế chuẩn giúp hệ thống luôn ổn định!`:i("tại sao","why hire","điểm mạnh","strength","why phuong","why should","lý do")?`🏆 **Tại sao chọn Sơn?**

✅ **Fullstack Expertise:** Thành thạo cả Backend lẫn Frontend, phát triển sản phẩm end-to-end.
✅ **Deep Knowledge:** Chuyên sâu PHP/Laravel & Vue 3, giải quyết các bài toán khó (Race Condition, WebSocket, WebRTC).
✅ **DevOps Mindset:** Quản lý Linux Server, CI/CD, Nginx, hướng tới High Availability.
✅ **Data-driven:** Tối ưu hóa và đo lường hệ thống bằng con số (SLA 99.9%, latency < 50ms).

📄 Bạn tải CV để xem chi tiết nhé → nút ở đầu trang!`:`🤔 Cảm ơn bạn đã hỏi! Tôi chưa có thông tin chính xác về điều này.

Bạn có thể hỏi về:
• 💼 **Kỹ năng & Tech Stack**
• 🚀 **Dự án đã làm**
• 📊 **Kiến trúc hệ thống**
• 📬 **Cách liên hệ**
• 📄 **Tải CV**

Hoặc liên hệ trực tiếp: **${a.email}**`}const A=[{label:"👋 Giới thiệu",value:"Hãy giới thiệu thông tin cá nhân của Sơn"},{label:"💼 Tech Stack",value:"Kỹ năng và công nghệ của Sơn là gì?"},{label:"🚀 Dự án",value:"Kể tôi nghe về các dự án nổi bật"},{label:"🏢 Kinh nghiệm",value:"Kinh nghiệm làm việc của Sơn"},{label:"🏃 Ngoại khoá",value:"Sơn có tham gia hoạt động ngoại khoá nào không?"},{label:"📤 Liên hệ",value:"Làm sao để liên hệ với Sơn?"}];function $(){const[h,d]=r.useState(!1),[b,i]=r.useState([{id:1,role:"assistant",text:`👋 Xin chào! Tôi là **AI Assistant** của **Bùi Tuấn Sơn**.

Bạn muốn tìm hiểu gì về Sơn? Kỹ năng, dự án hay cơ hội hợp tác? 😊`,time:new Date}]),[c,e]=r.useState(""),[l,v]=r.useState(!1),[j,y]=r.useState(!1),k=r.useRef(null),S=r.useRef(null),f=r.useCallback(()=>{k.current?.scrollIntoView({behavior:"smooth"})},[]);r.useEffect(()=>{h&&(f(),y(!1),setTimeout(()=>S.current?.focus(),300))},[h,b,f]);const x=r.useCallback(async t=>{const p=(t||c).trim();if(!p||l)return;const g={id:Date.now(),role:"user",text:p,time:new Date};i(s=>[...s,g]),e(""),v(!0),await new Promise(s=>setTimeout(s,700+Math.random()*600));const u=N(p);i(s=>[...s,{id:Date.now()+1,role:"assistant",text:u,time:new Date}]),v(!1),h||y(!0)},[c,h]),T=t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),x())};function C(t){const p=/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\n)/g,g=[];let u=0,s;for(;(s=p.exec(t))!==null;){s.index>u&&g.push({type:"text",value:t.slice(u,s.index)});const o=s[0];if(o===`
`)g.push({type:"br"});else if(o.startsWith("**"))g.push({type:"bold",value:o.slice(2,-2)});else{const m=o.match(/^\[([^\]]+)\]\(([^)]+)\)$/);m?g.push({type:"link",label:m[1],href:m[2]}):g.push({type:"text",value:o})}u=s.index+o.length}return u<t.length&&g.push({type:"text",value:t.slice(u)}),g.map((o,m)=>o.type==="br"?n.jsx("br",{},m):o.type==="bold"?n.jsx("strong",{children:o.value},m):o.type==="link"?n.jsx("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",style:{color:"#a78bfa",textDecoration:"underline"},children:o.label},m):o.value)}const w=t=>t.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"});return n.jsxs(n.Fragment,{children:[n.jsxs("button",{className:`chatbot-tab ${h?"chatbot-tab--open":""}`,onClick:()=>d(t=>!t),"aria-label":"Mở/đóng AI Chat",id:"chatbot-toggle-btn",children:[h?n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:n.jsx("polyline",{points:"9 18 15 12 9 6"})}):n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}),n.jsx("circle",{cx:"9",cy:"10",r:"0.8",fill:"currentColor"}),n.jsx("circle",{cx:"12",cy:"10",r:"0.8",fill:"currentColor"}),n.jsx("circle",{cx:"15",cy:"10",r:"0.8",fill:"currentColor"})]}),n.jsx("span",{className:"chatbot-tab-label",children:"AI Chat"}),j&&!h&&n.jsx("span",{className:"chatbot-badge"})]}),h&&n.jsx("div",{className:"chatbot-backdrop",onClick:()=>d(!1),"aria-hidden":"true"}),n.jsxs("div",{className:`chatbot-drawer ${h?"chatbot-drawer--open":""}`,id:"chatbot-widget",role:"dialog","aria-label":"AI Chat Assistant",children:[n.jsxs("div",{className:"chatbot-header",children:[n.jsxs("div",{className:"chatbot-avatar",children:[n.jsx("span",{children:"AI"}),n.jsx("span",{className:"chatbot-online-dot"})]}),n.jsxs("div",{className:"chatbot-header-info",children:[n.jsx("p",{className:"chatbot-header-name",children:"SonBT Assistant"}),n.jsx("p",{className:"chatbot-header-status",children:l?"✦ Đang nhập...":"● Online"})]}),n.jsx("button",{className:"chatbot-close-btn",onClick:()=>d(!1),"aria-label":"Đóng chat",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:n.jsx("polyline",{points:"9 18 15 12 9 6"})})})]}),n.jsxs("div",{className:"chatbot-messages",id:"chatbot-messages",children:[b.map(t=>n.jsxs("div",{className:`chatbot-msg chatbot-msg--${t.role}`,children:[t.role==="assistant"&&n.jsx("div",{className:"chatbot-msg-avatar",children:n.jsx("span",{children:"AI"})}),n.jsxs("div",{className:"chatbot-msg-bubble",children:[n.jsx("p",{className:"chatbot-msg-text",children:C(t.text)}),n.jsx("span",{className:"chatbot-msg-time",children:w(t.time)})]})]},t.id)),l&&n.jsxs("div",{className:"chatbot-msg chatbot-msg--assistant",children:[n.jsx("div",{className:"chatbot-msg-avatar",children:n.jsx("span",{children:"AI"})}),n.jsxs("div",{className:"chatbot-msg-bubble chatbot-typing",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]})]}),n.jsx("div",{ref:k})]}),n.jsx("div",{className:"chatbot-quick-prompts",children:A.map(t=>n.jsx("button",{className:"chatbot-quick-btn",onClick:()=>x(t.value),id:`quick-${t.label.replace(/\s+/g,"-").toLowerCase()}`,disabled:l,children:t.label},t.value))}),n.jsxs("div",{className:"chatbot-input-row",children:[n.jsx("input",{ref:S,id:"chatbot-input",className:"chatbot-input",type:"text",placeholder:l?"Đang trả lời...":"Nhập câu hỏi của bạn...",value:c,onChange:t=>e(t.target.value),onKeyDown:T,maxLength:300,disabled:l}),n.jsx("button",{className:"chatbot-send-btn",onClick:()=>x(),disabled:!c.trim()||l,"aria-label":"Gửi tin nhắn",id:"chatbot-send-btn",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})})]}),n.jsx("p",{className:"chatbot-footer-note",children:"Powered by SonBT AI · Built with ♥"})]})]})}export{$ as default};
