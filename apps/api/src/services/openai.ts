import OpenAI from 'openai';
import { env } from '../config/env';

export const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export class OpenAIService {
  async extractEntities(text: string) {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `Extract entities from the input text. Return JSON with:
{
  "entities": [
    {"type": "PERSON", "value": "Name", "confidence": 0.95},
    {"type": "COMPANY", "value": "Company", "confidence": 0.90},
    {"type": "CONTEXT", "value": "Meeting/Event", "confidence": 0.85}
  ],
  "relationships": [
    {"from": "Person", "to": "Company", "type": "works_at", "confidence": 0.90},
    {"from": "Person", "to": "Context", "type": "met_at", "confidence": 0.85}
  ]
}

Extract all people, companies, and contextual information (meetings, events, locations).`
        },
        {
          role: 'user',
          content: text
        }
      ],
      temperature: 0.1,
      response_format: { type: 'json_object' }
    });

    return JSON.parse(response.choices[0].message.content || '{}');
  }

  async enhanceQuery(query: string, context: string) {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that answers questions about personal relationships and professional networks based on stored conversation data. Be concise and specific.'
        },
        {
          role: 'user',
          content: `Context: ${context}\n\nQuestion: ${query}`
        }
      ],
      temperature: 0.3,
      max_tokens: 500
    });

    return response.choices[0].message.content || '';
  }
}