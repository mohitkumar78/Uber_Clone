import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userroute from './Routes/user.routes.js'
import captainroute from './Routes/captain.routes.js'
const app = express();

// Middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser())

// Routes
app.use('/user', userroute);
console.log("hemncdsnk")
app.use('/captain', captainroute)

export default app;
