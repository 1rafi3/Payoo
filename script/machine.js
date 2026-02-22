// console.log("angta lege geche");

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(id,value);
    return value;
}

// machine balance 
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balanceYouHave = balanceElement.innerText;
    // console.log('current balance',balanceYouHave);
    return Number(balanceYouHave);
}

// set balance
function setBalance(value){
    document.getElementById('balance').innerText = value;
}

//machine id > hide all > show id 
function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    // const sendMoney = document.getElementById('send-money');
    // const getBonus = document.getElementById('get-bonus');
    // const payBill = document.getElementById('pay-bill');
    // const transactions = document.getElementById('transactions');

    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');


    const selected = document.getElementById(id);
    selected.classList.remove('hidden');

}