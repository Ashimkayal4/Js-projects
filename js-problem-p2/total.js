
/*
  calculate the sum of product price .
*/

function sumProducts(total) {
    // console.log(total);
    let sum = 0;
    for (let item of total) {
        // console.log(item);
        sum = sum + item.price;
    }
    return sum;
}



let products = [
    
    { name: "pant", price: 1200, color: "blue" },
    
    { name: "shirt", price: 1000, color: "blue" },
    
    { name: "shampoo", price: 300, color: "blue" },
    
    { name: "chiron", price: 100, color: "blue" },
    
    { name: "shoes", price: 800, color: "blue" }
    

]

let output = sumProducts(products);
console.log("sum of the all products price is :", output);