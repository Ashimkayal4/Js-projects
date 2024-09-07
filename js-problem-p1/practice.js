let numbers = [21, 22, 13, 12, 15, 54, 65, 66, 75, 42];
let output = onlyOdd(numbers);
console.log("the average of odd numbers is :" , output);

function onlyOdd(arr) {
    let odds = [];
    for (let number of arr) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    console.log(odds);

    sum = 0;
    for (let odd of odds) {
        sum = sum + odd;
    }

    let count = odds.length;
    let result = sum / count;
    return result;

}