document.getElementById('cashout-btn')
.addEventListener('click',function(){
    //1 --> get the agent number & validity
    const givenNumberInput = getValueFromInput('input-mobile');
    console.log(givenNumberInput);


    //2 --> get the amount,validate, convert to number
    const cashoutAmountInput = getValueFromInput('cashout-amount'); 
    console.log(cashoutAmountInput);

    //3 --> get the current balance amount,validate, convert to number
    const currentBalance = getBalance();
    console.log('current balance : ',currentBalance);

    //4 --> calculate the balance 

    const calculatedBalance = currentBalance - Number(cashoutAmountInput);
    
    if (calculatedBalance < 0){
        alert('Invalid Amount');
        return;
    }
    console.log(calculatedBalance);
    
//     //5 --> get the bill verify 

    const cashoutPin = document.getElementById('cashout-pin');
    const pin = cashoutPin.value;

    if(pin == '1234'){
//         //5-1 --> true::: show an alert > set Balance 
        alert(`"Successfully cashout : ", ${cashoutAmountInput}`);
        setBalance(calculatedBalance);
    } else {
//         //5-2 --> true::: show an error alert > return
        alert('Invalid Pin');
        return;
    }

})










// document.getElementById('cashout-btn')
// .addEventListener('click',function(){

//     //1 --> get the agent number & validity

//     const givenNumberInput = document.getElementById('input-mobile');
//     const agentNumberInput = givenNumberInput.value;
//     console.log(agentNumberInput);

//     //2 --> get the amount,validate, convert to number

//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const amountInput = cashoutAmountInput.value;
//     console.log(amountInput);

//     //3 --> get the current balance amount,validate, convert to number

//     const currBalance = document.getElementById('balance');
//     const currentBalance = currBalance.innerText;
//     console.log(currentBalance);


//     //4 --> calculate the balance 

//     const calculatedBalance = Number(currentBalance - amountInput);
    
//     if (calculatedBalance < 0){
//         alert('Invalid Amount');
//         return;
//     }
//     console.log(calculatedBalance);
    
//     //5 --> get the bill verify 

//     const cashoutPin = document.getElementById('cashout-pin');
//     const pin = cashoutPin.value;

//     if(pin == '1234'){
//         //5-1 --> true::: show an alert > set Balance 
//         alert(`"Successfully cashout : ", ${amountInput}`);
//         document.getElementById('balance').innerText = calculatedBalance;
//     } else {
//         //5-2 --> true::: show an error alert > return
//         alert('Invalid Pin');
//         return;
//     }



// })