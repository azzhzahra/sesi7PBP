const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req,res) =>{
    res.send('hello,wordl!');
});
app.get("/about", (req,res) =>{
    res.send('hello,ini adalah halaman about');
});
app.get("/home", (req,res) =>{
    res.send('hello,ini adalah halaman home!');
});
app.post("/", (req,res) =>{
    res.send('hello,ini adalah halaman home!');
});
app.delete("/", (req,res) =>{
    res.send('hello,ini adalah halaman home!');
});
app.listen(port, () => {
    console.log(`server berjalan pada http://localhost:${port}`);
});


