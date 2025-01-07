import express from "express";
import session from "express-session";
const app = express();
const PORT=8080;

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));

app.use(session({
    secret: "secret-code",
    //If session info dosent get cahnge, session will not be resaved
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7*24*60*60*60*1000,
        maxAge: 7*24*60*60*60*1000,
        httpOnly: true
    }
}));

app.get("/test", (req, res)=>{
    
    res.send(`Test successfull!`);
});

app.get("/reqCount", (req, res)=>{
    if( req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }
    res.send(`count increased to ${req.session.count}`);
});

app.get("/register", (req, res)=>{
    const {name} = req.query;
    req.session.name = name;
    res.json(req.session.name);
});

app.get("/greet", (req, res)=>{
    res.send(`Hello ${req.session.name}`);
});