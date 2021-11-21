const mongoose=require('mongoose');
const {Schema}=mongoose;
const student=new Schema(
    {
        Name: String,
        Registration_Number: Number,
        Mark: Number
    });
module.exports=mongoose.model("Students",student,"StudentMarks");
