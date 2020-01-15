import React from 'react';

const Todo = props => {
    return (
        <div
            onClick={event => props.taskComplete(props.item.id)}
            className={`todo${props.item.complete ? ' complete' : ''}`}
        >
            <p>{props.item.task}</p>
        </div >

    )
}

export default Todo;