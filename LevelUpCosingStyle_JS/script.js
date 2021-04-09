// Bracket Notation to Find first Character in String
var fistLetterOfName = "";
var firstName = "Mohamed Arafth";

fistLetterOfName = firstName[0];
console.log(fistLetterOfName); // M 

// Bracket Notation to Find Nth Character in String
fistLetterOfName = firstName[3];
console.log(fistLetterOfName); // a 

// Bracket Notation to Find the last Character in String
fistLetterOfName = firstName[firstName.length-1];
console.log(fistLetterOfName); // a 

// function challenge 1 

function wordBlanks(myNoun, myAdjectives, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjectives + myNoun + myVerb + myAdverb;
    return result;
}

console.log(wordBlanks(" dog", "big", " ran", " quickly."));


// ARRAYS 
// Store multiple values in Arrays;

var ourArray = ["John", 23];
console.log(ourArray);

ourArray[1]= 25;
console.log(ourArray);

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];
console.log(myArray[0]); // [1,2,3]
console.log(myArray[0][0]); // 1

console.log(myArray[3]); // [10, 11, 12], 13, 14

// 13
console.log(myArray[3][1]);

// var

function myLocalScope(){
 var bb = 10;
 console.log(bb);   
}
myLocalScope();
// myLocalScope(bb); connot access 

