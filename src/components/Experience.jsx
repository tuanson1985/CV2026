import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Experience({ isActive, isMobile }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0, margin: '-60px 0px -60px 0px' });
  const showAnim = isMobile ? isInView : isActive;

  return (
    <section id="experience" ref={ref} className={showAnim ? 'section-active' : ''}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={showAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Hành trình</p>
        <h2 className="section-title">Kinh Nghiệm Làm Việc</h2>
        <div className="section-line"></div>
      </motion.div>

      <div className="experience-single-wrap">
        <motion.div
          className="experience-card experience-card--full"
          initial={{ opacity: 0, y: 40 }}
          animate={showAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Header */}
          <div className="exp-header">
            <div className="exp-header-left">
              <span className="timeline-period">01/06/2021 — Nay</span>
              <div className="timeline-role">Web Developer</div>
              <div className="company-name">HQ Group</div>
            </div>
            <span className="exp-badge">Full-time · 5+ năm</span>
          </div>

          <p className="timeline-desc" style={{ marginBottom: '1.6rem' }}>
            Tham gia phát triển và vận hành các hệ thống web nội bộ của HQ Group, bao gồm: nền tảng thương mại điện tử, hệ thống quản lý kho thành viên, hệ thống thanh toán và các giải pháp bảo mật hạ tầng.
          </p>

          <div className="exp-columns">
            {/* Cột 1 */}
            <div className="exp-col">
              <div className="exp-col-title">Web Development</div>
              <ul className="experience-bullets">
                <li>Thiết kế & phát triển các <b>hệ thống web nội bộ</b> theo yêu cầu doanh nghiệp</li>
                <li>Phát triển tính năng, tối ưu <b>backend</b> và hiệu năng hệ thống</li>
                <li>Xây dựng <b>REST API</b>, tích hợp cổng thanh toán và webhook bên thứ ba</li>
                <li>Quản trị hạ tầng, <b>cấu hình Nginx / server</b> và điều phối tài nguyên</li>
              </ul>
            </div>

            {/* Cột 2 */}
            <div className="exp-col">
              <div className="exp-col-title">Tool & Automation</div>
              <ul className="experience-bullets">
                <li>Xây dựng <b>tool tự động hoá thao tác</b> (macro simulation) bằng TypeScript</li>
                <li>Phát triển <b>bot xử lý nghiệp vụ</b> tự động: theo dõi, thông báo, phân luồng dữ liệu</li>
                <li>Viết script tự động hoá tác vụ vận hành và <b>giám sát hệ thống</b></li>
              </ul>
            </div>

            {/* Cột 3 */}
            <div className="exp-col">
              <div className="exp-col-title">Mobile App</div>
              <ul className="experience-bullets">
                <li>Phát triển ứng dụng <b>cross-platform</b> bằng Flutter / Dart</li>
                <li>Xây dựng app nội bộ phục vụ quản lý, vận hành và tra cứu dữ liệu</li>
                <li>Tích hợp <b>REST API</b> và xử lý trạng thái ứng dụng theo thời gian thực</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
