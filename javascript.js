const login = document.getElementById('loginButton');
const password = document.getElementById('loginpassword');
const email = document.getElementById('loginemail');
const invalidEmail = document.getElementById('invalid-email');
const invalidPassword = document.getElementById('invalid-password');
/* There are the elements the "Create a new Account Page" */





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