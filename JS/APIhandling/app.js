let url = "https://catfact.ninja/fact";

let p = document.querySelector("p");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {

    async function getFact() {
        //FACT 1--->using fetch
        let res = await fetch(url);
        let jsonRes = await res.json();
        console.log(jsonRes.fact);
      
        //FACT 2--->using axios
        //axios transforms JOSN data into readable format automatically
        let res2 = await axios.get(url);
        p.innerText = res2.data.fact;
      }

    getFact()
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
});



// ---------------------------University name based on country--------------------

let inp = document.querySelector('input');
let uniBtn = document.getElementById("uniBtn");
let ul = document.querySelector('ul');

let uniUrl = `http://universities.hipolabs.com/search?name=`;

uniBtn.addEventListener("click", async()=>{
    let uniName = inp.value;    
    let uniData = await axios.get(uniUrl+uniName);

    if(uniData){
        showData(uniData.data);
    }else{
        console.log(`Invalid enquiry!`);
    }
});

function showData(uniArr){
    for(uni of uniArr){
        console.log(uni.name);
        let li = document.createElement("li");
        li.innerText = uni.name;
        ul.appendChild(li);
    }
    inp.value = "";
}
//console.dir(inp);
// console.dir(uniBtn);
// console.dir(ul);


