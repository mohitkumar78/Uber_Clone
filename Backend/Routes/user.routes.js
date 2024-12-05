import express from 'express'
import { body } from 'express-validator'
import { Rigster, Login } from '../Controlers/user.controler.js';
const router = express.Router();
router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage("first name at least three chracters long"),
    body('Password').isLength({ min: 6 }).withMessage('password must be at least 6 chracter long')
], Rigster)

router.post('/login', [body('email').isEmail().withMessage("a must be valid registered email"),
body('Password').isLength({ min: 6 }).withMessage('password must be at least 6 chracter long')
], Login)
export default router;