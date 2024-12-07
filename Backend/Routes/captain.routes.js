import express from 'express'
import { register } from '../Controlers/captain.controller.js';
import { body } from 'express-validator'

const router = express.Router();


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("First name must be at least three characters"),
    body('vechile.color').isLength({ min: 3 }).withMessage("Color must be at least three characters"),
    body('vechile.plate').isLength({ min: 3 }).withMessage("Number plate must be at least three characters long"),
    body('vechile.capacity').isInt({ min: 1 }).withMessage("Vehicle must have a capacity of at least 1"),
    body('vechile.vechileType').isIn(['car', 'motorcycle', 'auto']).withMessage("Invalid vehicle type")
], register);


export default router;