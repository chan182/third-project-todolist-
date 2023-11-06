import React from "react";
import Todo from "./Todo";
const TodoList = ({ isActive, todos, setTodos }) => {
    return (
        <div>
            <h4 className="TodoList-header">
                {isActive ? "Working.." : "Done..!"}
            </h4>
            {todos
                .filter((item) => item.isDone === !isActive)
                .map((item) => {
                    return (
                        <Todo
                            item={item}
                            isActive={isActive}
                            setTodos={setTodos}
                        ></Todo>
                    );
                })}
        </div>
    );
};

export default TodoList;
