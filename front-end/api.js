const express=require("express")
const cors = require("cors")
require('./db/config')
const user = require('./db/user');

const app=express();
app.use(express.json());
app.use(cors());

app.post("/register",async(req,resp)=>{
    const data =req.body;
    console.log(data);
    const result =  await user.create(data)
   // let result =await data.save();
    resp.send(result);
})

app.listen(5000);