const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


// Generate Token
const generateToken = (userId) => {
    return jwt.sign(
        {id: userId}, 
        process.env.JWT_SECRET, 
        {expiresIn: "1d"}
    )
};



const registerUser = async(req, res) => {
    try {
        const {name, email, password, profileImageUrl} = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({message: "Please Enter all Fields"});
        }
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "User Already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            profileImageUrl,
        });

        return res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            profileImageUrl: user.profileImageUrl,
            token: generateToken(user._id)
        });
    } catch(error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }
}


const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "Invalid Credentials"})
        }
        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid Credentials"})
        }

        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            profileImageUrl: user.profileImageUrl,
            token: generateToken(user._id),
            message: "Login Successful"
        })
    } catch(error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }
}



const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if(!user) {
            return res.status(400).json({message: "Invalid User"});
        }
        return res.status(200).json(user);
    } catch(error){
        res.status(500).json({message: "Server Error", error: error.message});
    }
}



module.exports = {registerUser, loginUser, getUserProfile};