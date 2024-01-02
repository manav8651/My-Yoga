const mongoose = require('mongoose');
const dotenv=require('dotenv');
const app=require('./app')

dotenv.config()

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true
}).then(()=>{console.log("Database is running")}).catch((err)=>{
    console.log("DB error:",err);
});


app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})

