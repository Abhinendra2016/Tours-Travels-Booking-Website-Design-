import express from 'express';
import dotenv from 'dotenv';
import * as mongoose from 'mongoose';  // Updated import statement
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { MongoTopologyClosedError } from 'mongodb'

import tourRoute  from './routes/tour.js';
import userRoute  from './routes/users.js';
import authRoute  from './routes/auth.js';
import reviewRoute  from './routes/reviews.js';
import bookingRoute  from './routes/booking.js';





dotenv.config();
const app = express();
const port = process.env.PORT || 8000;  // Use uppercase PORT for consistency with environment variables
const corsOptions ={
    origin:true,
    Credentials:true
}



// Database connection
const connect = async () => { 
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB database connected");
    } catch (err) {
        console.log('MongoDB database connection failed:', err);
    }
}

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);




app.listen(port, () => {
    connect();
    console.log('Server listening on port', port);
});
