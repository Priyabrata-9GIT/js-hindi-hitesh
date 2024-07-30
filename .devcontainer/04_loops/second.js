/*const coding=["js","java","cpp","c","python"]
const values= coding.forEach(function (para) {
    console.log(para);
    return para
 })
 console.log(values);// for each cant be returned like this so out is undefined*/

 const mynum=[1,2,3,4,5,6,7,8,9,10]
 const newnum = mynum.filter((item)=>(item>=4 ))
 console.log(newnum);

 const each=[]
 mynum.forEach((para)=>{
    if(para>4)
        each.push(para)
 })
 console.log(each);
 let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": 2006,
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration":2012,
      "capacity": 5
    },
    {
      color :"red",
      type : "minivan",
      registration : 2011,
      capacity: 11
    },
    {
        color:"purple",
        type: "station wagon",
        registration: 2005,
        capacity : 15
    }
    
    
  ]
  let res = cars.filter((ride)=> ride.color==="red")
  res = cars.filter((ride)=>{
    return (ride.registration>2010 && ride.capacity>10)
      })
  console.log(res);

  let arr=[1,2,3,4,5,6,7]
  const newarr= arr.map((digit)=>{
    return digit+10;
  })
  console.log(newarr);

  let newNum= [1,2,3,4,5,6,7,8]
 const myNum= newNum
      .map((num)=> num * 10)
      .map((num)=> num+2)
      .filter((num)=> num>=40)

console.log(myNum);
