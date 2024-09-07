
let numbers = [5, 6, 11, 12, 98, 5];

let output = findSameNumber(numbers);

function findSameNumber(array) {
    unique = [];
    for (let num of array) {
        if (unique.includes(num) === true) {
            unique.push(num);
        }
    }
   
    let count = unique.length;
    console.log(count);
    return count;
}