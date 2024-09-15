function deletesInvalid(array) {
    if (Array.isArray(array)===false) {
        return 'invalid '
    }
    let num = [];
    for (let element of array) {
        if (typeof element === 'number' && isNaN(element)===false) {
            num.push(element);
        }
    } 
    return num; 
}
let arr = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
let arr2={num: [ 1 , 2 , 3 ]}
let output1 = deletesInvalid(arr);
let output2 = deletesInvalid(arr2);
console.log(output1);
console.log(output2);