import express from 'express';
import dotenv from 'dotenv';


// routes
import projectRoute from './routes/projectRoute.js'
import connectToDatabase from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/projects', projectRoute);

const PORT = process.env.PORT || 3000;

try {
    await connectToDatabase()
    app.listen(PORT, () => {
        console.log(`Server is listening port: ${ PORT }`);
    })
} catch (error) {
    process.exit(1);
}
