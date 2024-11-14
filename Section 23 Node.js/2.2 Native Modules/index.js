const fs = require("node:fs");

// fs.writeFile("vatsal.txt","Hello My Name is Vatsal",(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });

fs.readFile("vatsal.txt", "utf8", (err, data) => {
  // => null, <data>
  console.log("File content:", data);
});
