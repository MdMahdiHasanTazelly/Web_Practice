//inner func can access outer func's properties
//but the outer func can't access inner func's properties
//that is lexical scope
function outer(){

    let x = 10;
    function inner(){
        let y = 20;
        //inner func can access outer func
        console.log(`x=${x}`);  
    }
    inner();
    //console.log(`Y=${y}`);
}

outer();