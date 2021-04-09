var computer = ['IBM', 'WSO2', 'DELL', 'HP', 'ASUS'];

document.write(computer);
document.write('<br>');
document.write(computer[2]);
computer[2] = 'IFS';
document.write('<br>');
document.write(computer[2]);

document.write('<br>');
document.write('<br>');
var fruits = [];
fruits[0] = 'Apple';
fruits[1] = 'Orange';
fruits[10] = 'Banana';

document.write(fruits);
document.write('<br>');

document.write('<br>');
fruits[2] = 'Cherry';
document.write(fruits);
document.write('<br>');
// associate array-------------------------------------->>>>>>
// associate array allows in many languages PHP but JS doesnt allow
// example

fruits['man'] = 'Mango';
document.write(fruits['man']);
document.write('<br>');

array = {key1: 'value1', key2: 'value2'};
document.write(array.key1);

array1 = {
  key1: 'value1',
  key2: function() {
    alert('HelloMethod');
  },
};

var method = array1['key2'];
document.write('<br>');
// alert(method); wrong approach
// Don't be fooled by this,  the method variable doesn't contain a string; it is a function object as you can prove by:

// therefore
// alert(typeof(method)); works!!

// another example
var computer = {model: '2016', ram: '8BG'};
document.write('My requirments are ' + computer.model);

// new array-------------------------------------->>>>>>
var vegetables = new Array('Onion', 'Lease', 'Lady Figure', 'Tomatos');

document.write(vegetables);
document.write('<br>');
document.write(vegetables[3]);
document.write('<br>');

// length method -------------------------------------->>>>>>

document.write(vegetables.length + '<br>');

vegetables[vegetables.length] = 'Carrot';
document.write(vegetables + '<br>');

// push method -------------------------------------->>>>>>
// adding  new element
// without this code vegetables[vegetables.length] = "Carrot";
vegetables.push('Garlic');
document.write(vegetables + '<br>');

// pop method -------------------------------------->>>>>>
// pop removes the last element
var lastname = vegetables.pop();
document.write(vegetables + '<br>');
document.write(lastname + '<br>');

// shift method -------------------------------------->>>>>>
// shift removes the first element
var firstname = vegetables.shift();
document.write(firstname + '<br>');
document.write(vegetables + '<br>');

// unshift method -------------------------------------->>>>>>
// unshift to update first elemment of the data
var update_F_E = vegetables.unshift('Curry Leaves');
document.write(update_F_E + '<br>'); // 5
document.write(vegetables + '<br>');

// splice method -------------------------------------->>>>>>
// add the element anywhere in the array
var splice_anywhere = vegetables.splice(2, 0, 'Beetroot', 'Salad');
// splice (after which element,delete nr elements after adding,'add any number of elements')
document.write(splice_anywhere + '<br>'); // nothing displays if you dont delete any.
document.write(vegetables + '<br>');

// removing element without adding
var splice_anywhere = vegetables.splice(2, 3); // count 2 + positiions of 3 will be delete
document.write(splice_anywhere + '<br>');
document.write(vegetables + '<br>');

// combin array method --------------------------------->>>>>>
document.write('<b>heading concat</b>' + '<br>');
var places = ['Markets', 'Malls', 'Complex'];
var places_combin = vegetables.concat(places);
document.write(places_combin + '<br><br>');

// sort array method --------------------------------->>>>>>
document.write('<b>heading sort</b>' + '<br>');
document.write(places_combin.sort() + '<br>');
document.write(places_combin + '<br><br>');

// reverse array method --------------------------------->>>>>>
document.write('<b>heading reverse</b>' + '<br>');
document.write(places_combin.reverse() + '<br>');
document.write(places_combin + '<br><br>');

// slice array method --------------------------------->>>>>>
document.write('<b>heading slice</b>' + '<br>');
var letter = places_combin.slice(3);
document.write(letter + '<br>');

document.write(places_combin + '<br>');
document.write(letter[1] + '<br><br>');

document.write('<b>heading slice</b>' + '<br>');
var lisx = places_combin.slice(0, 2);
document.write(lisx + '<br>');
document.write(places_combin + '<br>');
document.write(lisx[1] + '<br><br>');
