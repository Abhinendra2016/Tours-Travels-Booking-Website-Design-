import express from 'express';
import { createBooking,getBooking,getAllBooking } from '../controllers/bookingController.js';
import { verifyAdmin,verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyUser, createBooking);
router.post('/:id', verifyUser, getBooking);
router.post('/', verifyAdmin, getAllBooking);


export default router;
