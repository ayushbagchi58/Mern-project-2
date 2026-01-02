require('dotenv').config()
const express=require('express')
const app=express()
const ejs=require('ejs')
const path=require('path')
const connectDB=require('./app/config/db');
const cors=require('cors')

connectDB()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs")
app.set("views","views")

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static(path.join(__dirname,'/uploads')));
app.use('/uploads',express.static('uploads'));

const homeRoute=require('./app/routes/homeRoute')
app.use(homeRoute)

const studentApiRoute=require('./app/routes/studentApi')
app.use('/api',studentApiRoute)

const productApiRoute=require('./app/routes/productApi')
app.use('/api',productApiRoute)

const studentEjsApiRoute=require('./app/routes/studentEjsRoute')
app.use(studentEjsApiRoute)
const PORT=process.env.PORT||3006
app.listen(PORT,()=>{
    console.log(`server is running on this ${PORT}`)
});
