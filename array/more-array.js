
// array declare with {for of loops}
let friends = ["elon", "mark", "bill", "mukesh", "adani"];
for (let friend of friends) {
    console.log(friend);
}
// array declare with {normal for loops}
for (let i = 0; i < friends.length; i++){
    console.log(i);
    console.log(friends[i]);
}
// array declare with {while loops}
let numbers = [22, 33, 22, 43, 22, 23, 12, 36, 3, 22, 35, 44]
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}