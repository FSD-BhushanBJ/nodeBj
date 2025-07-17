const http = require("http");
const url = require("url");
 
 
let studentData = [
        // {
        //     name: "mayank",
        //     subject: "HTML",
        //  }
         
        // {
        //     name: "bhushan",
        //     subject: "CSS",
        // },
        // {
        //     name: "ashish",
        //     subject: "Javascript"
        // }
    ];
 
 
const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.headers["user-agent"]);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTION");
   
 
    if(req.method == "GET" && req.url === "/students"){
        res.writeHead(200, {"Content-Type": "application/json"});
 
        res.write(JSON.stringify(studentData));
        res.end();
    }else if (req.method == "POST" && req.url === "/student"){
        let stringData = "";
 
        req.on("data", (data) => {
            stringData += data;
        });
        req.on("end", () => {
            console.log(stringData)
            const student = JSON.parse(stringData);
            studentData.push(student);
           res.writeHead(200, { "Content-Type": "application/json" });
            res.write( "Message Received" );
            res.end();
        });
    }
 
 
     else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not found");
        res.end();
    }
});
server.listen(4000, () => {
    console.log("MY SERVER IS RUNNING ON PORT 4000");
});
// const studentData = [];

// const server = HTMLOutputElement.createServer((req,res) => {
//     console.log(req.headers["user-agent"]);

//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET,POST, PUT, DELETE,OPTIONS"
//     );

//     if(req.method == "GET" && req.url === "/students"){
//         res.writeHead(200, { "Content-Type":"application/json"});
        

//         res.write(JSON.stringify(student))
//     }
// })
// // const http = require("http");
// const url = require("url");

// const studentData = [
//   { name: "bhushan", subject: "HTML" },
//   { name: "shruti", subject: "Dancing queen" }
// ];

// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//   console.log(req.headers["user-agent"]);

//   if (req.method === "OPTIONS") {
//     // For CORS preflight
//     res.writeHead(204);
//     res.end();
//     return;
//   }

//   if (req.method === "GET" && req.url === "/students") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(studentData));
//   }

//   else if (req.method === "POST" && req.url === "/students") {
//     let body = "";

//     req.on("data", chunk => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       try {
//         const newStudent = JSON.parse(body);
//         studentData.push(newStudent); // Add to array
//         res.writeHead(201, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Student added", data: newStudent }));
//       } catch (err) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ studentData: "Invalid JSON" }));
//       }
//     });
//   }

//   else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not found");
//   }
// });

// server.listen(4000, () => {
//   console.log("MY SERVER IS RUNNING ON PORT 4000");
// });


// const http = require("http");
 
// let arrayOfMessage = [];
 
// const server = http.createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
 
//     res.writeHead(200, { "Content-Type": "application/json" });
 
//     if (req.method === "GET" && req.url === "/get-messages") {
//         res.end(JSON.stringify(arrayOfMessage));
//     } else if (req.method === "POST" && req.url === "/post-message") {
//         let data = "";
//         req.on("data", (chunk) => {
//             data += chunk;
//         });
//         req.on("end", () => {
//             const parsedData = JSON.parse(data);
//             arrayOfMessage.push(parsedData?.msg || ""); // safer handling
//             res.end(JSON.stringify({ message: "Message Received" }));
//         });
//     } else {
//         res.end(JSON.stringify({ message: "Not Handled" }));
//     }
// });
 
// server.listen(4000, () => {
//     console.log("MY SERVER IS RUNNING ON PORT 4000");
// });
 