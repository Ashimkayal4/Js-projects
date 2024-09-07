let names = ["rahim", "karim", "bijoy", "rahim", "mahin", "karim", "bijoy", "mahin"];

function noDuplicate(array) {
    
    let unique = [];

    for (let name of array) {
        if (unique.includes(name)===false) {
            unique.push(name);
        } 
    }
    return unique
}

let uniqueNames = noDuplicate(names);
console.log(uniqueNames);