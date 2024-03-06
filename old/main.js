const express = require("express");
const app = express();

const port= process.env.port || 7000;

app.get('/', (req,res)=>{
    return res.json({message : "I am in node conatainer"});
});


app.listen(port,()=>console.log("Server listening on port on 7000"));