// // let chalk = require("chalk");
// // let cowsay = require("cowsay");
// // let onelinerjoke = require("one-liner-joke");
// // let getRandomJoke = onelinerjoke.getRandomJoke();
// // console.log(getRandomJoke);
// // console.log(chalk.blueBright(cowsay.say({
// //     text :  getRandomJoke.body,
// //     e : "O-",
// //     T : "U",
// //     r: true,
// //     f: "Monaco"
// // })));

// // console.log(__dirname);
// // console.log(__filename)
  let path = require("path");
  let pathToHtml = path.join(__dirname,"contacts.html");
  let fs = require("fs");
 let http = require("http");
// let c = fs.readFileSync("index.html", "utf-8");
// let c2 = fs.readFileSync("contacts.html","utf-8");
// let count = 0;

let server = http.createServer(function(request,response){
 if (request.url === "/"){
    let indexPage = fs.readFileSync(pathToHtml);
response.writeHead(200, {"Content-Type": "text/html"});
response.end(indexPage);
 }else if(request.url === "/add"&& request.method ==="POST"){
    response.writeHead(302,{"location":"/"})
    let data = '';
    request.on('data', function(chunk){
        data += chunk;
    })
    request.on('end', function(){
        let searchParam = new URLSearchParams(data);
        let author = searchParam.get("author");
        let content = searchParam.get("content");
     let string = `
      <h2>${author}</h2>
      <h3>${content}</h3>`
      fs.appendFileSync(pathToHtml,string);
        response.end();
    })
 }
});
const port = 3000;
server.listen(port);

// // let buf = fs.readFileSync("D:\\webmiddle\\package.json");
// // let json = buf.toString()
// // let obj = JSON.parse(json);
// // let TargetPath = path.join("D:\\webmiddle\\package.json");
// // console.log(obj.order.products);
// // TargetPath = path.join(TargetPath);
// // let  s = fs.readFileSync("text.txt");
// // fs.writeFileSync("text.txt",s.toString().toUpperCase());


