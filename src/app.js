import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import jwt from 'jsonwebtoken';


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credential: true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())

//routes

import router from './routes/user.routes.js'

//routes declaration

app.use("/api/v1/users", router)

// URL- http://localhost:8000/api/v1/users/register

export { app };