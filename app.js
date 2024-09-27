const express=require('express')
const app=express()
const db=require('./db')
const feedback=require('./models/feedback')

const path=require('path')
const staticpath=path.join(__dirname,"../public")

app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use(express.static(staticpath))


app.set("view engine","hbs")
// app.set("views")



app.post("/index",async (req,res)=>{
    try{

      const data=new feedback({
        name:req.body.name1,
        number:req.body.mobile,
        mail:req.body.email,
        review:req.body.feedback
      } )

      const res=await data.save()
      console.log("data saved")
      console.log(res);
 }
 catch(err){
        console.log(err)
    }
})


app.get("/",(req,res)=>{
   res.render('index') 
})


app.listen(4000,()=>{
    console.log("listening....")
})

