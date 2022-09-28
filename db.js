const mongoose = require('mongoose');
require("dotenv").config();
const DB = process.env.DATABASE
const connection = mongoose.connect(DB ,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log('conneted to dataBase')
}).catch((err)=>{
    console.log(err)
})
module.exports=connection; 


//mongodb+srv://shoaibp915687:3zhqr%uVxS*qNWK@cluster0.hukxgoj.mongodb.net/?retryWrites=true&w=majority

//mongodb+srv://dbUser:dbUser@cluster0.hukxgoj.mongodb.net?retryWrites=true&w=majority