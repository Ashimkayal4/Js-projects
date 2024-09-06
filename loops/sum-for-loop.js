
// --->> sum of the odd numbers from 91 to 129 using{for loops}

let sum = 0;
for (let i = 91; i <= 129; i++){
    if (i % 2 === 1) {
        sum = sum + i;
        console.log(sum);
    }
}