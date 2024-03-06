import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get("/",(req,res)=>{
    res.json({message: "Hello from express server"});
});

app.get("/health",(req,res)=>{
    res.json({message: "Everyting is Healthy"});
});

app.listen(PORT,()=>{console.log(`Express Application started on port ${PORT}`);})