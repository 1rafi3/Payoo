console.log('angta lege geche');

document.getElementById('add-money-btn')
.addEventListener('click',function(){
    
    const bankAccount = getValueFromInput('add-money-bank');
    console.log(bankAccount);
    if(bankAccount == 'Select bank'){
        alert('please select a bank');
        return;
    }

    const accNo = getValueFromInput('input-bank-account-mobile');
    if(accNo.length != 11){
        alert('invalid number');
        return;
    }

    const amount = getValueFromInput('add-money-to-bank');

    const newBalance = getBalance() + Number(amount);

    setBalance(newBalance);
    console.log(newBalance);

    const pin = getValueFromInput('add-money-pin');
    if(pin == '1234'){
        alert('Add Money Success');
    }
    else{
        alert('Invalid Pin');
        return;
    }

})