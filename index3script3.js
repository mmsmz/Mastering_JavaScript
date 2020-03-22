var a = 5;
var b = 9;

/*document.write ('<br>' + 'var a = 5, var b = 9' + '<br><br>');
document.write ('a*b = ' + a * b + '<br><br>'); // op : 45
document.write ('a/b = ' + a / b + '<br><br>'); // op : 0.5555555555555556
document.write ('a%b = ' + a % b + '<br><br>'); // op : 5
document.write ('++a =' + ++a + '<br><br>'); // op : 6
document.write ('++a =' + ++a + '<br><br>'); // op : 7
document.write ('--a =' + --a + '<br><br>'); // op : 6
document.write ('--a =' + --a + '<br><br>'); // op : 5

document.write ('a-- =' + a-- + '<br><br>'); // op : 5
document.write ('a-- =' + a-- + '<br><br>'); // op : 4
document.write ('a++ =' + a++ + '<br><br>'); // op : 3
document.write ('a-- =' + a-- + '<br><br>'); // op : 4

document.write ('--a =' + --a + '<br><br>'); // op : 2
document.write ('a-- =' + a-- + '<br><br>'); // op : 2
document.write ('--a =' + --a + '<br><br>'); // op : 0
document.write ('a-- =' + a-- + '<br><br>'); // op : 0
*/
var c = 2;
var d = 4; // result: 6

//e =c+ d;
// document.write("result: " + e); // result: 6

/*c = c + d;
document.write ('result: ' + c);*/ c += d;
document.write ('result: ' + c);
result: 6;
document.write ("<br>");
document.write ("<br>");

// condition
if (3 <= 3) {
  document.write (" true");
}

if (3 == '3') { // data and value is same therefore its true
    document.write (" true ");
}
// restrict the data type and value to be equal ===
if(3 === '3') { false
    document.write (" false ");
}
if(3 === 3) { true
    document.write (" true ");
}

document.write ("<br>");
document.write ("<br>");

// logical condition  -------------->>>>>>>>>>>

if(9 == 9 || 4 ==8 ){ // true
    document.write (" true ");
}

if(9 == 9 && 5!=8 ){ // true
    document.write (" true ");
}

if(!(9==9)){ // false
    document.write (" false ");
}

if(!(9==8)){ // false
    document.write (" true ");
}