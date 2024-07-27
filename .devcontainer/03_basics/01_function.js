function add(num1,num2){
    //console.log(num1+num2);
    return num1+num2;
}
const sumu= add(3,4);
//console.log("result :",sumu);



function loginUserMessage(username){
    if(username==undefined){
        console.log("plz enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage());

/*function loginUserMessage(username){
    if(!username){
        console.log("plz enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());*/

function loginUserMessage(username="sam"){
    if(username==undefined){
        console.log("plz enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage());
//console.log(loginUserMessage("ritik"));

/*function calcartprice( ...num1){
    return num1;
}
console.log(calcartprice(100,200,599,499,300));
 */

function calcartprice(val1,val2,...num1){
    return num1;
}
//console.log(calcartprice(100,200,599,499,300));
 
const newarr=[23,45,67,12,48]
function secondvalue(getarr){
    return getarr[1]
}
//console.log(secondvalue(newarr));

const user = {
    username:"priya",
    id: 84
}
function handleobject(kuchv){
    console.log(`username is ${kuchv.username} and price is ${kuchv.id}`);

}
handleobject(user)

/*handleobject({
    username:"josua",
    id: 844
}) */
    
