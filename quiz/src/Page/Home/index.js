import "./style.css"
import bgHero from '../../assets/images/hero-image.svg';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ListTopic from "../Topics/listTopic";

function Home() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animated");
                }
            });
        }, observerOptions);

        document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const animateCounter = (element, target, duration = 2000) => {
            let start = 0;
            const increment = target / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target.toLocaleString() + (element.textContent.includes("+") ? "+" : "");
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start).toLocaleString() + (element.textContent.includes("+") ? "+" : "");
                }
            }, 16);
        };

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const numberElement = entry.target.querySelector(".stat-number");
                    const text = numberElement.textContent;
                    const number = parseInt(text.replace(/[^0-9]/g, ""));

                    if (text.includes("4.9")) {
                        numberElement.textContent = "4.9/5";
                    } else {
                        animateCounter(numberElement, number);
                    }

                    statsObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll(".stat-item").forEach(el => statsObserver.observe(el));

        return () => statsObserver.disconnect();
    }, []);

    return (
        <>
            {/*  Hero Section  */}
            <section className="hero" id="home">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">🎯 Nền tảng học tập #1 Việt Nam</div>
                        <h1 className="hero-title">Học tập thông minh với QuizMasterVN</h1>
                        <p className="hero-subtitle">Nâng cao kiến thức của bạn với hàng nghìn câu hỏi trắc nghiệm chất lượng cao, được
                            thiết kế bởi các chuyên gia hàng đầu.</p>
                        <div className="hero-buttons">
                            <Link to="/topics" className="btn-primary">Khám phá ngay</Link>
                            <Link to="/" className="btn-secondary">Xem demo</Link>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <img src={bgHero} alt="Hero" className="hero-image" />
                    </div>
                </div>
            </section>

            {/*  Stats Section  */}
            <section className="stats">
                <div className="stats-container">
                    <div className="stats-grid">
                        <div className="stat-item animate-on-scroll">
                            <div className="stat-icon">👥</div>
                            <div className="stat-number">3,000+</div>
                            <div className="stat-label">Người dùng đang sử dụng</div>
                        </div>
                        <div className="stat-item animate-on-scroll">
                            <div className="stat-icon">📚</div>
                            <div className="stat-number">1,000+</div>
                            <div className="stat-label">Câu hỏi chất lượng</div>
                        </div>
                        <div className="stat-item animate-on-scroll">
                            <div className="stat-icon">🏆</div>
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Chủ đề đa dạng</div>
                        </div>
                        <div className="stat-item animate-on-scroll">
                            <div className="stat-icon">⭐</div>
                            <div className="stat-number">4.9/5</div>
                            <div className="stat-label">Đánh giá trung bình</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features" id="features">
                <div className="features-container">
                    <div className="section-header animate-on-scroll">
                        <div className="section-badge">✨ Tính năng nổi bật</div>
                        <h2 className="section-title">Tại sao chọn QuizMasterVN?</h2>
                        <p className="section-subtitle">Chúng tôi cung cấp trải nghiệm học tập tốt nhất với các tính năng hiện đại và thân
                            thiện với người dùng.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card animate-on-scroll">
                            <div className="feature-icon">🎯</div>
                            <h3 className="feature-title">Học tập thông minh</h3>
                            <p className="feature-description">Hệ thống AI phân tích khả năng và đề xuất lộ trình học tập phù hợp với từng cá
                                nhân.</p>
                        </div>
                        <div className="feature-card animate-on-scroll">
                            <div className="feature-icon">📊</div>
                            <h3 className="feature-title">Theo dõi tiến độ</h3>
                            <p className="feature-description">Báo cáo chi tiết về kết quả học tập, điểm mạnh và điểm cần cải thiện.</p>
                        </div>
                        <div className="feature-card animate-on-scroll">
                            <div className="feature-icon">🏅</div>
                            <h3 className="feature-title">Hệ thống thành tích</h3>
                            <p className="feature-description">Kiếm điểm, huy hiệu và xếp hạng để tạo động lực học tập lâu dài.</p>
                        </div>
                        <div className="feature-card animate-on-scroll">
                            <div className="feature-icon">📱</div>
                            <h3 className="feature-title">Đa nền tảng</h3>
                            <p className="feature-description">Học mọi lúc, mọi nơi trên điện thoại, máy tính bảng hoặc máy tính.</p>
                        </div>
                        <div className="feature-card animate-on-scroll">
                            <div className="feature-icon">👨‍🏫</div>
                            <h3 className="feature-title">Chuyên gia hướng dẫn</h3>
                            <p className="feature-description">Đội ngũ giảng viên kinh nghiệm sẵn sàng hỗ trợ và giải đáp thắc mắc.</p>
                        </div>
                        <div className="feature-card animate-on-scroll">
                            <div className="feature-icon">🔄</div>
                            <h3 className="feature-title">Cập nhật liên tục</h3>
                            <p className="feature-description">Nội dung được cập nhật thường xuyên theo xu hướng và yêu cầu thị trường.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            {/* <section className="categories" id="categories">
                <div className="categories-container">
                    <div className="section-header animate-on-scroll">
                        <div className="section-badge">📚 Danh mục học tập</div>
                        <h2 className="section-title">Khám phá các chủ đề</h2>
                        <p className="section-subtitle">Từ công nghệ thông tin đến kinh doanh, chúng tôi có đầy đủ các chủ đề để bạn lựa
                            chọn.</p>
                    </div>
                    <div className="categories-grid">
                        <div className="category-card animate-on-scroll">
                            <div className="category-icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="40" />
                            </div>
                            <h3 className="category-title">HTML</h3>
                            <p className="category-count">10+ câu hỏi</p>
                            <p className="category-description">Các câu hỏi liên quan tới HTML</p>
                        </div>
                        <div className="category-card animate-on-scroll">
                            <div className="category-icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="40" />
                            </div>
                            <h3 className="category-title">CSS</h3>
                            <p className="category-count">10+ câu hỏi</p>
                            <p className="category-description">Các câu hỏi liên quan tới CSS</p>
                        </div>
                        <div className="category-card animate-on-scroll">
                            <div className="category-icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" width="40" />
                            </div>
                            <h3 className="category-title">Javascript</h3>
                            <p className="category-count">10+ câu hỏi</p>
                            <p className="category-description">Các câu hỏi liên quan tới Javascript</p>
                        </div>
                        <div className="category-card animate-on-scroll">
                            <div className="category-icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" />
                            </div>
                            <h3 className="category-title">React</h3>
                            <p className="category-count">10+ câu hỏi</p>
                            <p className="category-description">Các câu hỏi liên quan tới React</p>
                        </div>
                    </div>
                </div>
            </section> */}

            <ListTopic/>


            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-container">
                    <h2 className="cta-title">Sẵn sàng bắt đầu hành trình học tập?</h2>
                    <p className="cta-subtitle">Tham gia cùng hàng nghìn học viên đã tin tưởng và lựa chọn QuizMasterVN</p>
                    <div className="cta-buttons">
                        <a href="/register" className="btn-primary">Đăng ký miễn phí</a>
                        <a href="/" className="btn-secondary">Tìm hiểu thêm</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;