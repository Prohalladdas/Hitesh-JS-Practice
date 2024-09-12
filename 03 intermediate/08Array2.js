var isEven = (element)=>{
    // if(element % 2 === 0){
    //     return true;
    // }
    // return false;
    return element % 2 === 0;
}
// console.log(isEven(66));

// var result = [2,423,62,8].every(isEven);
// console.log(result);

// var result = [2,69,32,44,46].every((e)=>{
//     return e % 2 === 0;
// })
// console.log(result);

var result = [2,22,32,44,46].every((e) =>(e % 2 === 0));
console.log(result);