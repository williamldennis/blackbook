import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/requestLogger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:8081', // Expo dev server
    'http://localhost:19000', // Expo Go
    'http://localhost:19001',
    'http://localhost:19002',
    'exp://localhost:8081',
    'exp://192.168.1.91:8081', // Expo on network IP
    'http://192.168.1.91:8081',
  ],
  credentials: true,
}));

app.use(express.json());
app.use(requestLogger);

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Routes
import notesRouter from './routes/notes';
import queryRouter from './routes/query';
app.use('/api', notesRouter);
app.use('/api', queryRouter);

// Error handling
app.use(errorHandler);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  console.log(`📋 Environment: ${process.env.NODE_ENV || 'development'}`);
});