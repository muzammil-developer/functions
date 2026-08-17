// var d = new Date();
// var time = d.getHours();
// var minutes = d.getMinutes();
// alert("Time :" + hours + ":" + minutes); 

// function tellTime() {
//     var d = new Date(); 
//     var hours = d.getHours();
//     var minutes = d.getMinutes();
//     alert("Time :" + hours + ":" + minutes);
// };

// var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
// var today = new Date();
// var month = today.getMonth();
// var monthvalue = months[month];
// var rollNo = 23;

// function announceWinner(monthlyWinner, winnerrollNo) {
// alert(monthlyWinner + "'s" + "winner is " + winnerrollNo);
// }

// announceWinner(monthvalue, rollNo);

// function calculate(Total,amount){
// if(Total<200){
//     Total=Total+amount;
// }
// return Total+13;
// }    

// var subTotal=100;
// var fixedamount=100;

// var a=calculate(subTotal,fixedamount)
// document.write("Your Order Total is "+a);

var subTotal = 100;

function calculateTotal(toatal, memberShip) {
    var tax = (total / 100) * 13;
    var deliveryCharges = 100;

    if(total < 200) {
        finalizedTotal = finalizedTotal + 100;
    };

    console.log(total)

    total = total + tax;

    if (memberShip !== "premium") {
        toatal = total + 100;
    };

    return total;
}

var totalAmount = calculateTotal(subTotal, "standard");

document.write("Total:" + totalAmount);
