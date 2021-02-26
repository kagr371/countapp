import React from 'react';

class TodoList = (props) => {
    return (
    <ul>
        {props.todos.map((todos,i) => (
        <li key={i}>{todos}</li>
        ))}
    </ul>
    );
}

export default TodoList;