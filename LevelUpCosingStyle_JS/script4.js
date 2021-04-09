// user Arrow function to write Concise Anonymous Functions

// var magic = function(){
//             return new Date;
// }

const magic = () => new Date;
console.log(magic);

// combining into another array  ---------------------
// convert this to an arrow function

// var myContact = function(arr1, arr2){
//     return arr1.concat(arr2);
// };
// console.log(myContact([1,2],[3,4,5]));

const myContact = (arr1, arr2) => arr1.concat(arr2);
console.log(myContact([1,2],[3,4,5]));

//-------------------------------------------------------------
// write Higher Order Arrow Fuctions 
/*
const realNumberArray = [4, 5.6, -9.8, 3.14, 42,6, 8.34, -2];

const squareList = (arr) => {
    const squareIntegers = arr;
    return squareIntegers;
}

const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers); */

//---


const realNumberArray = [4, 5.6, -9.8, 3.14, 42,6, 8.34, -2];

const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x *x);
    return squareIntegers;
}

const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers); 
