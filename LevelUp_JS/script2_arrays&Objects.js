//ARRAY
// two ways to create the same Array
let  fruits = ['banana','orange','graps','papaya'];
//let  fruits = new Array ('banana','orange','graps','papaya');

// access value at index 2
//console.log(fruits[2])

fruits[0] = 'pears';
/*console.log(fruits[0])
console.log(fruits)*/

/*for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}*/

// array common methods 
console.log('to string', fruits.toString())
console.log(fruits.join('*'))
console.log(fruits.pop('*'), fruits) // removes last item 
console.log(fruits.push('blackberies'), fruits) // appends

// cool trick to add 
/* fruits[4] = 'promergranaid';
console.log(fruits); */ 

// or
console.log(fruits.length); // 4 

fruits[fruits.length] = 'new fruit';
console.log(fruits);

console.log(fruits.shift()); // removes first element from the list 
console.log(fruits);
console.log(fruits.unshift('kiwi')); // adds first element
console.log(fruits);


// conbine to arrays 
let vegis = ['leeks','cucumber','chille'];
let allGroceries = fruits.concat(vegis);
console.log(allGroceries)
console.log(allGroceries.slice(1,4))
console.log(allGroceries.reverse())
console.log(allGroceries.sort())


// sorting 
let somenumbers =  [5,3,2,8,6,9,1];
console.log(somenumbers.sort());

console.log(somenumbers.sort(function(a,b){return a-b;})); // ascending order
console.log(somenumbers.sort(function(a,b){return b-a;})); // decending order


let emptyArray = new Array();

for(let num = 0; num<=10;num++ ){
    emptyArray.push(num)
}
console.log(emptyArray)

// Advance Array ---------------------------------------------------------------------------------






//-----------------------------------------------------------------------
// Objects
let student = {
    first : 'Arafath',
    last : 'anver',
    age : 27,
    studentInfo:function(){
        return this.first + " " + this.last + "\n" + this.age;
    }
}

console.log(student.first)
console.log(student.studentInfo())
