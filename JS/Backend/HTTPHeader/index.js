const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`) );
//parse url encoded data for post request
app.use(express.urlencoded({extended: true}));
//parse JSON data
app.use(express.json());

app.get("/checkGet", (req, res)=>{
    let {name, pass} = req.query;
    console.log(`Name: ${name}------- Password ${pass}`);
    res.json({username: name, password: pass});
});

app.post("/checkPost", (req, res)=>{
    let {name, pass} = req.body;
    console.log(`Name: ${name}------- Password ${pass}`);
    res.json({username: name, password: pass});
});