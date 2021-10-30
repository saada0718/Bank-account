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