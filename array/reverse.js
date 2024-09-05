
// reverse sentence by using {for loops}

let sentence = "i am a developer";
let reverse = "";
for (let letter of sentence) {
    console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);