const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');
const routes = require('./route/index');
const routes2 = require('./route/mobileroute');
dotenv.config()

const app = express();
app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND_URL
}))
app.use(cookieParser());
app.use(express.json());
app.use('/api',routes);
app.use('/apis',routes2);

const PORT = process.env.PORT || 5000
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is running on port :",PORT)
    })
})



