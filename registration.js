const RegEmail = document.getElementById('Regemail');
const Regfname = document.getElementById('Regfname');
const Reglname = document.getElementById('Reglname');
const Regdob = document.getElementById('Regdob');
const Regpassword = document.getElementById('RegPassword');
const RegReenterPassword = document.getElementById('RegReenterPassword');
const submitButton = document.getElementById('submitButton');
const ModalContent = document.getElementById('modal');
const Modal = document.getElementById('simpleModal');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

closeBtn.addEventListener('click', ()=>{
    ModalContent.innerHTML = "";
    Modal.style.display = 'none';
});


submitButton.addEventListener('click' , ()=>{

    let dataBase = getUsers();
    let currEmail = RegEmail.value;
    let valEmail = validEmail(currEmail);
    let notPresent = dataBase.currEmail == undefined;
    let fname = Regfname.value;
    let lname = Reglname.value;
    let dob = Regdob.value;
    let valDOB = validDOB(dob);
    let password = Regpassword.value;
    let valPassword = validPassword(password);
    let samePassword = password === RegReenterPassword.value;

    if(
        valEmail
        && notPresent
        && valDOB
        && valPassword
        && samePassword
    ){
        //Put the infromation in to the file
        dataBase[currEmail] = { "fname": fname,
        "lname" : lname,
        "dob": dob,
        "password" : password};
        saveJson(dataBase);
        clearElements();
        
    }else{
        //Create a modal that states what the person got wrong
        var wrong = "Please make make the following adjustments: ";
        if(!valEmail) wrong += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- The email is wrong";
        if(!notPresent) wrong += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- The emails is already in the database try a new email";
        if(dob==="") wrong+="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Enter an age"
        else if(!valDOB) wrong+="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- You are not old enough. You need to atleast be 18 years old";
        if(!valPassword) wrong += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Password requires ( atleast 1 lower-case letter, \natleast 1 upper-case\natleast one number\n needs to be atleast 8 characters long";
        if(!samePassword) wrong+="<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- The passwords do not match";
        ModalContent.innerHTML = wrong;
        wrong = "";
        Modal.style.display = 'block';
        
    }
});

function clearElements(){
    RegEmail.value = "";
    Regfname.value = "";
    Reglname.value = "";
    Regdob.value = "";
    Regpassword.value = "";
    RegReenterPassword.value = "";
}

//This function checks if the password meets the minimum criteria
function validPassword(password){
    return (
        (password.length>=8)
        &&  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
        && /\d/g.test(password)
        && password.toUpperCase() != password
    );
}


function validDOB(dob){
    var optimizedBirthday = dob.replace(/-/g, "/");
    var myBirthday = new Date(optimizedBirthday);
    var currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';
    var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));
    return (myAge >= 18);
}


function validEmail(currEmail){
    //This function is responsbile for checking if the email in the elements is valid
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return currEmail.match(pattern);
}

//file and then returning
function getUsers(){
    return {
        "saadahmed0718@gmail.com" : {
            "fname": "Saad",
            "lname" : "Ahmed",
            "dob": "18/07/2001",
            "password" : "testing"
        }
    };
}


//This function is responsible for saving the JSON file
function saveJson(obj){

}