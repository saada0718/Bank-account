/* There are the elements from the deposit menu */
const depo = document.getElementById('depo');
const money = document.getElementById('depoMon');


/* This is the functionality for the deposit money page */

depo.addEventListener('click',()=>{
    var users = getUsers();
    var mon = money.value;
    var currPerson = users[localStorage['email']];
    if(isNumeric(mon)){
        mon = parseInt(mon);
        if(mon<0){
            money.value = "";
            alert("You cannot deposit a negative amount");
        }else{
            currDate = datetime();
            currPerson.funds += mon;
            currPerson.head = add(currPerson.head,[currDate,mon]);
            currPerson.all[currDate] = mon;
            alert("Your balance has been updated!");
            money.value = "";
            saveUsers(users);
        }
    }
    else
    {
        money.value = "";
        alert("You did not enter a numeric value!");
    }

});

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