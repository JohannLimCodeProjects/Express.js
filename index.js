import express from "express";
const app = express();
const port = 3000;

app.listen(port,() => {
    console.log('Server running on port ${port}.');
});

app.get("/about",(req,res) => {
    res.send("<h1>About Page</h1>")
});

app.get("/contact",(req,res) => {
    res.send("<h1>johannlim01@gmail.com</h1>")
});

app.get("/", (req,res) => {
   res.send("<h1>Hello World</h1>"); 
});