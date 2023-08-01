const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/Console_Page/index.html")
});

app.use(express.static("Console_Page"));

app.listen(3000, function(){
    console.log("Server running successfully on port 3000")
})
