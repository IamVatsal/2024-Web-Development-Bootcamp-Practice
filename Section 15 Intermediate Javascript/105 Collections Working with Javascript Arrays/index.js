var guestList = ["Angela", "Jack" , "Pam" , "James" , "Lara" , "Jason", "Vatsal" , "Ben", "Jenny", "Michael", "Chloe"];

guestName = prompt("What is Your Name?");

if (guestList.includes(guestName)){
    alert("Welcome!");
}else{
    alert("Sorry, maybe next time.");
}