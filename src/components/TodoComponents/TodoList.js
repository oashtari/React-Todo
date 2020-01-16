// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

import './Todo.css';



const TodoList = props => {

    return (
        <div className="todo_list">
            {props.todos.map(item => (
                < Todo
                    key={item.id}
                    item={item}
                    taskComplete={props.taskComplete}
                />
            ))}
            <button className='clear_button' onClick={props.clearTodos}>
                Clear Complete Todos
            </button>
        </div>
    )
}

export default TodoList