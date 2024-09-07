 
/*
  the final price of products includes the quantity of items.
*/ 

function totalWithQuantity(items) {
    // console.log(items);
    let sum = 0;
    for (let item of items) {
        let finalEach = item.price * item.quantity;
        sum = sum + finalEach;
    }
    return sum;
}

let market = [
    { name: "pant", price: 1200, color: "blue", quantity: 2 },
    { name: "shirt", price: 1000, color: "blue", quantity: 3 },
    { name: "shampoo", price: 300, color: "blue", quantity: 1 },
    { name: "chiron", price: 100, color: "blue", quantity: 5 },
    { name: "shoes", price: 800, color: "blue", quantity: 4 }
]
let output = totalWithQuantity(market);
console.log("The final price of all products is :", output);
