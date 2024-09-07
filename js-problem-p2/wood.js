
/*
  calculate various item price in total.
*/ 

function woodNeed(chair, table, bed) {
    const chairWood = 12;
    const tableWood = 15;
    const bedWood = 30;

    const totalChairWood = chair * chairWood;
    const totalTableWood = table * tableWood;
    const totalBedWood = bed * bedWood;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;

}

let output = woodNeed(5, 0, 1);
console.log(output);