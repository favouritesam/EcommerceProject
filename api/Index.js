const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken")


mongoose.connect("mongodb+srv://favsam:chiChi11@cluster0.w3fajoy.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    })

app.listen(port, () => {
    console.log("Server is running on port 8000")
});

const User = require("./models/User");
const Order = require("./models/Orders");

//function to send verification email to the user
const sendVerificationEmail = async (email,verificationToken) =>{
// create nodemailer transport
const transporter = nodemailer.createTransport({
    // configure the email service
    service:"gmail",
    auth:{
        user:"samourvaliant@gmail.com",
        pass:
    }
})
}

//endpoint to register in the application
app.post("/register", async(req,res) =>{
    try{
        const {name,email,password}= req.body;


        //chck the email already register
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res. status(400).json({message:"Email already registered"})
        }

        //create a new user
        const newUser = new User({name,email,password});
        
        //generate and store verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        // save the user to database
        await newUser.save();

        // send verifacation email to the user
        sendVerificationEmail(newUser.email,newUser,verificationToken)

    }catch(error){
        console.log("error registering user",error);
        res.status(500).json({message:"Registration failed",})
        
    }
})