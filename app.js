const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
let studentData = [];

app.use(cors());

 app.get("/students", (req,res) => {
    res.send(studentData);

 });

 app.post("/student", (req,res) => {
    let stringData = "";
    req.on("data",(data) => {
        stringData += data;
    });

    req.on("end",() => {
        studentData.push(JSON.parse(stringData));
        res.send("Data received successfully")
    });
 });

 app.get("/",(req,res) => {
    res.send("page not found")
 });

 const server = http.createServer(app);
 server.listen(3000,() => {
    console.log("server is running on 3000")
 });