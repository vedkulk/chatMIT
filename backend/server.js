import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //parse incoming requests
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes)

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`);
});
