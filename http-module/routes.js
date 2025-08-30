const http = require("http");
const server = http.createServer((req, res)=>{
    const url = req.url;
    if (url === "/") {
        res.writeHead(200,{"content-type": "text/plain"});
        res.end("Home page");   
    }else if (url === "/projects"){
          res.writeHead(200,{"content-type": "text/plain"});
        res.end("Projects  Section"); 
    }else{
          res.writeHead(404,{"content-type": "text/plain"});
        res.end("Page not Found!"); 
    }
});

const port = 3000;
server.listen(port, ()=>{
    console.log(`server is now listening to the port ${port}`);
})