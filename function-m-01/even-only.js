function evenOnlyNumbers(numbers) {
    sum = 0;
    for (let number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
let numbers = [11, 32, 12, 23, 33, 14, 34];
evenOnlyNumbers(numbers);
console.log("sum of the even numbers is :", sum);



