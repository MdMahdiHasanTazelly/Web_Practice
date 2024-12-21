//2 ways to track DOM events. 1-inline  2-event listeners
// by inline events, the html gets bulky---> CONS: multiple events can't be added

//Through event listeners multiple events can be added


let btns = document.querySelectorAll("button");

console.dir(btns);

let greet = function(){
    alert("Hello!");
}

function mouseEnter(){
    console.log("Mouse has entered");
}

for(btn of btns){
    // btn.onclick = greet;
    // btn.onmouseenter = mouseEnter;

    btn.addEventListener("click", greet);

    btn.addEventListener("mouseenter", mouseEnter);
}


//-------------------this kw in DOM-----------------
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor(){
    //this represents the calling object (h3, p)
    //NOTE: arrow func dosent't have own this, rather inherits from surrounding lexial scope
    this.style.color = "red";
}

h3.addEventListener("click", changeColor);

p.addEventListener("click", changeColor);


//--------------------keyboard event-----------

let inp = document.querySelector("input");
inp.addEventListener("keypress", function(e){
    console.log("Key--> ",e.key);
    console.log("Code--> ",e.code);
});




