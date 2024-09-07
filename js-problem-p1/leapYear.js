function leapYear(year) {
    if (year % 4 === 0) {
        console.log("this is a leap year",year);
    }
    else {
        console.log("this is not a leap year",year)
    }
    
}

leapYear(2003);

function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        console.log(year,"= This is a leap year")
    }
    else if (year % 400 === 0) {
        console.log(year,"= This is a leap year")
    }
    else {
        console.log(year,"= This is not a leap year")
    }
}
isLeapYear(2000);
isLeapYear(2100);
isLeapYear(2024);
