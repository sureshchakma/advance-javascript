// falsy value 
// const name= 0;
//""
//undefined 
// null all are false
// NaN
//false


// truthy
// " ", "0",{}, [] true condition value   
let name = 0;
console.log(name);

if (name || name ==0){
    console.log("Condition is true");
}

else{
    console.log("Condition is false");
}