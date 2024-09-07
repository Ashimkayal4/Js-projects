
/*
  finding the minimum number from an array.Does not matter how many 
  numbers in the array it gives the max number.
*/ 

function tallestNumber(taller) {
    console.log(taller);
    let min = taller[0];
    for (let tall of taller) {
        console.log(tall);
        if (tall < min) {
            min = tall;
        }
    }
    return min;
}

let numbers = [220, 24, 25, 65, 75, 67, 54, 36, 87, 504];
let output = tallestNumber(numbers);
console.log("The tallest number is :", output);