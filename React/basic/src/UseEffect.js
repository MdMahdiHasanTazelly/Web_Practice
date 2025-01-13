//useEffect works in 3 ways, syntax
// useEffect( callback function, dependencies as array ) 
// useEffect( ()=>() , [stateVariables])
// Dependency as [] ---> callback funciton executes only the time of rendering [Only 1 time]
// Dependency as [var1, var2] ---> callback funciton executes at the rendering of var1 & var2
// No dependency ---> callback executes for every rendering



import { use, useEffect, useState } from "react";

function UseEffect() {
    let [countX, setCountX] = useState(0);
    function countXHandler(){
        setCountX( ()=> countX+1 );
    }
    useEffect( ()=>{
        console.log(`Use effect invoked!`);
    }, [countX]);


    return ( 
        <div>

            <br/><hr/><br/>
            <h3>Count X = {countX}</h3>
            <button onClick={countXHandler}>+1</button>
            <br/><hr/><br/>

        </div>
     );
}

export default UseEffect;