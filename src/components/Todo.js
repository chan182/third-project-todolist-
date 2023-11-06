import React from "react";

const Todo = ({ item, isActive, setTodos }) => {
    const handleDeleteClick = () => {
        setTodos((prev) => prev.filter((t) => t.id !== item.id));
    };
    const handleSwitchClick = () => {
        setTodos((prev) =>
            prev.map((t) => {
                if (t.id === item.id) {
                    return { ...t, isDone: !t.isDone };
                } else {
                    return t;
                }
            })
        );
    };
    return (
        <div className="content-area">
            {" "}
            <div>
                <h5>{item.title}</h5>
                <p>{item.contents}</p>
                <button onClick={handleSwitchClick}>
                    {isActive ? "완료" : "취소"}
                </button>
                <button onClick={handleDeleteClick}>삭제</button>
            </div>
        </div>
    );
};

export default Todo;
