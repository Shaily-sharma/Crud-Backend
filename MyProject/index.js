const express = require("express");
require("./src/database/db.js");
const PORT=7000;
const app=express();
const router=require("./src/router/studentRouter")
app.use(express.json());
app.use(router);
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})

