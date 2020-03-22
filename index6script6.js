// break and continue statement
/*for (x = 1; x < 10; x++) {
    // if(x==5){
    //     document.write (x + '. This is a NEW Line.<br>'); 
    //      break;   
    // }
  document.write (x + '. This is a Line. <br>');
  if(x==5){
    document.write ('This is a NEW Line.<br>'); 
     break;   
   }
}
*/

for (y = 1; y < 10; y++) {
  
  if(y==5){
     continue; // will skip 
   }
   document.write (y+ '. This is a Line Y. <br>'); 
}

// local and global scope ----------------------------------->>>>>>

var out_str = 'outside'; // this is also a global variable 

function str_func(){
    ara = 'Arafath Anver';
    lrr = 'Larry'; 
    var str = 'Learn with '+ ara +' and ' + lrr ; 
    // str variable; if you dont declare the variable type var then it will be global variable  
    document.write(str);
}
document.write ('<br>'); 
str_func();
document.write ('<br>'); 
document.write (str); // since var is declared it will be a local variable and not displayed
//NOTE : creating variable inside a function is called the global variable but this should be local variable within in the function therfore use datatype 'Let'

//NOTE : 

// Events ----------------------------------->>>>>>

function func3(a,b) {
   a *= b;
   document.write(); 
}