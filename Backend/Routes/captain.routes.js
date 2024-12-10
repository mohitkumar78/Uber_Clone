import express from 'express'
import { body } from 'express-validator'
const router = express.Router()
import { register } from '../Controlers/captain.controller.js'

router.post('/register', [
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({ min: 6 }).withMessage("password must have 6 chracter long"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("first name must be at least three chracter"),
    body('fullname.lastname').isLength({ min: 3 }).withMessage("lastname at least of three chracter long"),
    body('vechile.color').isLength({ min: 3 }).withMessage("vechile color at least of three chracter long"),
    body('vechile.plate').isLength({ min: 5 }).withMessage("Number plate at least of 5 length"),
    body('vechile.capacity').isLength({ min: 1 }).withMessage("capacity must be at least 1 seat"),
    body('vechile.vechileType').isIn(['car', 'motorcycle', 'auto'])
], register)

export default router;