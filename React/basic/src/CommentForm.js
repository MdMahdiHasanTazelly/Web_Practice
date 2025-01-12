import { useState } from "react";

function CommentForm() {
    let [formData, setFormData] = useState({username: "", remark: "", rating: 0});

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);

        setFormData( ()=> ({username: "", remark: "", rating: 0}));
    }


    return ( 
        <div>
            <br/><hr/><br/>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="username">Username: </label>
                <input type="text" 
                name="username" 
                id="username"
                onChange={handleChange}
                />
                <br/>

                <textarea name="remark"
                placeholder="Write a comment."
                onChange={handleChange}
                />
                <br/>

                <label htmlFor="rating">Rating: </label>
                <input type="number" 
                name="rating" 
                id="rating"
                min={0} max={5}
                onChange={handleChange}
                />
                <br/>

                <button>Submit</button>

            </form>
            <br/><hr/><br/>
        </div>
     );
}

export default CommentForm;