const dotnev=require("dotenv").config() // to make sure the env file can be accessed from here
const express=require("express");
const connectDB =require("./config/connectDB");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute"); //importing
const cors = require("cors");
const app=express();


//Middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin:["http://localhost:3000","https://task-manager-app.onrender.com"]
})); // to use the another port number that frontend is working on

app.use("/api/tasks",taskRoutes);

app.get("/",(req,res)=>{
    res.send("home page");
})






const PORT=process.env.PORT || 5000


const startServer=async()=>{   //to make sure database is connected first
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server running on port number ${PORT}`)
        });
    } catch (error) {
        console.log(error);
    }
}
startServer();