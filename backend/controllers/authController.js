const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Generate Token
const generateToken = (userId) => {
    return jwt.sign(
        {id: userId}, 
        process.env.JWT_SECRET, 
        {expiresIn: "1d"}
    )
};



const registerUser = async(req, res) => {

}


const loginUser = async (req, res) => {

}



const getUserProfile = async (req, res) => {
    
}



module.exports = {registerUser, loginUser, getUserProfile};