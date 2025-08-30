import { Router } from 'express';
import { OpenAIService } from '../services/openai';
import { HonchoService } from '../services/HonchoService';
import { ProcessNoteRequest, ProcessNoteResponse } from '@blackbook/types';

const router = Router();
const openaiService = new OpenAIService();
const honchoService = new HonchoService();

router.post('/process-note', async (req, res) => {
  try {
    const { content, source }: ProcessNoteRequest = req.body;

    if (!content || content.trim().length === 0) {
      return res.status(400).json({ error: 'Content is required' });
    }

    if (!source || !['voice', 'text'].includes(source)) {
      return res.status(400).json({ error: 'Source must be "voice" or "text"' });
    }

    const startTime = Date.now();
    
    const extracted = await openaiService.extractEntities(content.trim());
    
    const note = {
      id: crypto.randomUUID(),
      content: content.trim(),
      timestamp: new Date(),
      extractedEntities: extracted.entities || [],
      relationships: extracted.relationships || [],
      source
    };

    // Store in Honcho
    await honchoService.storeNote(content.trim(), extracted.entities || [], extracted.relationships || [], source);

    const response: ProcessNoteResponse = {
      note,
      entities: extracted.entities || [],
      relationships: extracted.relationships || [],
      processingTime: Date.now() - startTime
    };

    res.json(response);
  } catch (error) {
    console.error('Error processing note:', error);
    res.status(500).json({ error: 'Failed to process note' });
  }
});

export default router;