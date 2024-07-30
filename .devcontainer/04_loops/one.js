// for loop
// while loop
//do while
// break
// continue

const arr = [1,2,3,4,5]
 
for (const index of arr) {
        console.log(index);
}

/*const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}*/   
const greetings = "hello world!"
for (const greet of greetings) {
    console.log("each char is", greet);
}
// map
 
const map= new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('UK', "United Kingdom")
map.set('IN',"INDIA")
console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key,value] of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(value);
}
for (const [key,value] of map) {
    console.log(`${key}  :-  ${value}`);
}

/*const myObj = {
    game1 : 'NFS',
    game2 :'GTA',
    game3 :'IGI'
}

for (const [key,value] of myObj) {
    console.log(key,value);
}
//not working bcz myObj is not iterable in this way*/

const myobj={
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobj) {
    console.log(key);
}
for (const key in myobj) {
    console.log(myobj[key]);
}

const myarr=["elrond","gollum","sam","frodo"]
for (const key in myarr) {
    if (Object.hasOwnProperty.call(myarr, key)) {
        const element = myarr[key];
        console.log(element);
        console.log(key);
    }
}
const mapp = new Map()
mapp.set('ek','one')
mapp.set('dwi','two')
mapp.set('tri','three')
mapp.set('chatuh','four')

/*for (const key in mapp) {
    console.log(key);
    console.log(mapp[key]);

}// mapp can't be itterarted like this*/

const coding=["js","java","cpp","c","python"]
 /*coding.forEach(function (para) {
    console.log(para);
 })*/

/*coding.forEach((item)=> { 
    console.log(item);
})*/

function printme(item){
    console.log(item);
}
coding.forEach(printme)

coding.forEach((item,val,arr)=> { 
    console.log(item,val,arr);
})

const myarrr=[
    {
        langname:"js",
        langfilename:"javascript"
    },
    {
        langname:"Python",
        langfilename:"Py"
    },
    {
        langnames:"java",
        langfilenam:"JV"
    }
]
myarrr.forEach((item)=>{
    console.log(item.langname);
})
const mynum=[1,2,3,4,5,6,7,8,9,10]
mynum.forEach((item)=>{
    if(item>=5)
    console.log(item);
    
})