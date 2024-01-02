// const express=require('express');
const express = require("express");
const {registerUser, completePayment, updateBatch} =require('../controllers/userController')

const router=express.Router();
router.post('/',registerUser);
router.post('/payment', completePayment );
router.patch('/updateBatch', updateBatch);

module.exports= router