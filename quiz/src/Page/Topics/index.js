import "./Topic.scss"
import ListTopic from "./listTopic";

function Topics() {
    return (
        <div className="container">
            <hr />
            {/* <h2 className="topic__title">Câu hỏi chủ đề</h2> */}
            <ListTopic />
        </div>
    )
}

export default Topics;