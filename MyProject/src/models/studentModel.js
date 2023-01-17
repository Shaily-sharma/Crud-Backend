const mongoose=require("mongoose");
const validator=require("validator")
//Schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,required:true,
    },
    course:{
        type:String,required:true,
    },
    email:{
        type:String,required:true,
        unique:[true,"Email id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(" Email not valid")
            }
        }
    },
    contact:{
        type:Number,required:true,
        minLength: 10,
        maxLength: 10,
        unique:true,
    }
}) ;
//we will create new collection
const Student = new mongoose.model("StudentUser", studentSchema);
module.exports = Student;