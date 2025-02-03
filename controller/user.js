const User = require('../model/user')
const bcrypt = require('bcrypt')

exports.registration = async (req, res) => {
    const {email, password} = req.body
    try{
        const existingUser = await User.findOne({email});
        if (existingUser){
        return res.status(400).json({message : "User already exists", existingUser})
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const user = await User.create({email, password : hashedPassword})
    res.status(200).json({message : "User registered successfully", User : user})
    }catch(error){
        console.log(error)
        res.status(500).json({message : "Server error", error : error})
    }
} 


