import mongoose from 'mongoose';

const connectToDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {

    }).then(() => {
        console.log('Connected to the database!');
        
    })
    .catch((err) => {
        console.error('Error connecting to the database', err);
    })
};

export default connectToDatabase;