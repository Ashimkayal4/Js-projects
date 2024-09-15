function calculateMoney(ticketSale) {
    if (ticketSale >=0 ) {
        let ticketIncome = ticketSale * 120;
        let expense = 500 + (8 * 50);
        let remain = ticketIncome - expense;
        console.log(remain);
      
    }
    else {
        let message = "Invalid number";
        console.log(message);
    }
}
calculateMoney(10);