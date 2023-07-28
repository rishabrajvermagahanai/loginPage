const express=require('express')
const app=express();

app.use('/',require('./routes/index'))
app.use('/checkout',require('./routes/razorPay'))


app.listen(3000,()=>{
    console.log("server is running on 3000")
})