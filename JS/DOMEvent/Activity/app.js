let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    console.log(`red->${red}------green->${green}-------blue->${blue}`);

    let box = document.querySelector(".container");

    console.dir(box);
    //setting the color of that container
    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    let h2 = document.querySelector("h2");
    h2.style.color = `rgb(${red}, ${green}, ${blue})`;
});