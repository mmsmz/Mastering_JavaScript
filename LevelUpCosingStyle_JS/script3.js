var contacts = [
    {
        "firstName" : "Akira",
        "lastName" : "Laine",
        "age" : "25",
        "likes" : ["Pizaa","Coding","Swimming"]
    },
    {
        "firstName" : "Ijaas",
        "lastName" : "ahmed",
        "age" : "23",
        "likes" : ["Gaming","Dancing","KickBoxing","Hiking"]
    },
    {
        "firstName" : "Mujahid",
        "lastName" : "iqbal",
        "age" : "15",
        "likes" : ["Studying","Reading","Movies","Songs"]
    }
];


function lookUpProfile(name, prop){
    for(let i=0; i<contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] ||  "No such Properties";
        }
    }

    return "No Such Contact";
}
// change these values to test the function
var data = lookUpProfile("Akira", "likes");
console.log(data);


// -----------------------------------------------
// Generates random wholeNumber
var randomeNumberBetwn0And9 = Math.floor(Math.random() * 10);

function randomNumber(){
    return randomeNumberBetwn0And9;
    // return Math.floor(Math.random() *10);
}

console.log(randomNumber())

 // convert string to integer ----------------------------
function convertToInteger(str){
    return parseInt(str);
}

console.log(convertToInteger("56"));


// -------------------------------------------
// tinary operations 

function checkSign(num){
    "hi";
    return num > 0 ? "Positive" : num < 0 ? " negative" : "zero";
}

console.log(checkSign(-10));

// -----------------------------
// var vs let
/*
function checkScope(){
    "use Strict";
    var  i = "function scope";
    if(true){
        var i = "Block Scope";
        console.log("Block Scope i is: ", i);
    }
    console.log("Function Scope i is: ", i);
    return i;
}
console.log(checkScope());

Block Scope i is:  Block Scope
script3.js:75 Function Scope i is:  function scope
script3.js:79 function scope
*/

//-----------------------------------------------------

/*
function checkScope(){
    let i = "function scope";
    if(true){
        var i = "Block Scope";
        console.log("Block Scope i is: ", i);
    }
    console.log("Function Scope i is: ", i);
    return i;
}
console.log(checkScope());
//Uncaught SyntaxError: Identifier 'i' has already been declared
*/

function checkScope(){
    let i = "function scope";
    if(true){
        let i = "Block Scope";
        console.log("Block Scope i is: ", i);
    }
    console.log("Function Scope i is: ", i);
    return i;
}
console.log(checkScope());

// const  -----------------------

const s = [5,16,20];
s[0] =15;
console.log(s);
// *---------------------------- 

const y = 20;
y =15; // script3.js:121 Uncaught TypeError: Assignment to constant variable.
// console.log(y);


