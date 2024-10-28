import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        
        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        // Check if the user already exists
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const profilePic = gender === 'male' 
            ? `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`
            : `https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName, 
            username,
            password: hashedPassword,
            gender, 
            profilePic
        });

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        }
        else{
            return res.status(400).json({ error: "Invalid user data" });
        }   
        
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
        console.log(error);
    }
};

export const login = (req, res) => {
    console.log("Login route");
    res.status(200).send("Login successful");
};

export const logout = (req, res) => {
    console.log("Logout route");
    res.status(200).send("Logout successful");
};
