if(process.env.NODE !== 'production'){
    require("dotenv").config()
} 



const express=require("express");
const { connectDB, run } = require("./src/config/db.config");
const app=express()
console.log(process.env.MONGOURL)
connectDB()
const PORT =process.env.PORT || 4000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/user',require('./src/routes/user.route'))

app.listen(PORT,()=>{
    console.log("corriendo")
})

