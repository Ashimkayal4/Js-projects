
function inchToFeet(inch) {
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const feetRemaining = inch % 12;
    const result = feetNumber + " ft. " + feetRemaining + " inch. "
    return result;
}
const output = inchToFeet(80);
console.log(output);



function mileToKilo(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

console.log( "kilo :", mileToKilo( 23));


