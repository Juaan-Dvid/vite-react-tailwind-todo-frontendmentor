import { useState } from "react";

const TodoCreate = ({ createTodo }) => {                             // video 98 (modularizar parte 1)
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();

        if (!title.trim()) {                                         // video 101 (formulario controlado)
            return setTitle("");
        }

        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 transition-all duration-1000 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;