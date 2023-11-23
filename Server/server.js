let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let morgan = require("morgan");
let multer = require("multer");



let connectToMDB = async()=>{
    try {
       await mongoose.connect("mongodb+srv://chirrasandhya98:Pulse@cluster0.jme9se8.mongodb.net/?retryWrites=true&w=majority");
       console.log("Successfully connected MDB ");
        
    } catch (error) {
        console.log("Unable to connecte MDB");
        
    }
   
}

let app = express();
app.use(cors());
app.use(express.json());


const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, 'uploads')
  },
  filename:(req, file, cb)=>{
     console.log(file);
    
    cb(null, `${Date.now()}_${file.originalname}`);
 },
});


app.post("/validateLogin", async(req,res)=>{
    console.log(req.body);
  
    let userDetails = await User.find().and
    ({email:req.body.email});
    
    console.log(userDetails);
  
    if(userDetails.length == 0){
  
      res.json({status:"failure",msg:"User doesnot exist."});
    }
    else{
  
      if(userDetails[0].password == req.body.password){

        res.json({status:"success",
        msg:"Valid Credentials",
        data:userDetails[0],});
      }
      else{
      
        res.json({status:"failure",msg:"Incorrect password"});
      }
    }
  })

app.post("/signup",async (req,res)=>{
    console.log("We have received the request from client");
    console.log(req.file);
    console.log(req.body);
  
    let userDetails =  await User.find().and({email:req.body.email});
  
    if(userDetails.length > 0){
      res.json({status:"failure",msg:"User already exists"});
    }
  
    else{
  
     try {
  
        let newUser = new User({
            firstName:req.body.fn,
            lastName:req.body.ln,
            email:req.body.email,
            password:req.body.password,
            mn:req.body.mobileNumber,
            profilePic:req.file.path,
            gender:req.file.path,
            reenter:req.file.path,
           });
           await User.insertMany([newUser]);
           res.json({status :"success",msg:"User Created Successfully"});
        
        
    } catch (error) {
        res.json({status:"failure",msg:"err"})
    }
  }
  });
  
  


app.listen(1414,()=>{
    console.log("Listening  to port 2222 ");
})


connectToMDB();

