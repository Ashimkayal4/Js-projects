// string is immutable --------> not change
// array is mutable-----------> it can change


let numbers = [22, 33, 44, 55, 66, 77, 88, 99];
console.log(numbers);
numbers[0] = 11;
console.log(numbers);

let names = ["montu", "jhontu", "pontu"];
console.log(names);
names[1] = "boltu";
console.log(names);


// -------------string

let bancod = "nasir";
console.log(bancod);
console.log(bancod.length);
console.log(bancod[0]);
bancod[0]="k"