var name = prompt("What is your name?");
var firstLatter = name.slice(0,1);
var remainingLetters = name.slice(1,name.length);

alert(firstLatter.toUpperCase()+remainingLetters.toLowerCase())