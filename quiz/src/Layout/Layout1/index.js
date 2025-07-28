import { Link, Outlet } from "react-router-dom";
import "./layout1.css";

function Layout1() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <Link to="#" className="logo">
            <div className="logo-icon">🧠</div>
            QuizMasterVN
          </Link>
          <nav>
            <ul className="nav-menu">
              <li><a href="/#home">Trang chủ</a></li>
              <li><a href="/#features">Tính năng</a></li>
              <li><a href="/#categories">Danh mục</a></li>
              <li><a href="#about">Giới thiệu</a></li>
              <li><a href="#contact">Liên hệ</a></li>
            </ul>
            <div className="hamburger" id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
          <Link to="#" className="cta-button">Bắt đầu ngay</Link>
        </div>

        <div className="mobile-menu" id="mobileMenu">
          <a href="#home">Trang chủ</a>
          <a href="#features">Tính năng</a>
          <a href="#categories">Danh mục</a>
          <a href="#about">Giới thiệu</a>
          <a href="#contact">Liên hệ</a>
          <a href="#" className="mobile-cta">Bắt đầu ngay</a>
        </div>
      </header>

      <main>{Outlet}</main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>QuizMasterVN</h3>
              <p style={{ color: "#d1d5db", marginBottom: 20 }}>
                Nền tảng học tập trực tuyến hàng đầu Việt Nam, giúp bạn nâng cao kiến thức một cách hiệu quả.
              </p>
            </div>
            <div className="footer-section">
              <h3>Sản phẩm</h3>
              <ul>
                <li><a href="#">Bài thi trắc nghiệm</a></li>
                <li><a href="#">Khóa học online</a></li>
                <li><a href="#">Chứng chỉ</a></li>
                <li><a href="#">Ứng dụng mobile</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Hỗ trợ</h3>
              <ul>
                <li><a href="#">Trung tâm trợ giúp</a></li>
                <li><a href="#">Hướng dẫn sử dụng</a></li>
                <li><a href="#">Liên hệ</a></li>
                <li><a href="#">Báo lỗi</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Công ty</h3>
              <ul>
                <li><a href="#">Về chúng tôi</a></li>
                <li><a href="#">Tuyển dụng</a></li>
                <li><a href="#">Tin tức</a></li>
                <li><a href="#">Đối tác</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 QuizMasterVN. Tất cả quyền được bảo lưu. | Điều khoản sử dụng | Chính sách bảo mật</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout1;
