import generateOtp from '../utils/generateOtp.js';
import transporter from '../config/nodemailer.js';
import redis from '../config/redis.js';
import env from 'dotenv'

export const sendEmailOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const otp = generateOtp();
  const otpKey = `otp:${email}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
    html: `<p>Your OTP code is: <strong>${otp}</strong></p>`,
  };

  try {
    await transporter.sendMail(mailOptions);

    // Store OTP in Redis with 5-minute expiry
    await redis.set(otpKey, otp, 'EX', 300); // 300 seconds = 5 minutes

    res.status(200).json({ message: 'OTP sent to email successfully' });
  } catch (error) {
    console.error('Email Error:', error.message);
    res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
};



export const verifyEmailOtp = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required' });
  }

  const otpKey = `otp:${email}`;

  try {
    const storedOtp = await redis.get(otpKey);

    if (!storedOtp) {
      return res.status(400).json({ message: 'OTP expired or not found' });
    }

    if (storedOtp !== otp) {
      return res.status(401).json({ message: 'Invalid OTP' });
    }

    // Optional: Delete OTP after verification
    await redis.del(otpKey);

    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('OTP verification error:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

