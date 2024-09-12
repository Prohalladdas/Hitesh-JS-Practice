function doAddition(x){
    return function(y){
        return x + y;
    };
};

var add = doAddition(3);
console.log(add(5));

console.log(doAddition(7)(7));