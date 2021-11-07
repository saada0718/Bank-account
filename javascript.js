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
//This function is responsible for getting the json
//file and then returning
function getUsers(){
    try{
        let jsonString = fs.readFileSync('./customer.json','utf-8');
        let customer = JSON.parse(jsonString);
        return customer;
    } catch (err){
        console.log(err);
    }
    return {};
}
