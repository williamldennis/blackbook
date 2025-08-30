import { Router } from 'express';
import { HonchoService } from '../services/HonchoService';
import { OpenAIService } from '../services/openai';
import { QueryResponse } from '@blackbook/types';

const router = Router();
const honchoService = new HonchoService();
const openaiService = new OpenAIService();

router.get('/query', async (req, res) => {
  try {
    const { question } = req.query as { question?: string };

    if (!question || question.trim().length === 0) {
      return res.status(400).json({ error: 'Question is required' });
    }

    // Query Honcho's memory
    const memoryResult = await honchoService.queryMemory(question.trim());
    
    // Enhance with GPT-4 if needed
    const enhancedAnswer = await openaiService.enhanceQuery(question.trim(), memoryResult.answer);

    const response: QueryResponse = {
      answer: enhancedAnswer || memoryResult.answer,
      relatedContacts: [],
      confidence: 0.85,
      sources: [memoryResult.timestamp]
    };

    res.json(response);
  } catch (error) {
    console.error('Error processing query:', error);
    res.status(500).json({ error: 'Failed to process query' });
  }
});

export default router;