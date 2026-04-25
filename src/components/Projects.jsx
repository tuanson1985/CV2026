import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import ScrollableGrid from './ScrollableGrid';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.33, 1, 0.68, 1],
      delay: i * 0.1,
    }
  })
};

const projects = [
  {
    icon: '🏗️',
    name: 'BD10F – Khotaptrung Marketplace',
    desc: 'Marketplace nội bộ quy mô lớn, kết nối 6 sàn quốc tế (G2G, Eldorado, PlayerOk...). Auto-crawl giá, quản lý gift card & nick/acc, đa ví điện tử, JWT API multi-guard.',
    tags: ['Laravel', 'MySQL', 'Redis', 'JWT', 'TypeScript', 'jQuery', 'Ajax', 'HTML/CSS'],
  },
  {
    icon: '🎮',
    name: 'Hub Daily – Game Service Marketplace',
    desc: 'Nền tảng game multi-shop: nạp thẻ, nick/acc, Robux B2B, tool game (NRO, BloxFruits...). Bot Roblox proxy rotation, đa cổng thanh toán, báo cáo Telegram tự động.',
    tags: ['Laravel', 'MySQL', 'Redis', 'JWT', 'S3', 'Telegram API', 'jQuery', 'Ajax'],
  },
  {
    icon: '🏬',
    name: 'Hub HQ – Game eCommerce Platform',
    desc: 'Sàn game Việt Nam: nick/acc, gift card SeaGM tự động, nạp game. B2B API merchant, ví điện tử, phê duyệt lô hàng đa cấp, RBAC + Sentry monitoring.',
    tags: ['Laravel', 'MySQL', 'Redis', 'JWT', 'Spatie RBAC', 'Sentry', 'jQuery', 'Ajax'],
  },
  {
    icon: '🏪',
    name: 'Kho tập trung – Kho thành viên',
    desc: 'Nền tảng thương mại điện tử chuyên cung cấp tài khoản game và dịch vụ số tự động. Tối ưu quy trình bảo mật, tốc độ giao dịch và quản lý kho thông minh.',
    tags: ['Laravel', 'MySQL', 'HTML/CSS', 'JavaScript', 'jQuery', 'Ajax'],
    demo: 'https://shoprito.com',
  },
  {
    icon: '💜',
    name: 'PassionZone',
    desc: 'Nền tảng kết nối người chơi & idol gaming: đặt lịch chơi cùng, chat real-time, tặng quà và theo dõi idol yêu thích. Idol quản lý lịch, đơn booking và thu nhập qua app Flutter riêng.',
    tags: ['Laravel', 'Socket.IO', 'Flutter', 'MySQL', 'JavaScript', 'jQuery'],
  },
  {
    icon: '📊',
    name: 'Báo cáo tài chính',
    desc: 'Hệ thống báo cáo tài chính nội bộ, tổng hợp dữ liệu giao dịch, xuất báo cáo theo kỳ và trực quan hóa số liệu cho ban quản lý.',
    tags: ['Laravel', 'MySQL', 'JavaScript', 'jQuery', 'Ajax'],
  },
  {
    icon: '🔑',
    name: 'Ritokey',
    desc: 'Nền tảng mua bán tài khoản và dịch vụ kỹ thuật số (YouTube, Cursor, ...). Hỗ trợ giao dịch tự động, quản lý đơn hàng và hệ thống kho hàng thông minh.',
    tags: ['Laravel', 'MySQL', 'Redis Queue', 'Tailwind', 'JQuery', 'Ajax'],
    demo: 'https://ritokey.com',
  },
];

export default function Projects({ isActive, isMobile }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0, margin: '-60px 0px -60px 0px' });
  const showAnim = isMobile ? isInView : isActive;

  return (
    <section id="projects" ref={ref} className={showAnim ? 'section-active' : ''}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={showAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Dự Án Nổi Bật</h2>
        <div className="section-line"></div>
      </motion.div>

      <ScrollableGrid className="projects-grid swiper-no-swiping">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.name}
            className="project-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={showAnim ? 'visible' : 'hidden'}
            style={{ perspective: 1000 }}
          >
            <div className="project-img">{proj.icon}</div>
            <div className="project-body">
              <div className="project-name">{proj.name}</div>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tags">
                {proj.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
              </div>
              <div className="project-links">
                {proj.source && <a href={proj.source} className="project-link"><FaGithub /> Source Code</a>}
                {proj.demo && <a href={proj.demo} className="project-link" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>}
              </div>
            </div>
          </motion.div>
        ))}
      </ScrollableGrid>
    </section>
  );
}
