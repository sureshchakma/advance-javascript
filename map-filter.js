const numbers = [3, 5, 4, 6, 8, 9];
// const output=[];

// for(let i =0; i < numbers.length; i++){
//     const element =numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// function square(element){
//     return element * element;
// }

// const square = element => element *element;
// const square =x => x*x;

// const result= numbers.map(function(element){
//     return element * element;
// });

// const result =numbers.map(x= x=> x * x);

// console.log(result);

const isThere =numbers.find(x=> x >5);

const bigger =numbers.filter(x => x<3);
console.log(isThere);