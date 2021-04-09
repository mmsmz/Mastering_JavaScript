// associate array-------------------------------------->>>>>>
// associate array allows in many languages PHP but JS doesnt allow
// example

// fruits['man'] = 'Mango';
// document.write(fruits['man']);
// document.write('<br>');

array = {key1: 'value1', key2: 'value2'};
document.write(array.key1); // value1

array1 = {
  key1: 'value1',
  key2: function() {
    alert('HelloMethod');
  },
};

// var method = array1['key2'];
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

//----------------------------------------------->>>>>>

var computer1 = {
  model: '2016',
  ram: '8GB',
  type: 'laptop',
  fulltype: function() {
    //return computer.model;
    return this.model + ' ' + this.ram;
  },
}; // this method is literal method and the tutor like this method

document.write(computer1.fulltype());

var person = new Object();
person.fname = 'John';
person.lname = 'Mike';
person.height = '6&apos; Feet';
document.write('<br>');
document.write(person.fname + " " + person.lname  );
// but on the other hand this is the prefered method