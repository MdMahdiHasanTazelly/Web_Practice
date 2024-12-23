const express = require('express');
const app = express();

const port = 8080;

app.listen(port, ()=> console.log(`Listening on port ${port}`) );

app.get("/apple", (req, res)=>{
    res.json({color: "green", qty: 3});
    //res.send("hello");
});


//query parameter
//GET /query?color=Green&qty=3
app.get("/query",(req, res)=>{
    let {color, qty} = req.query;

    res.json({color: `${color}`, quantity: `${qty}`});
});

app.get("/apple/search", (req, res)=>{
    let {a, b} = req.query;
    res.json({First: a, Sec: b});
})



//path parameters
app.get("/apple/:name", (req, res)=>{
    let {name} = req.params;

    res.json({name: `${name}`});
});