/*
 compare the phone price and print the cheapest phone
 from the object.
*/

function cheapPhone(phones) {
    // console.log(phones);
    let cheap = phones[0];
    for (let phone of phones) {
        // console.log(phone);
        if (phone.price < cheap.price) {
            cheap = phone;
            
        }
    }
    return cheap;
}

let brands = [
    {name:"apple",price:150000,camera:"12 MP",color:"black"},

    {name:"samsung",price:25000,camera:"12 MP",color:"black"},
    
    {name:"walton",price:15000,camera:"12 MP",color:"black"},

    {name:"vivo",price:20000,camera:"12 MP",color:"black"},

    {name:"nokia",price:1500,camera:"12 MP",color:"black"}
]

let output = cheapPhone(brands);
console.log("cheapest phone from the object is :", output)