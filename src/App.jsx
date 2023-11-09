import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

//const initialStateTodos = [
//  { id: 1, title: "Complete online javascript course", completed: true },
//  { id: 2, title: "Go to the gym", completed: false},
//  { id: 3, title: "pick up groceries", completed: false},
//  { id: 4, title: "Go to the gym", completed: false},
//  { id: 5, title: "Complete todo app on Frontend Mentor", completed: false},

//]

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),                                      // video 101 (formulario controlado)
      completed: false,
    }
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {                                  // video 103 (update & remove)
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const updateTodo = (id) => {                                   // video 103 (update & remove)
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {                                // video 104 (computed & clear completed)
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {   // video 105 (filtros)
    switch (filter) {
      case "all" :
        return todos;
      case "active" : 
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;      
    }
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen 
    dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')]
    md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">  
      
      <Header /> 

      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
        
        <TodoCreate createTodo={createTodo} />  {/*// video 98 (modularizar parte 1) */} 

        
        <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>   {/*// video 98 (modularizar parte 1) */} 

        
        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>  {/*// video 98 (modularizar parte 1) */} 

        
        <TodoFilter changeFilter={changeFilter} filter={filter} />  {/*// video 98 (modularizar parte 1) */} 
            
      </main>   

      

      <footer className="text-center mt-8 dark:text-gray-400">Drag and drop to reorder list</footer>    
    </div>
  );  
};
 

export default App;
