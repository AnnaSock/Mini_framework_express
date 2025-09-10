import express from "express";
import {env} from "./config/env.js"

const app = express();
const port= env.port;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/health", (req, res)=>{
    res.json({message: "Bienvenue"})
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})