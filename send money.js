/* These are the elements from the transaction history */
const sendMon = document.getElementById('sendMon2');
const sendEmail = document.getElementById('sendemail');
const amount = document.getElementById('amount');
/* This is the functionality for the send money page */

sendMon.addEventListener('click',()=>{
    let users = getUsers();
    let email = sendEmail.value;
    let amnt = amount.value;
    if(users[email]==undefined)
    {
        alert("The email that you entered is not in our database");
        sendEmail.value = "";
    }
    else
    {
        let nextPerson = users[email];
        let currPerson = users[localStorage['email']];
        if(!isNumeric(amnt)){
            alert("Please enter a numeric value");
            return;
        }
        amnt = parseFloat(amnt);
        if(currPerson.funds-amnt<0){
            alert("You do not have enough money to fund this transaction.");
        }else{
            nextPeron.funds += amnt;
            var currDate = datetime();
            nextPerson.head = add(nextPerson.head,[currDate,amnt]);
            currPerson.head = add(currPerson.head,[currDate,-amnt]);
            currPerson.past90.push([currDate,amnt]);
            nextPerson.all[currDate] = amtn;
            currPerson.all[currDate] = -amnt;
            currPerson.funds -= amnt;
            saveUsers(users);
            alert("Your transaction has been completed");
        }
    }
});
//The purpose of this function is to record the transaction in a linked-list
function add(head,ttl){
    var i = 0;
    var temp = head;
    while(temp != null){
        temp = temp.next;
        i = i+1;
        if(i==90){
            head.date = ttl;
            break;
        }
    }
    if(i<90) temp.next = { 'date': ttl,'next':null};
    return head;
}

function datetime(){
    var currentdate = new Date();
    return currentdate.getMonth() + '/' + 
    currentdate.getDate() + '/'+
    currentdate.getFullYear() +  '/'+
    ' ' + 
    currentdate.getHours() +
    ':' + 
    currentdate.getMinutes();
}
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
            "funds" : 0
        },

        "saadahmed5@cmail.carleton.ca" : {
            "fname": "Saad",
            "lname" : "Ahmed",
            "dob": "18/07/2001",
            "address": "13 Regency Place, Brockville, Ontario, Canada",
            "password" : "test",
            "funds": 0
        }
    };
}

//The purpose of this function is to save the users to a json file
function saveUsers(usrObj){


}