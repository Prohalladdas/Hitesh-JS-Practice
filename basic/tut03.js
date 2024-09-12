// Operator in JS | Calculate discount

// D = (L-S)/L*100   // Formula
// a+b((b*c)/d)*e

var sellingPrice = 199;
var listPrice = 799;

var discountPercent = ((listPrice - sellingPrice)/listPrice )*100;
console.log("DiscountPercentage is:"+ discountPercent);

displayDiscountPercentage = Math.round(discountPercent);
console.log("Product Discount:"+displayDiscountPercentage+"%off");

var result = listPrice>sellingPrice;
console.log(typeof result)
