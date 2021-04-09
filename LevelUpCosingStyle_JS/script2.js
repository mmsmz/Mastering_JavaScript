var brandName = "Nike";

function myCloth(){
    var brandName = "Puma";
    return brandName;
}

console.log(myCloth());
console.log(brandName);

// Stand in line  -------------------------------------

function nextInLine(arr, item){
    // Your Code here 
    arr.push(item);
    // item = arr[0];
    item = arr.shift();
    return item;
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));

/*
        Before: [1,2,3,4,5]
        1
        After: [2,3,4,5,6]
*/
