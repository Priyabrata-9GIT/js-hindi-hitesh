"Use strict"; //treat all JS code as newer version
//alert(3+3) // we are using nodejs, not browser
console.log("priya")
let name = "priya"
let age = 18
let isLogin= false
// number=> 2 to the pow 53
//bigint
//string=""
//boolean=>true/false
//NULL=>standalone value
//undefined
console.log(typeof null)
console.log(typeof undefined)
const Id=Symbol('123')
const anId= Symbol('123')
console.log(Id===anId);
const heros=["shakti","Agni","Bayu"]
let myObj={
       name:"Priya",
       age:22,
}
const myFunction= Function(){
       console.log("Hello World");
}

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */


/*datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.*/

       