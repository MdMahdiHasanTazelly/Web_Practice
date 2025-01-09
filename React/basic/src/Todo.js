import { use, useState } from "react";

function Todo() {
    let [todo, setTodo] = useState(["demo-task"]);
    let [task, setTask] = useState("");

    function updateTask(event){
        setTask( ()=> event.target.value );
    }
    function addTodo(){
        setTodo([...todo, task]);
        setTask( ()=> "");
    }
    
    return ( 
        <div>
            <input placeholder="Enter task" value={task} onChange={updateTask}/>
            <button onClick={addTodo}>Add</button>
            <hr/>

            <h3>Task List</h3>
            <ul>
                {todo.map( (task)=> <li>{task}</li>)}
            </ul>
        </div>
     );
}

export default Todo;