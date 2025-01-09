//state functions work asynchronouly
//to make the state functions work one after another 
import { useState } from "react";

function genRandom(){
    console.log(`Random function is called.`);
    return Math.random();
}

function CallbackInStateFunc() {

    //by passing as a referenece [gerRandom], the function will be called at the initialization time only
    //by executing genRandom function [genRandom()], the function will be called on every rendering
    let [count, setCount] = useState( genRandom );

    console.log(count);

    function incCount(){

        //counts needs to be increased by 2 
        //but as setCount works asynchrounusly, it increase count by 1
        // setCount(count+1);
        // setCount(count+1);


        //to make state function work one after another
        //now the count will be increased by 2
        setCount( (count)=> count+1 );
        setCount( (count)=> count+1 );
    }

    return ( 
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incCount}>Increase</button>
        </div>
     );
}

export default CallbackInStateFunc;