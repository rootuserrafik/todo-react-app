import React, {useState , useEffect} from 'react';
import db from "./firebase";
import "./MainBody.css";
import Todo from './Todo';

function MainBody() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState ('');
    
    // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
    useEffect(() =>{
        // this code here... fires when the mainbody.js loads
        db.collection('todos').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => doc.data().todo));
        })
    }, []);

    // https://youtu.be/VqgTr-nd7Cg?list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP&t=6652

    const AddTodo = (event) => {
        // this will fire off when we click the button
        event.preventDefault(); //will stop the REFERSH
        console.log('🦅', 'I am working...!');
        setTodos ([...todos, input]);
        setInput (''); //clear up the input after hit the submit button
    }
    
    
    return (
        <div className="App_MainBody">
            <h1>Hello! This is  just for testing TODO APP...</h1>
            <form>                
                <input value={input} onChange={event => setInput(event.target.value)} type="text" placeholder="Type Text"/>
                <button disabled={!input} type="submit" onClick={AddTodo}>Add Todo 🛩</button>
            </form>

            
            <ul className="todo__text__list">
                {
                    todos.map(todo => (
                        <Todo text={todo} />
                        // <li>{todo}</li>
                    )
                )}
            </ul>


        </div>
    )
}

export default MainBody

