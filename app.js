
const express = require('express');
const connection = require('./db');
const cors = require('cors')
const authRouter = require('./routes/auth.router');
const taskRouter = require('./routes/task.router');
const port=process.env.PORT || 5000;

const app =express();

app.use(cors())
app.use(express.json())

 app.use("/auth", authRouter)
 
 app.use("/user",taskRouter)

app.get("/",(req, res)=>{
  res.send('server is started sucessfull')


})

app.listen(port || 5000,async()=>
{  
    try{
              await connection
              console.log( `connected to server port ${port} sucessfully`)
    }catch{
              console.log("oops something went wrong")
    }      
}) 


// require("dotenv").config();
// const express = require('express');
// const connection = require('./db');
// const connection2 = require("./db2")
// const cors = require('cors')
//  const authRouter = require('./routes/auth.router')
// const taskRouter=require("./routes/task.router");
// const port=process.env.PORT || 5000;

// const app =express();

// app.use(express.json())
// app.use("/auth", authRouter)
// app.use("/user",taskRouter)

// app.get("/",(req,res)=>{
//    res.send("srver started")
// })

