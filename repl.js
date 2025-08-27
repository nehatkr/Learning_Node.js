
const repl = require("repl")
const local = repl.start("The node console is started");
local.on("exit", ()=>{
    console.log("Exit the repl");
    process.exit();
})