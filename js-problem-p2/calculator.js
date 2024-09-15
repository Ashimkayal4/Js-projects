function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
function subtract(num1, num2) {
    let sum = num1 - num2;
    return sum;
}
function multiply (num1, num2) {
    let sum = num1 * num2;
    return sum;
}
function divide(num1, num2) {
    let sum = num1 / num2;
    return sum;
}

function calculator(a,b,operation) {
    if (operation === "add") {
        let result = add(a, b);
        return result;
    }
    else if (operation === "subtract") {
        let result = subtract(a, b);
        return result;
    }
    else if (operation === "multiply") {
        let result = multiply(a, b);
        return result;
    }
     else if (operation === "divide") {
        let result = divide(a, b);
        return result;
    }

    else {
        console.log("you should try 'add' 'subtract' 'multiply' & 'divide'  ")
        return;
    }
}

let output = calculator(3, 2, "multiply");
console.log("your calculate result is :", output)