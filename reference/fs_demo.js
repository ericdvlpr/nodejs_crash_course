const fs = require("fs");
const path = require("path");

// //Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

//Write file
fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello World", err => {
  if (err) throw err;
  console.log("File created...");

  //append file
  fs.appendFile(
    path.join(__dirname, "/test", "hello.txt"),
    "Hello World",
    err => {
      if (err) throw err;
      console.log("File created...");
    }
  );
});
