import express from 'express';
import colors from 'colors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
// PAGES ROUTE
import { signin, signup, protect } from './utils/auth.js';
import userRouter from './resources/user/user.router.js';

dotenv.config();
// CONNECT DB
connectDB();

const app = express();
app.disable('x-powered-by');

// INIT MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('App is running!');
});

// SIGNIN AND SIGNUP ROUTE
app.post('/api/signup', signup);
app.post('/api/signin', signin);

// PROTECT ALL PAGES
app.use('/api', protect);

// PAGES ROUTE
app.use('/api/user', userRouter);

// RUNNING APP
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
