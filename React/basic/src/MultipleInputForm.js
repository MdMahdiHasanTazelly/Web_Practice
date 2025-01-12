import { useState } from "react";

function MultipleInputForm() {
    let[form, setForm] = useState({username: "", password: ""});

    function formHandler(event){
        let fieldName = event.target.name;
        let newVal = event.target.value;

        setForm( (currData)=>{
            // currData[fieldName]= newVal;
            return{
                [fieldName]: newVal,
                ...currData
            }
        });
        
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(`${form.username} --------- ${form.password}`);
    }
    return ( 
        <div>
            <br/> <br/> <br/>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username: </label>
                <input id="username"
                    value={form.username} 
                    type="text" 
                    name="username"
                    onChange={ formHandler }
                />

                <br/>

                <label htmlFor="pass">Password: </label>
                <input id="pass" 
                    value={form.password} 
                    type="text" 
                    onChange={ formHandler }
                    name="password"
                />

                <br/>
                
                <button >Submit</button>

            </form>

        </div>
     );
}

export default MultipleInputForm;