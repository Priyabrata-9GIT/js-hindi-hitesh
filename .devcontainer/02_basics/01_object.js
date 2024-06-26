//objects can be dclared as two ways one is literals and other is constructor
//ifyor create object as constructor singleton is formed
//construcor method = object.create
// we will study literals now

//using symbol as a key
const mySym= Symbol("key 1")

const jsuser = {
    name:"PRIYA",
    age : 22,
    location : "Odisha",
    [mySym]:"My key 1",
    email:"priya@432.com",
    islogged: false,
    lastlogged:["sun","mon"],
    "newname" :"priyabrata nath"//key stored as string in object

    

};
//accessing
/*console.log(jsuser.lastlogged);
console.log(jsuser["lastlogged"]);
console.log(jsuser["newname"])
console.log(jsuser[mySym]);
console.log(jsuser);

jsuser.email = "Priyabrata@amazon.com"
console.log(jsuser);
Object.freeze(jsuser)//no further change
jsuser.email= "priyabrata@jio.com"
console.log(jsuser); */

jsuser.greeting = function(){
    console.log("hii my name is ");
}
//console.log(jsuser.greeting());
jsuser.greetings=function( ) {
    console.log(`hii my name is , ${this.name}`);
    
}
//console.log(jsuser.greetings());
const regularuser = {
    email : "priya@84.iiit",
    fullname : {
        userfullname: {
            fistname: "Priyabrata",
            lastname: "Nath",
        }
    },
    Age :20
}
console.log(regularuser.fullname.userfullname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {obj1, obj2}// 
//console.log(obj3);
const obj4 = Object.assign(obj1,obj2);// here obj1 is the target and obj2 is the source
//console.log(obj4);
//we can assign both obj1 and obj2 as a source also
const obj5=Object.assign({},obj1,obj2)
//console.log(obj5);
//or
const obj6={...obj1,...obj2}
//console.log(obj6);
const user = [
    {
        id:1,
        mail: "bc@34.com",
    },
    {
        id:2,
        mail:"gm@45.com",
    },
    {
        id:3,
        mail:"mc@78.com"
    }
]
//console.log(user[1].mail);
console.log(regularuser);
console.log(Object.keys(regularuser));
console.log(Object.values(regularuser));
console.log(Object.entries(regularuser));
console.log(regularuser.hasOwnProperty('email'));