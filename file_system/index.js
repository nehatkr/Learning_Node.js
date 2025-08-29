const { log } = require("console");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created");

}

// sync way of writing code

const filePath = path.join(dataFolder,'example.txt');
fs.writeFileSync(filePath,'Hello from node.js');
console.log('file created succesfully');


const readContentFromFile = fs.readFileSync(filePath,'utf8');
console.log("File Content: ", readContentFromFile);

fs.appendFileSync(filePath, '\n This is the new line added to this file');
console.log('new content added');

