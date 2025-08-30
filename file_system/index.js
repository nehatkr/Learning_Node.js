const { log } = require("console");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

// sync way of writing code

const filePath = path.join(dataFolder, "example.txt");
fs.writeFileSync(filePath, "Hello from node.js");
console.log("file created succesfully");

const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("File Content: ", readContentFromFile);

fs.appendFileSync(filePath, "\n This is the new line added to this file");
console.log("new content added");

// async way of creating a file
const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hellow ,Acync node js", (err) => {
  if (err) throw err;
  console.log("Async file is created successfully");

  fs.readFile(asyncFilePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Async file content: ", data);
    
    fs.appendFile(asyncFilePath, "\n This is another line added", (err) => {
      if (err) throw err;
      console.log("New line in the async file");

      fs.readFile(asyncFilePath, "utf8", (err, updatedData) => {
        if (err) throw err;
        console.log("updated file content", updatedData);
      });
    });
  });
});
