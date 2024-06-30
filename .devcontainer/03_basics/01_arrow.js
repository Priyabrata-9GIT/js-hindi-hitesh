const user = {
    username: "hitesh",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
  
}
//user.welcomeMsg();
//user.username="Priya";
//user.welcomeMsg();
//console.log(this);// empty object

/*function chai(){
    let username = "Priya"
    console.log(this.username);//this does not work in function it works in object
}
chai()*/

/*const chai = function(){
    let username = "hitesh"
    console.log(this.username);
    console.log(this);
}
chai(); */

const chai = () => {
    let username= "Priya"
    console.log(this.username);
    console.log(this);
}
chai()

//arrow function 
const addtwo = (num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,4));
 //implecet return

// const addto = (no1 , no2) => (no1+no2) //cant use curly braces in place of paranthesis
 
//const addth = (no1,no2) => {
 //   username:"ramesh"
    
//}

const add = (no1,no2) => ({username: "priya"})
console.log(add(7,8));