
/*
  compare three numbers and print the max one .
*/ 

function maxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("The big number is :", num1);
    }
    else if (num2 > num1 && num2 > num3) {
        console.log("The big number is :", num2);
    }
    else {
        console.log("The big number is :",num3)
    }
}

let output = maxNumber(223, 44, 5);