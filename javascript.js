const login = document.getElementById('loginButton');
const password = document.getElementById('loginpassword');
const email = document.getElementById('loginemail');
const invalidEmail = document.getElementById('invalid-email');
const invalidPassword = document.getElementById('invalid-password');







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
           passPerson(currEmail);
           window.location.href = 'home page.html';
           email.value = "";
           password.value = "";
           
        }else{
            invalidPassword.style.visibility = 'visible';
        }
    }


});

//The purpose of this function is to pass the email to the next page
function passPerson(strEmail){

    localStorage.setItem("email",strEmail);
}


//This function is responsible for getting the json
//file and then returning
function getUsers(){
    return {
        "saadahmed0718@gmail.com" : {
            "fname": "Saad",
            "lname" : "Ahmed",
            "dob": "18/07/2001",
            "address": "13 Regency Place, Brockville, Ontario, Canada",
            "password" : "testing",
            "funds": 0,
            "all": {},
            "head": {}
        },

        "saadahmed5@cmail.carleton.ca" : {
            "fname": "Saad",
            "lname" : "Ahmed",
            "dob": "18/07/2001",
            "address": "13 Regency Place, Brockville, Ontario, Canada",
            "password" : "test",
            "funds":0,
            "all": {},
            "head": {}
        }
    };
}

//The purpose of this function is to save the users to a json file
function saveUsers(usrObj){


}