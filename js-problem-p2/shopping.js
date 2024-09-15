function discountPrice(quantity) {
    console.log(quantity);
    if (quantity <= 100) {
        let total = quantity * 100;
        console.log("your per product cost is 100 taka you can not get any discount and the total price is :",total);
    }
    else if (quantity <= 200) {
        let total = quantity * 90;
        console.log("your per product cost is 90 taka after discount and the total price is :",total);
    }
    else {
        let total = quantity * 70;
        console.log("your per product cost is 70 taka after discount and the total price is :",total);
        
    }
}

let output = discountPrice(541);
