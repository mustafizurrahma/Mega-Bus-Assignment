// First Class Economy Dynamic By Javascript
function megaBusTicket(ticketCount, isRaiseOrDecrease) {
    const busTicketValue = document.getElementById(ticketCount + 'TicketValue');
    const busTicketConvert = parseInt(busTicketValue.value);
    let newBusTicket = busTicketConvert;
    if (isRaiseOrDecrease == true) {
        newBusTicket = busTicketConvert + 1;
    }
    if (isRaiseOrDecrease == false && busTicketConvert > 0) {
        newBusTicket = busTicketConvert - 1;
    } 
    busTicketValue.value = newBusTicket;
    let totalMegaTicket = 0;
    if (ticketCount == 'bus') {
        totalMegaTicket = newBusTicket * 150;
    }if (ticketCount == 'economy') {
        totalMegaTicket = newBusTicket * 100;
    }
    document.getElementById(ticketCount + 'TotalMegaTicket').innerText = '(' + '$'+ totalMegaTicket + ')';  
    megaBusTotalCalculation(); 
}

function megaBusTotalCalculation() {
    
    const busInputValue = document.getElementById('busTicketValue');
    const busInputCount = parseInt(busInputValue.value);

    const economyInputValue = document.getElementById('economyTicketValue');
    const economyInputCount = parseInt(economyInputValue.value);
    
    const totalTicketPrice =  busInputCount * 150 + economyInputCount * 100;
    document.getElementById('subTotalAmount').innerText ='$' + totalTicketPrice;

    const ticketTax = totalTicketPrice * 0.1;
    document.getElementById('amountVat').innerText = '$' + ticketTax;

    const ticketTotalPrice = totalTicketPrice + ticketTax;
    document.getElementById('totalTicketPrice').innerText = '$' + ticketTotalPrice;
}

//Submit Button Conformation Message.
function submitConformation() {
    swal("Thanks For !", "Buying The Mega Bus Ticket!", "success");
}
