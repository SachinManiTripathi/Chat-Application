import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import mongoDBConn from "./db/mongoDBConn.js";
import cookieParser from "cookie-parser";
import { app,server } from "./socket/socket.js";
const PORT = process.env.PORT || 5000; 
dotenv.config();

const __dirname = path.resolve();

app.use(express.json()); //to parse the incoming requests with json payloads from req.body
app.use(cors({
	origin: 'https://chat-application-mern-by-sachin.onrender.com',
  	methods: 'GET,POST',
  	allowedHeaders: 'Content-Type, Authorization',
}));
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/messages",messageRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT ,() =>{ 
    mongoDBConn();
    console.log(`Server running on port ${PORT}`)});
