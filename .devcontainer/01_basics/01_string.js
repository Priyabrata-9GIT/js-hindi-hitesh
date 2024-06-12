const name = "Priyabrata"
const repoCount = 20;
console.log(name + repoCount + "value");
console.log(`Hello my name is ${name.toUpperCase()} and my rep count is ${repoCount} `)
const gameName =  new String("Priyabrata")
console.log(gameName);
//you canndeclare this way also//
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("r"));

const newString = gameName.substring(1,5)
console.log(newString);
const nowString = gameName.substring(-1,5)
console.log(nowString);
//substring dont take neg value
const anString = gameName.slice(2,6)
console.log(anString);
const onString = gameName.slice(-8,6)
console.log(onString);
const word= "    good dog   "
console.log(word);
console.log(word.trim());
const url = "http://priya.com/priya%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes("subdar"))
let test="hey- my- name-is-Priya"
console.log(test.split("-"));

