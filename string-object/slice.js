
// ------------>>> Use of slice

let address = "satkhira";
let short = address.slice(1, 3);

// slice er moddhe suru (1) hoilo starting ar ses (3) hoilo before ending , mane or ager ta porjonto.

console.log(address);
console.log(short);


// -------------->>> Use of split 


let sentence = "I am very unlucky"
console.log(sentence.split());
console.log(sentence.split("")); 

// split er moddhe kisu na dile just ekta array hisabe show korbe ar jodi "" kotation use kori tahole space soho sob gulore alada vag kore show korbe

console.log(sentence.split(" ")); 
// split er moddhe " " kotation er vitore space dile tokhon variable er moddhe jekane space ase seikhane vag kore dibe.

console.log(sentence.split("a")); 
// split er moddhe kono key use korle sei key bad diye er jaigai vag kore