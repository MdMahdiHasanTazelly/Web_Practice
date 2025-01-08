//Clouser: a feature where inner function has access to the outer functions variable
//NOTE: and the inner function canbe used seperately
function outer(){
    let a = 10;

    function inner(){
        let b = 20;
        return a+b;
    }
    return inner;
}

let innerFn = outer();
console.log(innerFn());