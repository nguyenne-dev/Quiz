import { useEffect, useState } from "react";
import Modal from 'react-modal'
import { getTopic } from "../../Services/Topics";
import { useNavigate } from "react-router-dom";
import "./Topic.scss"


Modal.setAppElement("#root");

function ListTopic() {
    const [showModal, setShowModal] = useState(false);
    const [topics, setTopics] = useState([]);
    const [item, setItem] = useState(null);
    const navigate = useNavigate();
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
        },
    };

    const imageMap = {
        HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        JS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    };


    const openModal = (item) => {
        setItem(item);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }


    useEffect(() => {
        const fetchApi = async () => {
            const reult = await getTopic();
            setTopics(reult);
        }
        fetchApi();
    }, [])

    const slugify = (str) =>
        str.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");

    const handleClick = (item) => {
        navigate(`/question/${slugify(item.name)}?id=${item.id}`);
        closeModal();
    }
    return (
        <>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal__content">
                    <div className="modal__title">Bài tập về chủ đề: {item?.name}</div>
                    <span>Xác nhận làm bài tập về chủ đề {item?.name} gồm 10 câu hỏi? Xác nhận làm bài.</span>
                    <hr />
                </div>
                <div className="modal__button">
                    <button onClick={closeModal} className="modal__close">Hủy</button>
                    <button onClick={() => handleClick(item)} className="modal__ok">Làm</button>
                </div>
            </Modal>

            <section class="categories" id="categories" style={{ padding: '20px 0', background: 'white' }}>
                <div class="categories-container">
                    <div class="section-header animate-on-scroll">
                        <h2 class="section-title">Khám phá các chủ đề</h2>
                        <p class="section-subtitle">Từ công nghệ thông tin đến kinh doanh, chúng tôi có đầy đủ các chủ đề để bạn lựa
                            chọn.</p>
                    </div>
                    <div class="categories-grid">
                        {topics.length === 0 ? (
                            <p>Đang tải dữ liệu</p>
                        ) : (
                            topics.map(item => (
                                <div class="category-card animate-on-scroll" key={item.id} onClick={() => openModal(item)}>
                                    <div class="category-icon">
                                        <img
                                            src={imageMap[item.name]}
                                            alt={item.name}
                                            width="40"
                                        />
                                    </div>
                                    <h3 class="category-title">
                                        {item.name}
                                    </h3>
                                    <p class="category-count">10+ câu hỏi</p>
                                    <p class="category-description">Các câu hỏi liên quan tới {item.name}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ListTopic;