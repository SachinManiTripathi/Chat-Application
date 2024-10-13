import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import mongoDBConn from "./db/mongoDbConn.js";
import cookieParser from "cookie-parser";
import { app,server } from "./socket/socket.js";
const PORT = process.env.PORT || 5000; 
dotenv.config();


app.use(express.json()); //to parse the incoming requests with json payloads from req.body
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/messages",messageRoutes);

server.listen(PORT ,() =>{ 
    mongoDBConn();
    console.log(`Server running on port ${PORT}`)});
