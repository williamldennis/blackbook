export interface Contact {
  id: string;
  name: string;
  company?: string;
  lastSeen: Date;
  context: string;
}

export interface Note {
  id: string;
  content: string;
  timestamp: Date;
  extractedEntities: Entity[];
  relationships: Relationship[];
  source: 'voice' | 'text';
}

export interface Entity {
  type: 'PERSON' | 'COMPANY' | 'CONTEXT';
  value: string;
  confidence?: number;
  metadata?: Record<string, any>;
}

export interface Relationship {
  from: string;
  to: string;
  type: string;
  context?: string;
  confidence?: number;
}

export interface ProcessNoteRequest {
  content: string;
  source: 'voice' | 'text';
}

export interface ProcessNoteResponse {
  note: Note;
  entities: Entity[];
  relationships: Relationship[];
  processingTime: number;
}

export interface QueryRequest {
  question: string;
  context?: string;
}

export interface QueryResponse {
  answer: string;
  relatedContacts: Contact[];
  confidence: number;
  sources?: string[];
}