import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoInput from './todo-input';
import ToDoItem from './todo-item';
function TodoList() {
    const todos = useSelector(state => state)
    return (
        <div>
            <TodoInput />
            <hr />
            <h5>Todo List</h5>
            <div>
                {todos.map(todo => {
                    return <ToDoItem key={todo.id} todo={todo} />
                })}
            </div>
        </div>
    )
}

export default TodoList