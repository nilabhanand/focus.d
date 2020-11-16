import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function TodoTab() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    function toggleComplete(id) {
        setTodos(
            todos.map( todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="todo">
            <div className="todo-list-container">
            <Typography style={{ padding: 16 }} variant="h1">
                ToDo
            </Typography>
            <TodoForm addTodo={addTodo} />
            <TodoList 
                todos={todos} 
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}     
            />
            </div>
        </div>

    );
}

export default TodoTab;