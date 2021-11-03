const { acceleratedmobilepageurl } = require("googleapis/build/src/apis/acceleratedmobilepageurl");

const login = document.getElementById('loginButton');
const password = document.getElementById('loginpassword');
const email = document.getElementById('loginemail');
const invalidEmail = document.getElementById('invalid-email');
const invalidPassword = document.getElementById('invalid-password');
/* There are the elements the "home page" */
const  transactionHist  = document.getElementById('transhist');
const deposit = document.getElementById('depo');
const withdrawal = document.getElementById('withd');
const send = document.getElementById('send');
/* These are the elements from the transaction history */
const sendMon = document.getElementById('sendMonsendMon');
const sendEmail = document.getElementById('sendEmail');
const amount = document.getElementById('amount');
/* There are the elements from the deposit menu */
const depo = document.getElementById('depoMoney');
const money = document.getElementById('depoMon');

var currPerson;


/* This is the functionality for the deposit money page */
depo.addEventListener('click',()=>{
    var mon = money.value;
    if(isNumeric(mon)){
        mon = parseInt(mon);
        if(mon<0){
            money.value = "";
            alert("You cannot deposit a negative amount");
        }else{
            currPerson.fund += mon;

        }
    }
    else
    {
        money.value = "";
        alert("You did not enter a numeric value!");
    }

});

/*
    The purpose of this function is to check if the string is numeric
    This functions was obtained from the following website: 
    https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
*/
function isNumeric(str){
    if(typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));

}

/* This is the functionality for the send money page */
sendMon.addEventListener('click',()=>{
    let users = getUsers();
    let email = sendEmail.value;
    let amnt = parseInt(amount.value);
    if(users[email]==undefined)
    {
        alert("The email that you entered is not in our database");
        sendEmail.value = "";
    }
    else
    {
        let nextPeron = users[email];
        if(currPerson.funds-amount<0){
            alert("You do not have enough money to fund this transaction.");
        }else{
            nextPeron.funds += amount;
            currPerson.funds -= amount;
            alert("Your transaction has been completed");
        }
    }
});
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


/* This is the functionality for the launch page */
login.addEventListener('click', ()=>{
    invalidEmail.style.visibility = 'hidden';
    invalidPassword.style.visibility = 'hidden';
    let users = getUsers();
    currEmail = email.value;
    currPassword = password.value
    if(users[currEmail]==undefined){
        invalidEmail.style.visibility = 'visible';
    }else{
        if(users[currEmail].password == currPassword){
            //Put the current person object into this global variable currPerson = ;
           window.location.href = 'home page.html';
           email.value = "";
           password.value = "";
        }else{
            invalidPassword.style.visibility = 'visible';
        }
    }


});




//This function is responsible for getting the json
//file and then returning
function getUsers(){
    return {
        "saadahmed0718@gmail.com" : {
            "fname": "Saad",
            "lname" : "Ahmed",
            "dob": "18/07/2001",
            "address": "13 Regency Place, Brockville, Ontario, Canada",
            "password" : "testing"
        },

        "saadahmed5@cmail.carleton.ca" : {
            "fname": "Saad",
            "lname" : "Ahmed",
            "dob": "18/07/2001",
            "address": "13 Regency Place, Brockville, Ontario, Canada",
            "password" : "test"
        }
    };
}