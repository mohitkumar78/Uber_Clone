import express from 'express';
import { body } from 'express-validator';
const router = express.Router();
import { register, login } from '../Controlers/captain.controller.js';

router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Invalid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('fullname.firstname')
            .isLength({ min: 3 })
            .withMessage('First name must be at least 3 characters'),
        body('fullname.lastname')
            .isLength({ min: 3 })
            .withMessage('Last name must be at least 3 characters'),
        body('vechile.color')
            .isLength({ min: 3 })
            .withMessage('Vehicle color must be at least 3 characters'),
        body('vechile.plate')
            .isLength({ min: 5 })
            .withMessage('Number plate must be at least 5 characters long'),
        body('vechile.capacity')
            .isInt({ min: 1 })
            .withMessage('Capacity must be at least 1 seat'),
        body('vechile.vechileType')
            .isIn(['car', 'motorcycle', 'auto'])
            .withMessage('Vehicle type must be car, motorcycle, or auto'),
    ],
    register
);

router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Invalid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ], login
);

export default router;
