var paragraph = prompt("Type Here");
alert("You have written"+ paragraph.length + "characters, you have "+(140-paragraph.length)+" characters left.")
alert(paragraph.slice(0,140))