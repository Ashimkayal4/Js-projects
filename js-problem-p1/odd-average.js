function oddAverage(numbers) {
    let odds = [];
    for (let number of numbers) {
        if (number % 2 === 1) {
          console.log(number);
          odds.push(number);
        }
    }
    console.log(odds)
    
    sum = 0;
    for (let numbs of odds) {
        sum = sum + numbs;
    }
    let count = odds.length;
    console.log(sum, count);
    let result= sum / count;
    
    return result;
}
let numbers = [11, 22, 3, 33, 44, 55, 6, 6778, 665, 332]
let output = oddAverage(numbers);
console.log("the average is =", output);