import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./LayoutDefault.scss"
import { editUser, getUser } from "../../Services/UserServiecs";
import logo from '../../assets/images/logo.jpg';
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function LayoutDefault() {
  const token = sessionStorage.getItem("token");
  const isLogin = !!token;
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuUser, setShowMenuUser] = useState(false);

  const navLinkActive = (e) => {
    // console.log(e);
    return e.isActive ? "menu__link menu__link--active" : "menu__link"
  }

  const handleLogout = async () => {
    const allUsers = await getUser();
    const foundUser = allUsers.find((user) => user.id === sessionStorage.getItem("id"));

    if (foundUser) {
      const newData = { ...foundUser, token: "" };
      await editUser(foundUser.id, newData);
    }


    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    navigate("/login");
  };


  return (
    <>
      <div className="layoutdefault" onClick={() => { setShowMenu(false); setShowMenuUser(false) }}>
        <header className="layoutdefault__header">
          <div className="layoutdefault__header__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>


          <div className="layoutdefault__header__toggle" onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu) }}>
            ☰
          </div>

          <ul className={`menu ${showMenu ? "menu--active" : ""}`}>
            <li>
              <NavLink to="/" className={navLinkActive}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/Topics" className={navLinkActive}>Topic</NavLink>
            </li>
            <li>
              <NavLink to="/History" className={navLinkActive}>History</NavLink>
            </li>
          </ul>
          <div className="layoutdefault__header__right">
            {isLogin ? (
              <div className="layoutdefault__header__user">
                <div className="layoutdefault__header__user-icon" onClick={(e) => { e.stopPropagation(); setShowMenuUser(!showMenuUser) }}>
                  <FaUserCircle size={24} color="black" />
                </div>
                {showMenuUser && (
                  <ul className="layoutdefault__header__user-dropdown">
                    <li onClick={() => navigate("/profile")}>Trang cá nhân</li>
                    <li onClick={handleLogout}>Đăng xuất</li>
                  </ul>
                )}
              </div>
            ) : (
              <>
                <div className="layoutdefault__header__right--item">
                  <Link to="/login">Login</Link>
                </div>
                <div className="layoutdefault__header__right--item">
                  <Link to="/register">Register</Link>
                </div>
              </>
            )}
          </div>
        </header>
        <main className="layoutdefault__main">
          <Outlet />
        </main>

        <footer class="footer">
          <div class="footer-container">
            <div class="footer-grid">
              <div class="footer-section">
                <h3>QuizMasterVN</h3>
                <p style={{ color:'d1d5db', marginBottom:'20px' }}>Nền tảng học tập trực tuyến hàng đầu Việt Nam, giúp bạn nâng
                  cao kiến thức một cách hiệu quả.</p>
              </div>
              <div class="footer-section">
                <h3>Sản phẩm</h3>
                <ul>
                  <li><a href="#">Bài thi trắc nghiệm</a></li>
                  <li><a href="#">Khóa học online</a></li>
                  <li><a href="#">Chứng chỉ</a></li>
                  <li><a href="#">Ứng dụng mobile</a></li>
                </ul>
              </div>
              <div class="footer-section">
                <h3>Hỗ trợ</h3>
                <ul>
                  <li><a href="#">Trung tâm trợ giúp</a></li>
                  <li><a href="#">Hướng dẫn sử dụng</a></li>
                  <li><a href="#">Liên hệ</a></li>
                  <li><a href="#">Báo lỗi</a></li>
                </ul>
              </div>
              <div class="footer-section">
                <h3>Công ty</h3>
                <ul>
                  <li><a href="#">Về chúng tôi</a></li>
                  <li><a href="#">Tuyển dụng</a></li>
                  <li><a href="#">Tin tức</a></li>
                  <li><a href="#">Đối tác</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-bottom">
              <p>&copy; 2025 QuizMasterVN. Tất cả quyền được bảo lưu. | Điều khoản sử dụng | Chính sách bảo mật</p>
            </div>
          </div>
        </footer>
      </div>

    </>
  )
}

export default LayoutDefault;