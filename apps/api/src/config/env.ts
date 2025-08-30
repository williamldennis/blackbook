import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
  port: number;
  nodeEnv: string;
  openaiApiKey: string;
  honchoApiKey: string;
  honchoAppId: string;
}

function validateEnv(): EnvConfig {
  const requiredVars = ['OPENAI_API_KEY', 'HONCHO_API_KEY', 'HONCHO_APP_ID'];
  const missing = requiredVars.filter(key => !process.env[key]);

  if (missing.length > 0 && process.env.NODE_ENV === 'production') {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  return {
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: process.env.NODE_ENV || 'development',
    openaiApiKey: process.env.OPENAI_API_KEY || '',
    honchoApiKey: process.env.HONCHO_API_KEY || '',
    honchoAppId: process.env.HONCHO_APP_ID || '',
  };
}

export const env = validateEnv();