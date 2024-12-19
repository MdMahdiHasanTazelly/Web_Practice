let arr = [3, 2, 5, 6, 9, 0];


//map function
let mapArr = arr.map( (el)=> el*2 );
console.log(mapArr);


//filter function
let filtered = arr.filter( (el) => el>3 );
console.log(filtered);


//returns the sum of the array
let reduce = arr.reduce( (sum, el)=> el+sum );
console.log(`SUM = ${reduce}`);


//spread operator
console.log("spread operator -> ",Math.min(...arr));
//deep copy using spread operator
const newArr = [...arr];


//rest operator
//takes indefinite number of arguments
function sum(...param){
    console.log("rest operator -> "+param.reduce( (sum, el)=> sum+el ));
}
sum(1, 2, 3, 5, 6, 7);


//destructuring
let [ first, second, ...others] = arr;
console.log(`first = ${first}--------second = ${second}`);
console.log(`others arr = ${others}`);