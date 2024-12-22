let h1 = document.querySelector("h1");
console.dir(h1);

// function colorChange(color, delay, nextFunc){
//     setTimeout( ()=>{
//         h1.style.color = color;
//         if(nextFunc) nextFunc();
//     }, delay)
// }
//this nesting is callback hell
// colorChange("red", 1000, ()=>{
//     colorChange('green', 1000, ()=>{
//         colorChange('yellow', 1000, ()=>{
//             colorChange('blue', 1000);
//         })
//     })
// });




//using async await keyword

function colorChange(color, delay){
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            let num = Math.floor(Math.random()*11);
            if(num > 4){
                reject(`Primise rejected!`);
            }
            resolve();
            h1.style.color = color;
        }, delay)
    });
}
async function change(){
   try{
        await colorChange("red", 1000);
        await colorChange("green", 1000);
        await colorChange("blue", 1000);
   }catch(err){
    console.log(err);
   }

   console.log(`Ahed of asynchronous activity`);
}
change();
