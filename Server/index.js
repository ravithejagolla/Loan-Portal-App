import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config()
import router from './routers/otpRouter.js';
import loanrouter from './routers/loanRouter.js';
import bodyParser from 'body-parser';

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', loanrouter);
app.use('/api', router);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
