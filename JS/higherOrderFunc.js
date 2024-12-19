// a function which can take function as parameter or return a function

function multiple(greet, n){
    for(let i=1; i<=n; i++){
        greet();
    }
}
function greet(){
    console.log('Hello');
}
// multiple(greet, 4);


function factoryFunc(req){
    if(req=="even"){
        // return (n)=> (n%2===0) ;
        let even = function(n){
            console.log( (n%2==0) );
        }
        return even;
    }
    if(req=='odd'){
        let odd = function(n){
            console.log( !(n%2==0) );
        }
        return odd;
    }
}

let fun = factoryFunc("odd");
console.log(fun);
fun(5);