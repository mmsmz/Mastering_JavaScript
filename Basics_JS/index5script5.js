// function is called script within a script

document.write ('outside the function <br>');

//--------------------------------------function 1
function func1 () {
  document.write ('inside the function');

  // do call the doc.write we; call the name of the function
}
document.write ('outside the function <br>');
func1 (); // this prints calls becoz its placed here simple!!
document.write ('<br><br>');

//--------------------------------------function 2 alert
function funcalert () {
  alert ('hi \n there'); // this works only when the button is clicked
}

//--------------------------------------function 3 prompt
function funprompt () {
  pmt = prompt ('Enter your Name ', '');
  document.write (pmt);
}

//--------------------------------------function 4 sending single parameter

function func2 (x) {
  //x= 'Arafath';
  document.write ('hello Mr. ' + x + ' ! hope you are enjoying coding');
}
func2 ('Mike'); // since you are calling the method it displays here
document.write ('<br>');
func2 ('benny');

//--------------------------------------function multiple parameters
function func3(a,x){
  document.write ('hello ' +  a+  ' ' + x + ' ! hope you are enjoying coding');
}
document.write('<br>');
document.write('<br>');
func3('Miss', 'Nilla');
document.write('<br>');
func3('Mrs', 'Sharmila');