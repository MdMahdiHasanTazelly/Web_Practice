let  mainImg = document.getElementById("mainImg");
console.dir(mainImg);

//returns a collection(array) of elements
let tagElem = document.getElementsByTagName("p");
console.dir(tagElem);

//returns the first element
//select by css selector
let queryElem = document.querySelector(".box a");
console.dir(queryElem);


//returns all the elements [as node list]
let allElem = document.querySelectorAll(".box a");
console.dir(allElem);


let para = document.querySelector("p");
//shows only the visible area on screen
console.log(para.innerText);
//shows also the hidden part of the web page
console.log(para.textContent);
//shows all the html mark-up of that element
console.log(para.innerHTML);


//--------------------MANIPULATING ATTRIBUTES----------------
let oldImg = document.querySelectorAll(".images img")[2];
console.dir(oldImg);
console.log( oldImg.getAttribute("src") );
oldImg.setAttribute("src", "assets/creation_1.png");


//---------------------------styling----------------------
//sets as inline style
let h1 = document.querySelector("h1");
h1.style.backgroundColor="yellow";



//--------------------manipulating class list------------------
let heading = document.querySelector('h1');
console.log(heading.classList);
//adds a class
heading.classList.add("green", "decor", "abc");
//checks whether a class exist or not
console.log(heading.classList.contains('abc'));
//removes a class
heading.classList.remove("abc");


//-------------------Navigation on page-----------------------

let h4 = document.querySelector(".box h4");
//returns parent element
console.log(h4.parentElement);

let box = document.querySelector(".box");
//returns the collection of children elements
console.log(box.children);

let spiderImg = document.getElementById("mainImg");
console.dir(spiderImg);
//returns the next element
console.dir(spiderImg.nextElementSibling);
//returns the previous element
console.dir(spiderImg.previousElementSibling);


//----------------------Adding elements on page-------------
//after creating an element --> that should be inserted into the page
let newP = document.createElement("p");
newP.innerText = "Hello World!"
console.dir(newP);

let body = document.querySelector("body");
//append element at the end of the body
body.appendChild(newP);
//string can be appended
newP.append("Appended text");

let btn = document.createElement("button");
btn.innerText = "Button";
let navBox = document.querySelector(".box");
// add at the beginning 
navBox.prepend(btn);


let btn2 = document.createElement("button");
btn2.innerText = "2nd Button";

let p = document.querySelector("p");
//it has 4 options
//beforebegin, afterbegin, beforeend, afterend
//for details go mdn web docs
p.insertAdjacentElement("beforebegin", btn2);


//---------------------Removing elements from page----------------
let btn3 = document.createElement("button");
navBox.insertAdjacentElement("beforeend", btn3);
btn3.innerText = "Button 3";
//removes child element
navBox.removeChild(btn3);
//removes element
navBox.remove();

