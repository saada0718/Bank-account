const { doubleclickbidmanager } = require("googleapis/build/src/apis/doubleclickbidmanager");

const fs = require('fs');
var currPerson = users[localStorage['email']];

/* This function is going to be ran when the page starts */
function onStart(){
    temp = getUsers()["saadahmed0718@gmail.com"].head;
    while(temp != null){
        var newDiv = document.createElement('div');
        var texthere = document.createTextNode(temp.date[0] + ": $" + temp.date[1]);
        newDiv.appendChild(texthere);
        var addHere = document.getElementById('addHere');
        addHere.appendChild(newDiv);
        temp = temp.next;
    }
}

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


