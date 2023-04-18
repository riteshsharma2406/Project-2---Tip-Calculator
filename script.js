const btnElement = document.getElementById("calculate");
const billElement = document.getElementById("bill");
const tipElement = document.getElementById("tip");
const totalSpan = document.getElementById("total");


function calculateTotal()
{
    const billValue = billElement.value
    const tipValue = tipElement.value

    const totalBill = billValue * (1 + tipValue/100);
    
    totalSpan.innerHTML = totalBill.toFixed(2);
}

btnElement.addEventListener("click",calculateTotal);