import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Input = ({ setTodos }) => {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    //
    //
    const handleSubmitClick = (e) => {
        e.preventDefault();

        const newTodo = {
            title,
            contents,
            isDone: false,
            id: uuidv4(),
        };
        setTodos((prev) => [...prev, newTodo]);
    };
    //
    //
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentsChange = (e) => {
        setContents(e.target.value);
    };
    //
    //
    return (
        <form onSubmit={handleSubmitClick} className="input_area">
            <div>
                제목{" "}
                <input value={title} onChange={handleTitleChange} type="text" />
                내용{" "}
                <input
                    value={contents}
                    onChange={handleContentsChange}
                    type="text"
                />
            </div>
            <button>추가하기</button>
        </form>
    );
};

export default Input;
