import { use, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    let [todo, setTodo] = useState([{task: "demo-task", id: uuidv4(), done: false}]);
    let [task, setTask] = useState("");

    function updateTask(event){
        setTask( ()=> event.target.value );
    }
    function addTodo(){
        setTodo([...todo, {task, id: uuidv4() }]);
        setTask( ()=> "");
    }

    function deleteTodo(id){
        let newList = todo.filter( (el)=> el.id!=id );
        setTodo(newList);
    }

    function upperCaseAll(){
        let updatedTodo = todo.map( (el)=> {
            return{
                ...el,
                task: el.task.toUpperCase()
            }
        });
        setTodo(updatedTodo);
    }

    function upperCaseOne(id){

        let updatedTodo = todo.map( (el)=>{
            if(el.id === id){
                return{
                    ...el,
                    task: el.task.toUpperCase()
                };
            }else{
                return el;
            }
        })
        setTodo(updatedTodo);         
        
    }


    function markDoneHandler(id){
        setTodo( todo.map( (el)=>{
            if(el.id === id){
                return{
                    ...el,
                    markDone: true
                }
            }
            return el;
        }));
    }
    
    return ( 
        <div>
            <input placeholder="Enter task" value={task} onChange={updateTask}/>
            <button onClick={addTodo}>Add</button>
            <hr/>

            <h3>Task List</h3>
            <ul>
                {todo.map( (el)=> 
                <li style={el.markDone && {textDecoration: "line-through"}}
                >{el.task} &nbsp;&nbsp;
                    {/* To pass any argument, send using callback such that it dosen't be executed
                    without even CLICKING */}
                    <button onClick={()=> deleteTodo(el.id) }>Delete</button>
                    <button onClick={ ()=> upperCaseOne(el.id) }>Uppercase</button>
                    <button onClick={ ()=> markDoneHandler(el.id) }>Mark Done</button>
                </li>)}
            </ul>
            <button onClick={upperCaseAll}>Uppercase All</button>
        </div>
     );
}

export default Todo;