function calAge(){
    var birthYear = prompt("Which year did you born?");
    var currentAge = 2021 - birthYear;
    var h1 = document.createElement("h1"); 
    var textAnser = document.createTextNode("You are " + currentAge + " years old");
    h1.setAttribute('id', 'crntAge');
    h1.appendChild(textAnser);
    document.getElementById('flex-box-result').appendChild(h1);
}


function reset(){
    document.getElementById('crntAge').remove();
    document.getElementById('flex-box-result').remove();
    
}