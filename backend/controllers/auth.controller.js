// In controllers/auth.controller.js (make sure this is in the correct directory)
export const signup = async (req, res) => {
    try {
        const {fullname, username, password, confirmPassword} = req.body;
    } catch (error) {
        console.log(error)
    }
}

export const login = (req, res) => {
    console.log("Login route");
    res.status(200).send("Login successful");
}

export const logout = (req, res) => {
    console.log("Logout route");
    res.status(200).send("Logout successful");
}
