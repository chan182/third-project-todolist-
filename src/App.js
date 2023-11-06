import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState(initialState);

    return (
        <div className="wrap">
            <Header></Header>
            <main>
                <Input setTodos={setTodos}></Input>
                {/* // // */}
                {/* // 해야할 것 리스트// */}
                <TodoList
                    isActive={true}
                    todos={todos}
                    setTodos={setTodos}
                ></TodoList>
                {/* // // */}
                {/* //완료된 것 리스트// */}
                <TodoList
                    isActive={false}
                    todos={todos}
                    setTodos={setTodos}
                ></TodoList>
            </main>
            <footer />
        </div>
    );
}

export default App;

const initialState = [
    {
        title: "제목1",
        contents: "내용1",
        isDone: false,
        id: uuidv4(),
    },
    {
        title: "제목1",
        contents: "내용1",
        isDone: false,
        id: uuidv4(),
    },
    {
        title: "제목1",
        contents: "내용1",
        isDone: false,
        id: uuidv4(),
    },
];
