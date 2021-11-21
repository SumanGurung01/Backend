const express = require("express");
const app = express();
const mongoose = require('mongoose');
const url="mongodb+srv://suman:Som75Tara80@cluster0.ikmpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const stu=require("./schema");
mongoose.connect(url).then(()=>console.log("Conected to DB"));
app.use(express.json())
app.post("/addpost",async(req,res)=>{
    const name=req.body.Name;
    const number=req.body.Registration_Number;
    const sub_marks=req.body.Mark;
    const st=new stu(
            {
                Name:name,
                Registration_Number:number,
                Mark:sub_marks
            }
        )
    const savedst=await st.save()
    res.json(
            {"message":"Student marks are saved","data":savedst}
            )
})
app.use("/",(req,res)=>{
  res.send("")
})
app.listen(3000,()=>console.log("Express Started"))
