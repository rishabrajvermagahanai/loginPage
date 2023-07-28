const express=require('express')
const router=express.Router();
const RazorPay=require('razorpay')

const instance=new RazorPay({
    key_id:'rzp_test_P8ho6ZGnUIUFVF',
    key_secret:'VQArDwi6aCqXKqiNeKpPf7aM'
})


router.get('/',(req,res)=>{
    var options={
        amount: 3500*100,
        currency:'INR',
    };
    instance.orders.create(options,function(err,order){
        if(err){
            console.log(err);
        }else{
            console.log(order);
            res.send(order)
        }
    })
})

module.exports=router;