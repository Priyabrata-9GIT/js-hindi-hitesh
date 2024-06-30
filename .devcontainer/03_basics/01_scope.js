function one(){
    const username = "Priyabrata"

    function two(){
        const website = "youtube"
        console.log(username);

    }
   // console.log(website);(error)
two()
}
one();


//+++++++ points ++++++++
console.log(addone(5));
function addone(num){
    return num+1;
}

/*console.log(addtwo(7))(error thrown bcz here you can't acces before initialization )
const addtwo = function(num){
    return num+2;

}*/

const addtwo = function(num){
    return num+2;

}
console.log(addtwo(7))



