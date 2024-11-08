prompt("What is your Name?");
prompt("What is your Crush's Name?");

n = Math.floor(Math.random()*101);

if(n===100){
    alert("Your Love Score is "+ n +"%"+", You and your crush are meant to be together");
}else if(n>70){
    alert("Your Love Score is "+ n +"%"+", You and your crush have a good chance of being together");
}else if(n>30){
    alert("Your Love Score is "+ n +"%"+", You and your crush have a small chance of being together");
}else{
    alert("Your Love Score is "+ n +"%"+", You and your crush are not meant to be together");
}
