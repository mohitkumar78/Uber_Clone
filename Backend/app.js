import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userroute from './Routes/user.routes.js'
const app = express();

// Middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser())

// Routes
app.get('/', (req, res) => {
    res.send("hello world");
});
app.use('/user', userroute)
export default app;
