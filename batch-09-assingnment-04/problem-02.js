function checkName(name) {
    let check = name[name.length - 1];
    
    if (typeof name ==='string') {
        if (check === "a" || check === "e"||check==="i"||check==="o"||check==="u"||check==="A"||check==="E"||check==="I"||check==="O"||check==="U") {
            console.log("Good Name")
        }
        else {
            console.log("Bad Name")
        }
    }
    else {
        console.log("Invalid")
    }
}
checkName(2222);