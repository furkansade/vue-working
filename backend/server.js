import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectToDatabase from './config/db.js';

// routes
import projectRoute from './routes/projectRoute.js'
import userRoute from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'

dotenv.config();
connectToDatabase()

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('../frontend/dist'));
// app.get('*', (req, res) => {
//   res.sendFile('index.html', { root: '../frontend/dist' });
// });

app.use('/api/v1/projects', projectRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Server is listening port: ${ PORT }`);
})
