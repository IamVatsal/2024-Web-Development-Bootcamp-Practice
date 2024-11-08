var names = ["Angela", "Jack" , "Pam" , "James" , "Lara" , "Jason", "Vatsal" , "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names){
    var n = Math.floor(Math.random()*names.length);
    return (names[n])+" is going to buy lunch today!";
}
