//setCount works asynchronously
//state variable updates at re-rendering

import {useState} from 'react';

function WorkingRerender() {
    let [count, setCount] = useState(0);
    console.log(`Count = ${count}`);

    function incCount(){
        setCount(count+1);
        console.log(count);
    }
    
    return ( 
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incCount}>Increase</button>
        </div>
     );
}

export default WorkingRerender;