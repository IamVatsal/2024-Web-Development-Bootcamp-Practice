var count = 99;
function beer(){
    while (count>=0){
        if (count===0){
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
        }else if (count===1){
            console.log(""+count+" bottle of beer on the wall, "+count+" bottle of beer. Take one down and pass it around, "+"no more"+" bottles of beer on the wall.")    
        }else{
            console.log(""+count+" bottles of beer on the wall, "+count+" bottles of beer. Take one down and pass it around, "+(count-1)+" bottles of beer on the wall.")
        }
        count--;
    }
}