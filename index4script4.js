// switch---------------------------------

var name = 'larry';

switch (name) {
  case 'larry':
    document.write ('yes');
    break;
  case 'marry':
    document.write ('yes');
    break;
  case 'sam':
    document.write ('yes');
    break;
  default:
    document.write ('Invalide');
}
// for loop, while loop, do while loop and for each loop

// for loop ----------------------------------------->>>>>>>>
// for (a = 0; a <= 10; a++) {
//   document.write (a + ' hi <br>');
// }

// while loop --------------------------------------->>>>>>>>
/*var x = 0;
while (x <= 10) {
  document.write (x + ' x');
  x++;
}*/
document.write ('<br>');
// do while loop ------------------------------------>>>>>>>
var b = 0;
do {
  document.write ('hi<br>');
  b++;
  //document.write (b);
  //break;
} while (b <= 10); // 11 outputs of 'hi' and it starts from 1

document.write ('<br>');
document.write ('<br>');

var b = 0;
do {
  document.write (b + 'hello <br>');
  //break;
  //document.write (b);
  b++;
} while (b <= 10); // 11 outputs of 'hi' and here it starts frm zero