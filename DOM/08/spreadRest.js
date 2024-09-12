//Spread and rest operator

//Math.max
let maxNumber = Math.max(2, 4, 5, 3, 7, 9);
// console.log(maxNumber);

//++++++++++++++++++++++++++++++++++++++++++
var myObj = {};

Object.assign(myObj, { a: 2, b: 4, c: 8 }, { x: 20, y: 22, z: 24 }, { Name: "Naruto Uzumaki" });
// console.log(myObj);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function sumOne(a, b) {
    return a + b;
}
// console.log(sumOne(11,11));

// var myA =[];
// console.log(sumOne(11,12));

// var myA =[2,3];
// console.log(sumOne(...myA));  //Spread Operator

// ++++++++++++++++++++++++++++++++++++

function sumTwo(...args){
    console.log(args);
    let sum =0;
    for (const arg of args){
        sum += arg ;
    }
    return sum ;
}
console.log(sumTwo(2,3,4,1,4));

// function sumTwo(a, b, ...args) {
//     console.log(args);
//     let multi =a*b;

//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     return [sum,multi];
// }
// console.log(sumTwo(2, 3, 4, 1, 4)); //it's some confusing
