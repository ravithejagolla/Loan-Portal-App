import express from 'express';
import { applyLoan } from '../controllers/loanController.js';
import upload from '../config/multerconfig.js';

const loanrouter = express.Router();

loanrouter.post('/apply-loan', upload.single('panImage'), applyLoan);

export default loanrouter;
