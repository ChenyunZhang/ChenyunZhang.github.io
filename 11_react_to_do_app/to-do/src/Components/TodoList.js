import React, { useState } from 'react'
import TodoForm from "./TodoForm"
import Todo from "./Todo"

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) return
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }
    const completeTodo = id => {
        let updateTodos = todos.map(todo=>{
            if(todo.id === id) todo.isComplete = !todo.isComplete;
            return todo
        })
        setTodos=updateTodos
    }
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    }
    const updateTodo = (id,val) => {
        if (!val.text || /^\s*$/.test(val.text)) return
        setTodos(prev => prev.map(item => (item.id === id ? val : item)));
    }

    return (
        <div className="todo-app">
        <h1>My todo list</h1>
            <TodoForm 
            onSubmit={addTodo} 
            />
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
