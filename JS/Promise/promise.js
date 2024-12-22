function saveToDB(data){
    return new Promise( (resolve, reject)=>{
        let interentSpeed = Math.floor(Math.random()*11);
        if(interentSpeed > 4){
            resolve("data saved");
        }else{
            reject("weak connection");
        }
        
    });
}

//promise chaining
saveToDB("data1")
.then( (result)=>{
    console.log(`data1 saved ${result}`);
    return saveToDB("data2");  
})
.then( (result)=>{
    console.log(`data2 is saved ${ result}`);
    return saveToDB(`data3`);
})
.then( (result)=>{
    console.log(`data3 is saved ${result}`);
})
.catch( (error)=>{
    console.log(`Promise is rejected ${error}`);
});

