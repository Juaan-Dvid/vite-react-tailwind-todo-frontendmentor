import { useState } from "react";

const TodoCreate = ({createTodo}) => {                  // video 98 (modularizar parte 1)
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {    
      e.preventDefault();

      if(!title.trim()) {                               // video 101 (formulario controlado)
        return setTitle("");
      }
      
      createTodo(title);
      setTitle("");      
    };


    return(
        <form 
          onSubmit={handleSubmitAddTodo} 
          className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8 dark:bg-gray-800">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input 
            type="text" 
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none dark:bg-gray-800"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
    );
};

export default TodoCreate;