// substr funtion ---------------------------->>
/*document.write ('<br>');
sub_str1 = str.substr (21); // powerfull language
sub_str2 = str.substr (21, 9); // only powerfull
document.write (sub_str1);
document.write ('<br>');
document.write (sub_str2); */

// To Anver: For our KLMS Project wrtie a small program to find the types of fruites from the content

/* Lorem Ipsum is type:orange dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since type:mango 1500s, when an unknown printer took a type:apple of type and scrambled it to make a type
 */

document.write ('You can do it!! <br>');

contextstr =
  'Lorem Ipsum is type:orange dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since type:mango 1500s, when an unknown printer took a type:apple of type and scrambled it to make a type';

// var len = contextstr.length;
// document.write(len);

var count = 0;
while (true) {
  var findpos = contextstr.indexOf ('type:', count);
  if (findpos == -1) break;
  var startpos = findpos + 5;
  var endpos = contextstr.indexOf (' ', startpos);
  var printcat = contextstr.substring (startpos, endpos);
  document.write (printcat + '<br>');
  count = endpos + 1;
}
