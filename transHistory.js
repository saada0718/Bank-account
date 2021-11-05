const date  = 4;
const head = 5;
const option = document.getElementById('');
const cal = document.getElementById('');
const drop = document.getElementById('');
const submit = document.getElementById('');
let first = false;
option.addEventListener('click',()=>{
    if(first){
        //Enable the first
    } else {
        //Enable the second

    }
});



submit.addEventListener('click',()=>{
    if(first){
        if(drop.selectedIndex == -1){
            alert("Please pick a valid option before proceeding");
        }else{
            //Provide the information
        }
    }else{
        //Show the past 90 days of transaction
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