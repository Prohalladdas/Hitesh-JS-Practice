let myMap = new Map()

myMap.set(1,"Hii")
myMap.set(2,"hello")
myMap.set(3,"hola")
myMap.set(4,"Moshi Moshi")

console.log(myMap);

// for loop
// for(let key of myMap.keys()){
//     console.log(`The Key is : ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`The Value is : ${value}`);
// }

// for(let [key,value] of myMap){
//     console.log(`The key is : ${key} and value is : ${value}`);
// }

// forEach loop
myMap.forEach((value) => console.log(`value is ${value}`));

myMap.forEach((value,key) => console.log(`Key is ${value} and value is ${key}`));

myMap.delete(2);
console.log(myMap);