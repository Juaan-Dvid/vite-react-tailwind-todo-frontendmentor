import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({todo, removeTodo, updateTodo }) => { 
    const {id, title, completed} = todo;          {/*video 100 (use state todos)*/}

    return(
        <article className="flex gap-4 border-b-gray-400 border-b dark:bg-gray-800">            
            <button 
                className={`h-5 w-5 rounded-full border-2 flex-none ${completed ? " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" : "inline-block "}`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>
            <p className={`text-gray-600 grow dark:text-gray-400 ${completed && "line-through"}`}>
                {title}
            </p>
            <button 
                className="flex-none"
                onClick={() => removeTodo(id)}
            >
              <IconCross/>
            </button>
        </article>
    );
 };

 export default TodoItem;

 