const express= require("express")
const mongoose=require("mongoose")
const cors= require("cors")


const dburl="mongodb://localhost:27017/smsdb"
mongoose.connect(dburl).then(() => {
    console.log("connected to db succesfully")
}).catch((err) => {
    console.log(err.message)
});



const app=express()
app.use(express.json())
app.use(cors())

const adminrouter=require("./routes/adminroutes")
const facultyrouter=require("./routes/facultyroutes")
const studentrouter=require("./routes/studentroutes")
app.use("",adminrouter)
app.use("",facultyrouter)
app.use("",studentrouter)


const port="2032"
app.listen(port,() =>
{
    console.log(`server is running at ${port}`)
})




