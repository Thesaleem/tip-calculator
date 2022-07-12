'use strict'
const inputBill = document.querySelector('#calc-input');
const inputPeople = document.querySelector('#num-people');
const inputCustom = document.querySelector('.custom');
const tipAmount = document.querySelector('.output-text__tip');
const total = document.querySelector('.output-text__total');
const resetBtn = document.querySelector('.reset-btn');
const tipPercentCon = document.querySelector('.tip-percent__con')
const errorMsg = document.querySelector('.error-msg')


tipPercentCon.addEventListener('click', (e) => {
    if (e.target.classList.contains('tip-percent')){

        errorMsg.textContent = "";
        inputPeople.classList.remove('error')

        if(inputPeople.value === "") {
            errorMsg.textContent = "Can't be zero"
            inputPeople.classList.add('error')
            return;
        }
        let tipPercent = Number.parseInt(e.target.textContent)/100
        let billAmount = +inputBill.value
        calculateTip(billAmount, tipPercent, +inputPeople.value)        
    }

})

inputCustom.addEventListener('keyup', (e) => {
    errorMsg.textContent = "";
    inputPeople.classList.remove('error')
      
    if(inputPeople.value === "") {
        errorMsg.textContent = "Can't be zero"
        inputPeople.classList.add('error')
        return;
    }
    
    let tipPercent = e.target.value/100

    let billAmount = +inputBill.value
    calculateTip(billAmount, tipPercent, +inputPeople.value)
   
})

const calculateTip = function(billAmount, tipPercent, totalPeople){
    let totalTip = billAmount * tipPercent;
    let individualTip = totalTip/totalPeople;
    console.log(totalTip, individualTip);
    individualTip = +individualTip.toFixed(2);

    let individualBill = billAmount/totalPeople;
    let totalBill = individualBill + individualTip;
    totalBill = +totalBill.toFixed(2);

    tipAmount.textContent = `$${individualTip}`;
    total.textContent = `$${totalBill}`
}

const resetUI = function(){
    inputBill.value = '';
    inputPeople.value = '';
    inputCustom.value ='';

    tipAmount.textContent = `$0.00`;
    total.textContent = `$0.00`;

    errorMsg.textContent = ""
    inputPeople.classList.remove('error')
}
resetBtn.addEventListener('click', resetUI)

