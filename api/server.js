import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from '../server/mongodb/connect.js';
import postRoutes from '../server/routes/postRoutes.js';
import dalleRoutes from '../server/routes/dalleRoutes.js';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Set up routes
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

// Basic test route
app.get('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Hello from DALL.E API!' });
});

// Connect to MongoDB (will run once during cold start)
connectDB(process.env.MONGODB_URL);

// Export the Express API
export default app;