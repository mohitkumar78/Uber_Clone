import express from 'express'
import cors from 'cors'

const app = express();

// Middleware
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send("hello world");
});

export default app;
