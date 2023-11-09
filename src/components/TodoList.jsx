import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => {                // video 98 (modularizar parte 1)
    return(
        <div className="bg-white [&>article]:p-4 rounded-t-md mt-8 ">

          {/* video 99 (modularizar parte 2)*/}

          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>  
          ))}       
            
        </div>
    );
 };

 export default TodoList;