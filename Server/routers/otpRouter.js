import express from 'express';
import { sendEmailOtp,verifyEmailOtp } from '../controllers/emailOtp.js';

const router = express.Router();

router.post('/send-email-otp', sendEmailOtp);
router.post('/verify-email-otp', verifyEmailOtp);

export default router;



//974141