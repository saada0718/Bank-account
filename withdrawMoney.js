/* There are the elements from the deposit menu */
const withdraw = document.getElementById('with');
const money = document.getElementById('withMon');


/* This is the functionality for the deposit money page */

withdraw.addEventListener('click',()=>{
    var users = getUsers();
    var mon = money.value;
    var currPerson = users[localStorage['email']];
    if(isNumeric(mon)){
        mon = parseInt(mon);
        if(mon<0){
            money.value = "";
            alert("You cannot withdraw a negative amount");
        }else{
            if(currPerson.funds - mon <0){
                currPerson.funds -= mon;
                alert("Your balance has been updated!");
                money.value = "";
                users[localStorage['email']] = currPerson;
                saveUsers(users);
            }else{
                alert("You do not have enough funds for this transaction!");
                money.value = "";
            }
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
            "funds": 0
        },

        "saadahmed5@cmail.carleton.ca" : {
            "fname": "Saad",
            "lname" : "Ahmed",
            "dob": "18/07/2001",
            "address": "13 Regency Place, Brockville, Ontario, Canada",
            "password" : "test",
            "funds":0
        }
    };
}

//The purpose of this function is to save the users to a json file
function saveUsers(usrObj){


}