const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer"); 

// server used to send emails 
const app = express();
app.use(cors());
app.use(express.json());
app.use("/",router);
app.listen(5000,()=> console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth : {
        user: "*********@gmail.com",
        pass: ""
    },
});

router.post("/contact",(req,res)=>{
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "*******@gmail.com",
        subject : "Contact Form Submission - Portfolio",
        html: 
        `<p>${name}</p>
        <p>${email}</p>
        <p>${phone}</p>
        <p>${message}</p>`,
    };
    contactEmail.sendMail(mail,(error)=> {
        if(error){
            req.json(error);
        }
        else{
            req.json({code:2000,status:"Message sent"}); 
        }

    });
});