
// ----------->>>>>>> use of continue to skip the odd num>>>>>---

// for (let i = 0; i <= 40; i++){
//     if (i % 2 === 1) {
//         continue
//     }
//     else {
//         console.log(i)
//     }
// }


// ---->> use of {continue loop} to skip odd num, and the num that are divisible by 5;


for (let i = 55; i <= 85; i++){
    if (i % 5 === 0) {
        continue
    }
    else {
        if (i % 2 === 0) {
            continue
        }
        else {
            console.log(i);
        }
    }
}