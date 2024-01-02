const mongoose=require('mongoose')
const validator=require('validator')

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
        validate:{
            validator:function(el){
                return (el>=18 && el<=55) ;
            },
            message:"Age must be between 18 and 55"
        }
    },
    number:{
        type:String,
        required:true,
        validate:{
            validator:function(el){
                return (el.length==10)
            },
            message:"Number must be of 10 digits"
        }
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail, "Not a valid email"]
    },
    address:{
        type:String,
        required:true,
    },
    enrollmentDate:{
        type:Date,
        required:true,
    },
    batch:{
        type:String,
        required:true,
    }
})

const User=mongoose.model('User', userSchema);
module.exports=User;