import React from 'react'

function Todo(props) {
    return (
        <div className="App_Todo">
            <li>{props.text}</li>
        </div>
    )
}

export default Todo
