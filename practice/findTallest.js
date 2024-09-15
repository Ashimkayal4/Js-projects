
function findTallest(biggest) {
    console.log(biggest);
    let big = biggest[0];
    for (let number of biggest) {
        console.log(number);
        if (number > big) {
            big = number;
        }

    }
    return big;
}

numbers = [21, 34, 654, 224, 543, 64, 32, 65];``
let output = findTallest(numbers);
console.log("the biggest number from an array is :", output);