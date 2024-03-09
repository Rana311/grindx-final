import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm.jsx"
import { TodoList } from "./TodoList.jsx"

function Todo(){
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="Todo partition">
      <header>
      <h1 className="header">
      TODO
      </h1>
      </header>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Tasks</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}
export default Todo;


// //backend  
// import { useEffect, useState } from "react";
// import { NewTodoForm } from "./NewTodoForm.jsx";
// import { TodoList } from "./TodoList.jsx";
// import axios from "axios";

// function Todo() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     // Fetch todos from the backend when the component mounts
//     axios.get("http://localhost:5000/api/todos")
//       .then(response => setTodos(response.data))
//       .catch(error => console.error("Error fetching todos:", error));
//   }, []); // Empty dependency array ensures this effect runs once on mount

//   function addTodo(title) {
//     // Create a new todo on the backend and update the state
//     axios.post("http://localhost:5000/api/todos", { title })
//       .then(response => setTodos(prevTodos => [...prevTodos, response.data]))
//       .catch(error => console.error("Error adding todo:", error));
//   }

//   function toggleTodo(id, completed) {
//     // Update the completion status of a todo on the backend and update the state
//     axios.put(`http://localhost:5000/api/todos/${id}`, { completed })
//       .then(response => setTodos(prevTodos => prevTodos.map(todo => (todo._id === id ? response.data : todo))))
//       .catch(error => console.error("Error updating todo:", error));
//   }

//   function deleteTodo(id) {
//     // Delete a todo on the backend and update the state
//     axios.delete(`http://localhost:5000/api/todos/${id}`)
//       .then(() => setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id)))
//       .catch(error => console.error("Error deleting todo:", error));
//   }

//   return (
//     <div className="Todo partition">
//       <header>
//         <h1 className="header">TODO</h1>
//       </header>
//       <NewTodoForm onSubmit={addTodo} />
//       <h1 className="header">Tasks</h1>
//       <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
//     </div>
//   );
// }

// export default Todo;
