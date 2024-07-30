let newnum = [1,3,5,7,9]
/*const mynum = newnum.reduce(function (acc,curr) {
    console.log(`acc value is ${acc} and curr value is ${curr}`)
    return acc+curr;
    
    
},0 )
console.log(mynum);*/
 
const mynum = newnum.reduce((acc,curr)=> {
    console.log(`acc value is ${acc} and curr value is ${curr}`)
    return acc+curr

},0)
console.log(mynum);