// string function

str = 'javascript is a most powerfull language';

str1 = 'javascript Is a MOST powerfull language';

// to uppercase --->>
document.write('with function ' + str + '<br>');

document.write(str.toUpperCase());
document.write('<br>');
document.write(str);
document.write(str1.toLowerCase());

document.write('<br>');
document.write('<br>');
// substring ------------>>
substr = str.substring(21); // words from powerful
document.write(substr);

document.write('<br>');
substr1 = str.substring(21, 30); // powerful
document.write(substr1);

// replace function ------------->>>>>
document.write('<br>');
rep_str = str.replace(' a ', ' the ');
document.write(rep_str);

// indexof function ------------->>>>>
document.write('<br>');
get_pos = str.indexOf('most');
document.write(get_pos);

// lastindexof function ------------->>>>>
document.write('<br>');
getlastposi = str.lastIndexOf('e');
document.write(getlastposi);

// substr funtion ---------------------------->>
document.write('<br>');
sub_str1 = str.substr(21); // powerfull language
sub_str2 = str.substr(21, 9); // only powerfull
document.write(sub_str1);
document.write('<br>');
document.write(sub_str2);

// write a small program to find the types of category from the content

/* Lorem Ipsum is category:funiture dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since category:sofa 1500s, when an unknown printer took a category:galley of type and scrambled it to make a type
 */
document.write('<br><br><br>');

contextstr =
  'Lorem Ipsum is category:funiture dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since category:sofa 1500s, when an unknown printer took a category:galley of type and scrambled it to make a type';

// var len = contextstr.length;
// document.write(len); 260

var count = 0;
while (true) {
  var findpos = contextstr.indexOf('category:', count);
  if (findpos == -1) break;
  var startpos = findpos + 9;
  var endpos = contextstr.indexOf(' ', startpos);
  var printcat = contextstr.substring(startpos, endpos);
  document.write(printcat + '<br>');
  //x++;
  count = endpos + 1;
}

// var s = 'Price:$20 is very cheap Price:$30';
// var ct =0;
// while(true){
// var s1 = s.slice(6, s.indexOf(' ')+ct);
// var s2 = s.slice(s.indexOf(':') + 1, s.indexOf(' '));
// var s3 = s.slice(s.indexOf('$'), s.indexOf(' '));
// document.write(s3);
// }

// var contextstr =
//   'Lorem Ipsum is category:funiture dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since category:sofa 1500s, when an unknown printer took a category:galley of type and scrambled it to make a type';

// const matches = [...contextstr.matchAll(/(?<=category:)[\S]+/g)];
// document.write(`${matches.join('\n')}<br>`);

// document.write('<br><br><br>');

// var contextstr =
//   'Lorem Ipsum is category:funiture dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since category:sofa 1500s, when an unknown printer took a category:galley of type and scrambled it to make a type';

// var splitArray = contextstr.split("category:");
// splitArray.shift(); //Remove first item
// splitArray.forEach(split => {
//   document.write(split.split(" ")[0] + " ");
// });

// var contextstr =
//   'Lorem Ipsum is category:funiture dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since category:sofa 1500s, when an unknown printer took a category:galley of type and scrambled it to make a type';

// var pos = 0;
// var printcat = '';
// while ((pos = contextstr.indexOf('category:'))) {
//   contextstr = contextstr.substring(pos + 9);
//   let cat = contextstr.substring(0, contextstr.indexOf(' '));
//   contextstr = contextstr.substring(cat.length + 1);
//   printcat += cat + '<br>';
// }
// //document.write(printcat);
// console.log(printcat);
