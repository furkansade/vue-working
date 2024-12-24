import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


// routes
import projectRoute from './routes/projectRoute.js'
import connectToDatabase from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/projects', projectRoute);


try {
    await connectToDatabase()
    app.listen(PORT, () => {
        console.log(`Server is listening port: ${ PORT }`);
    })
} catch (error) {
    process.exit(1);
}
