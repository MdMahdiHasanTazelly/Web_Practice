//async function returns a promise by default
let greet = async ()=>{
    return "hi there!";
}

greet()
.then( (result)=>{
    console.log(result);
})
.catch( (err)=>{
    console.log(err);
})




function getNum(){
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            let num = Math.floor(Math.random()*10+1);
            console.log(num);
            resolve();
        }, 1000);
    });
}
//Using "await" will be resulting the execution of ONE AFTER ANOTHER
async function printNum() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}


