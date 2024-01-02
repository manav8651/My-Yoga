const cors=require('cors')
const express=require('express')
const router=require('./routes/userRoutes')

const app=express();


app.use(cors);
app.use(express.json());

app.use('/', router);

module.exports =app