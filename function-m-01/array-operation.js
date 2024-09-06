
function sumOfNumbers(numbers) {
    let sum = 0;
    for (let number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    
    return sum;
    
}

let numbs = [22, 33, 44, 55, 66, 77, 88, 99];
let sum = sumOfNumbers(numbs);
console.log("sum of the numbers is :", sum);
