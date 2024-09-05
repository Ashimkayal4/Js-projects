

// --------->>>>>>break by using {for loops}

for (let i = 0; i< 200; i++){
    console.log(i);
    if (i >= 100) {
        break
    };
}


// ----------->>>>>>>>> break by using {while loops}--------------

sum = 0;
let i = 1;
while (i < 50) {
    sum = i + sum;
    if (sum >= 100) {
        break;
    }
    console.log(sum);
    i++;
}

// ------->>>>>>>>> finding square number from 1 to 100 using {for loop}

for (let i = 2; i <= 100; i++){
    if (Number.isInteger(Math.sqrt(i))) {
        console.log("found square num",i)
       break
   }
}