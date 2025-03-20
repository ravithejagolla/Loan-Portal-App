import path from 'path';
import fs from 'fs';

export const applyLoan = (req, res) => {
  try {
    const {
      fullName,
      dob,
      amount,
      purpose,
      income,
      employmentType,
      panNumber,
      aadhaarNumber,
      address,
    } = req.body;

    const panImage = req.file;

    if (!panImage) {
      return res.status(400).json({ message: 'PAN image is required' });
    }

    // You can add logic to save data to a database here

    res.status(200).json({
      message: 'Loan application submitted successfully',
      data: {
        fullName,
        dob,
        amount,
        purpose,
        income,
        employmentType,
        panNumber,
        aadhaarNumber,
        address,
        panImageUrl: `/uploads/${panImage.filename}`,
      },
    });
  } catch (err) {
    console.error('Error in applyLoan:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
