//******************Objects as a state variable*******************

//countObj.countTwo +=1; setCountObj(countObj); -----> this will increase only the value of countTwo
// not the actual "countObj" object, so it'll not work as expected

//Instead setCountObj({...countObj, countOne: countObj.countOne+1}); this will destructure the actual object
//and after updating, a new copy of that object will be sent


import {useState} from 'react';

function ObjectAsStateVar() {
    let [countObj, setCountObj] = useState({countOne: 0, countTwo: 0});

    //incrementing countOne of countObj
    function incOne(){
        setCountObj({...countObj, countOne: countObj.countOne+1});
    }

    //incrementing countTwo of countObj
    function incTwo(){
        setCountObj(countObj.countTwo+1);
    }

    return ( 
        <div>
            <hr/>
             <h2>Count for One = {countObj.countOne}</h2>
             <button onClick={incOne}>Increase</button>

             <h2>Count for Two = {countObj.countTwo}</h2>
             <button onClick={incTwo}>Increase</button>
             <hr/>
        </div>
     );
}

export default ObjectAsStateVar;