console.log("Hello")
// alert("asdsad")  

var v = 15;
console.log(v)

var b = "banana";
console.log(b)
document.getElementById("contentText").innerHTML = "Hello WOrld;"

// var age = prompt("what is your age");
// document.getElementById("contentText").innerHTML = "you are age is "+ age;
// ------------------------------------------------------------------------------------------------------------

var num1 = 10;

num1++;
num1--;
console.log(num1)


num1 += 10;
console.log(num1)

//--------------------------------------------------------------------------------------------------------------

let a = 10;
a += 5;
a -= 15;
console.log(a);

var outstr = "mohamed";
outstr += " anver";
console.log(outstr);

var lastLength = 0;
lastLength = outstr.length;
console.log(lastLength);


//--------------------------------------------------------------------------------------------------------------

// function greating(){
//     var name = prompt("what is your name?");
//     var restult = "Hello " + name;
//     console.log(restult)
// }

// greating();

/* function sum(num, num2){
    var totalm = num + num2;
    console.log(totalm)
}

sum(10,20)
--------------------------------------------------
var x = 0;
while(x<10){
    console.log(x);
    x+=2;
}
--------------------------------------------------
for(let nums = 0; nums<=10; nums++){
    console.log("Hi" + nums)
}*/

// Data Types 
let yourAge = 18; // number
let youname = "Anver"; // string 
let name = {first:'Jane', last: 'Doe'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges ']; // array
let random; // undefined
let nothing = null; // value null 

// Strings - (Common Methods)
let fruit = "banana";
let morefruit = "bananda\napple"; // new line
console.log(fruit.length);

console.log(fruit.indexOf('nan')) // output : 2
console.log(fruit.slice(2,6)) // output : nana
console.log(fruit.replace('ban','132')); // output : 132ana
console.log(fruit.toUpperCase()); // output :BANANA
console.log(fruit.toLowerCase()); // output :banana
console.log(fruit.charAt(2)); // opt: n
console.log(fruit[2]); // opt: n
console.log(fruit.split('')); // split by a comma
console.log(fruit.split(',')); // split by a character

let fruits = 'banana,apple,orange';
console.log(fruits.split(','));


// var is used with through out your whole program 
// let is used only within the scope where you have declared that
// const pi = 3.25; // varaible that cannot change;

