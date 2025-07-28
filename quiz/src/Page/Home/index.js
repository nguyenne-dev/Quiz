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
            <section class="hero" id="home">
                <div class="hero-container">
                    <div class="hero-content">
                        <div class="hero-badge">🎯 Nền tảng học tập #1 Việt Nam</div>
                        <h1 class="hero-title">Học tập thông minh với QuizMasterVN</h1>
                        <p class="hero-subtitle">Nâng cao kiến thức của bạn với hàng nghìn câu hỏi trắc nghiệm chất lượng cao, được
                            thiết kế bởi các chuyên gia hàng đầu.</p>
                        <div class="hero-buttons">
                            <Link to="/topics" class="btn-primary">Khám phá ngay</Link>
                            <Link to="/" class="btn-secondary">Xem demo</Link>
                        </div>
                    </div>
                    <div class="hero-visual">
                        <img src={bgHero} alt="Hero" class="hero-image" />
                    </div>
                </div>
            </section>

            {/*  Stats Section  */}
            <section class="stats">
                <div class="stats-container">
                    <div class="stats-grid">
                        <div class="stat-item animate-on-scroll">
                            <div class="stat-icon">👥</div>
                            <div class="stat-number">3,000+</div>
                            <div class="stat-label">Người dùng đang sử dụng</div>
                        </div>
                        <div class="stat-item animate-on-scroll">
                            <div class="stat-icon">📚</div>
                            <div class="stat-number">1,000+</div>
                            <div class="stat-label">Câu hỏi chất lượng</div>
                        </div>
                        <div class="stat-item animate-on-scroll">
                            <div class="stat-icon">🏆</div>
                            <div class="stat-number">10+</div>
                            <div class="stat-label">Chủ đề đa dạng</div>
                        </div>
                        <div class="stat-item animate-on-scroll">
                            <div class="stat-icon">⭐</div>
                            <div class="stat-number">4.9/5</div>
                            <div class="stat-label">Đánh giá trung bình</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section class="features" id="features">
                <div class="features-container">
                    <div class="section-header animate-on-scroll">
                        <div class="section-badge">✨ Tính năng nổi bật</div>
                        <h2 class="section-title">Tại sao chọn QuizMasterVN?</h2>
                        <p class="section-subtitle">Chúng tôi cung cấp trải nghiệm học tập tốt nhất với các tính năng hiện đại và thân
                            thiện với người dùng.</p>
                    </div>
                    <div class="features-grid">
                        <div class="feature-card animate-on-scroll">
                            <div class="feature-icon">🎯</div>
                            <h3 class="feature-title">Học tập thông minh</h3>
                            <p class="feature-description">Hệ thống AI phân tích khả năng và đề xuất lộ trình học tập phù hợp với từng cá
                                nhân.</p>
                        </div>
                        <div class="feature-card animate-on-scroll">
                            <div class="feature-icon">📊</div>
                            <h3 class="feature-title">Theo dõi tiến độ</h3>
                            <p class="feature-description">Báo cáo chi tiết về kết quả học tập, điểm mạnh và điểm cần cải thiện.</p>
                        </div>
                        <div class="feature-card animate-on-scroll">
                            <div class="feature-icon">🏅</div>
                            <h3 class="feature-title">Hệ thống thành tích</h3>
                            <p class="feature-description">Kiếm điểm, huy hiệu và xếp hạng để tạo động lực học tập lâu dài.</p>
                        </div>
                        <div class="feature-card animate-on-scroll">
                            <div class="feature-icon">📱</div>
                            <h3 class="feature-title">Đa nền tảng</h3>
                            <p class="feature-description">Học mọi lúc, mọi nơi trên điện thoại, máy tính bảng hoặc máy tính.</p>
                        </div>
                        <div class="feature-card animate-on-scroll">
                            <div class="feature-icon">👨‍🏫</div>
                            <h3 class="feature-title">Chuyên gia hướng dẫn</h3>
                            <p class="feature-description">Đội ngũ giảng viên kinh nghiệm sẵn sàng hỗ trợ và giải đáp thắc mắc.</p>
                        </div>
                        <div class="feature-card animate-on-scroll">
                            <div class="feature-icon">🔄</div>
                            <h3 class="feature-title">Cập nhật liên tục</h3>
                            <p class="feature-description">Nội dung được cập nhật thường xuyên theo xu hướng và yêu cầu thị trường.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            {/* <section class="categories" id="categories">
                <div class="categories-container">
                    <div class="section-header animate-on-scroll">
                        <div class="section-badge">📚 Danh mục học tập</div>
                        <h2 class="section-title">Khám phá các chủ đề</h2>
                        <p class="section-subtitle">Từ công nghệ thông tin đến kinh doanh, chúng tôi có đầy đủ các chủ đề để bạn lựa
                            chọn.</p>
                    </div>
                    <div class="categories-grid">
                        <div class="category-card animate-on-scroll">
                            <div class="category-icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="40" />
                            </div>
                            <h3 class="category-title">HTML</h3>
                            <p class="category-count">10+ câu hỏi</p>
                            <p class="category-description">Các câu hỏi liên quan tới HTML</p>
                        </div>
                        <div class="category-card animate-on-scroll">
                            <div class="category-icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="40" />
                            </div>
                            <h3 class="category-title">CSS</h3>
                            <p class="category-count">10+ câu hỏi</p>
                            <p class="category-description">Các câu hỏi liên quan tới CSS</p>
                        </div>
                        <div class="category-card animate-on-scroll">
                            <div class="category-icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" width="40" />
                            </div>
                            <h3 class="category-title">Javascript</h3>
                            <p class="category-count">10+ câu hỏi</p>
                            <p class="category-description">Các câu hỏi liên quan tới Javascript</p>
                        </div>
                        <div class="category-card animate-on-scroll">
                            <div class="category-icon">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" />
                            </div>
                            <h3 class="category-title">React</h3>
                            <p class="category-count">10+ câu hỏi</p>
                            <p class="category-description">Các câu hỏi liên quan tới React</p>
                        </div>
                    </div>
                </div>
            </section> */}

            <ListTopic/>


            {/* CTA Section */}
            <section class="cta-section">
                <div class="cta-container">
                    <h2 class="cta-title">Sẵn sàng bắt đầu hành trình học tập?</h2>
                    <p class="cta-subtitle">Tham gia cùng hàng nghìn học viên đã tin tưởng và lựa chọn QuizMasterVN</p>
                    <div class="cta-buttons">
                        <a href="/register" class="btn-primary">Đăng ký miễn phí</a>
                        <a href="/" class="btn-secondary">Tìm hiểu thêm</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;