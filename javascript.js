const login = document.getElementById('loginButton');
const password = document.getElementById('loginpassword');
const email = document.getElementById('loginemail');
const invalidEmail = document.getElementById('invalid-email');
const invalidPassword = document.getElementById('invalid-password');

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
   
}