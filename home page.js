const  transactionHist  = document.getElementById('transhist');
const deposit = document.getElementById('depo');
const withdrawal = document.getElementById('withd');
const send = document.getElementById('send');
const currPerson = localStorage.getItem('email');

/* This is the functionality for the homepage */
//This should take us to the page for to send money to another person
send.addEventListener('click', ()=>{
    window.location.href = "sendMoney.html";

});

//This should take you the menu that lets you put money into the bank account
deposit.addEventListener('click',()=>{
    window.location.href = "depositMoney.html";
});

//This should take you to the menu that lets you withdraw money
withdrawal.addEventListener('click',()=>{
    window.location.href = "withdrawMoney.html";
});

//This should take you to the menu that lets you view the transaction history
transactionHist.addEventListener('click',()=>{

    window.location.href = "transHistory.html";

});


