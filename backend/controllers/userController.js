const User =require('../models/User')

const registerUser=async (req, res)=>{
    try{
        const user=await User.create(req.body)
        if(user){

            res.status(201).json({
                status:"Success",
                message:"User Successfully Created"
            })
        }
        else{
            res.status(400).json({
                status:"Failure",
                message:"Invalid User Data"
            })
        }
    }
    catch(err){
        res.status(500).json({
            status:"Failure",
            message:"Internal Server Error"
        })
    }
}

const completePayment= (req, res)=>{
    res.status(200).json({
        status:"Success"
    })
}

const updateBatch=async (req, res)=>{
    const user=User.find({email:req.body.email});
    if(user){
        if(user.batch===req.body.batch){
            return res.status(400).json({
                status:"Failure",
                message:"Same batch, choose different"
            })
        }
        user.batch=req.body.batch;
        await user.save();
        res.status(201).json({
            status:"Success",
            message:"Batch Updated"
        })
    }
}

module.exports= {registerUser, completePayment, updateBatch}

