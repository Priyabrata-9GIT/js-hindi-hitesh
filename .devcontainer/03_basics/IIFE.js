// immediately Invoked Function Expression
//global scope ke pollution se bachata hai aur jo function immediately invoke hota hai

(function chai(){
    console.log(`I am the hero`);
})();// here semicolon is imp to end the invoked function 

(()=>{
    console.log(`i am the only hero`);
})();

((name)=>{

    console.log(`${name} the only hero`);
})("PRIYA");
 