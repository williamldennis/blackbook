# BlackBook - Personal Relationship Manager
## MVP Product Specification v1.0

## Executive Summary
BlackBook is a React Native mobile application that captures relationship information through natural language input and provides intelligent retrieval of your network data using LLMs and Honcho's memory infrastructure.

## Core Concept
**Input → Process → Store → Retrieve**

Simple as sending a voice note, powerful as having perfect memory of everyone you've ever met.

## MVP Scope - Input/Output Focus

### 🎯 MVP Features Only

#### 1. INPUT - Natural Language Capture
```
User says/types: "Met Vince from Plastic Labs, he knows Nicole at Betaworks who invests in AI"

System processes:
- Extracts: Vince (Plastic Labs), Nicole (Betaworks)  
- Relationship: Vince → knows → Nicole
- Context: Nicole invests in AI
- Stores in Honcho memory layer
```

#### 2. OUTPUT - Intelligent Retrieval
```
User asks: "Who should I talk to about AI investment?"

System returns: "Nicole at Betaworks - she invests in AI. 
                 You know her through Vince from Plastic Labs."
```

### Core User Flow
1. **Open app** → Single button interface
2. **Tap & speak** or **Type** → Natural language input
3. **Automatic processing** → Entities extracted, relationships mapped
4. **Query anytime** → Ask questions, get contextual answers

## Technical Stack

### Frontend - React Native + Expo + TypeScript

```typescript
// Tech Stack
{
  "framework": "React Native with Expo SDK 50+",
  "language": "TypeScript",
  "state": "Zustand or React Context",
  "navigation": "Expo Router (file-based)",
  "styling": "NativeWind (Tailwind for RN) or StyleSheet",
  "voice": "expo-speech + expo-av for recording",
  "api": "tRPC or REST with React Query"
}
```

### Key Expo Modules
- `expo-av` - Audio recording for voice input
- `expo-speech` - Text-to-speech for responses  
- `expo-haptics` - Feedback for voice recording
- `expo-notifications` - Follow-up reminders
- `expo-secure-store` - Auth token storage

### Backend Architecture

```typescript
// Backend Stack
{
  "runtime": "Node.js + TypeScript",
  "framework": "Express or Fastify",
  "memory": "Honcho (via Python service or API)",
  "llm": "OpenAI GPT-4 for processing",
  "database": "PostgreSQL + Prisma ORM",
  "queue": "Bull for async processing"
}
```

### Data Flow Architecture

```
┌─────────────────┐
│  React Native   │
│   Mobile App    │
└────────┬────────┘
         │ Voice/Text Input
         ▼
┌─────────────────┐
│   API Gateway   │
│  (Express/tRPC) │
└────────┬────────┘
         │ 
         ▼
┌─────────────────┐
│  LLM Processing │
│  Entity Extract │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     Honcho      │
│  Memory Layer   │
└─────────────────┘
```

## MVP Implementation Details

### Screen 1: Main Input Screen
```typescript
interface MainScreen {
  // UI Components
  voiceButton: "Hold to record" | "Recording..." | "Processing...";
  textInput: "Type or speak...";
  recentNotes: Note[]; // Last 3 inputs
  
  // Actions
  onRecord(): void;
  onTextSubmit(text: string): void;
  onQueryTap(): void; // Navigate to search
}
```

### Screen 2: Query Screen  
```typescript
interface QueryScreen {
  // UI Components
  searchBar: "Ask about your network...";
  suggestedQueries: string[]; // Quick taps
  response: string; // LLM response
  relatedPeople: Contact[]; // Mentioned contacts
  
  // Actions
  onQuery(question: string): Promise<Response>;
  onContactTap(contact: Contact): void;
}
```

### Core Data Models

```typescript
// Simplified for MVP
interface Contact {
  id: string;
  name: string;
  company?: string;
  lastSeen: Date;
  context: string; // How you know them
}

interface Note {
  id: string;
  content: string; // Raw input
  timestamp: Date;
  extractedEntities: Entity[];
  relationships: Relationship[];
}

interface Entity {
  type: 'PERSON' | 'COMPANY' | 'CONTEXT';
  value: string;
  metadata?: Record<string, any>;
}

interface Relationship {
  from: string; // entity id
  to: string; // entity id  
  type: string; // "knows", "works_at", "invested_in"
  context?: string;
}
```

### Honcho Integration

```typescript
// services/honcho.ts
class HonchoService {
  async storeInteraction(note: Note): Promise<void> {
    // Store in Honcho session
    await honcho.sessions.addMessage({
      content: note.content,
      metadata: {
        entities: note.extractedEntities,
        relationships: note.relationships
      }
    });
  }

  async queryNetwork(question: string): Promise<string> {
    // Use Dialectic API for natural language query
    const response = await honcho.dialectic.query({
      question,
      context: 'relationship_network'
    });
    return response.answer;
  }

  async getContext(sessionId: string): Promise<Context> {
    // Get relevant context within token budget
    return honcho.sessions.getContext({
      sessionId,
      tokenBudget: 2000
    });
  }
}
```

### LLM Processing Pipeline

```typescript
// services/processor.ts
class NoteProcessor {
  async process(input: string): Promise<ProcessedNote> {
    // 1. Entity Extraction
    const entities = await this.extractEntities(input);
    
    // 2. Relationship Mapping
    const relationships = await this.mapRelationships(input, entities);
    
    // 3. Store in Honcho
    await this.honcho.store(entities, relationships);
    
    // 4. Return processed note
    return { entities, relationships, stored: true };
  }

  private async extractEntities(text: string): Promise<Entity[]> {
    const prompt = `Extract people, companies, and context from: "${text}"
    Return as JSON: {entities: [{type, value, context}]}`;
    
    const response = await openai.complete(prompt);
    return JSON.parse(response).entities;
  }
}
```

## MVP UI/UX Principles

1. **One-Tap Access**: Main screen is always input-ready
2. **Voice-First**: Hold button to record, release to process
3. **Instant Feedback**: Show processing state immediately
4. **No Forms**: Everything through natural language
5. **Minimal Navigation**: 2 screens max (Input + Query)

## MVP Development Phases

### Week 1-2: Setup & Basic Input
- Expo + TypeScript project setup
- Voice recording interface
- Basic text input
- Mock data processing

### Week 3-4: LLM Integration
- OpenAI API integration
- Entity extraction pipeline
- Basic relationship mapping
- Error handling

### Week 5-6: Honcho Integration
- Honcho SDK setup
- Store interactions
- Implement Dialectic queries
- Session management

### Week 7-8: Polish & Testing
- UI/UX refinement
- Voice recognition improvements
- Query response formatting
- Beta testing

## Success Criteria for MVP

1. **Input Success**: User can speak/type a note and see entities extracted in <3 seconds
2. **Storage Success**: All interactions stored in Honcho with proper context
3. **Query Success**: Natural language questions return relevant, contextual answers
4. **Performance**: Voice-to-result in <5 seconds total
5. **Reliability**: 95%+ success rate for entity extraction

## Out of Scope for MVP
- User authentication (single user for now)
- Contact profiles/editing
- Visualizations or graphs
- Notifications/reminders
- Multiple sessions/workspaces
- Web version
- Data export
- Settings/preferences

## MVP Architecture Decisions

### Resolved Questions
1. **Honcho**: Use hosted service with direct API calls from Node.js backend
2. **Voice**: Use Expo's native speech-to-text (simplest, no audio streaming needed)
3. **LLM**: GPT-4 for all operations (quality over cost optimization)
4. **Entities**: Keep duplicates separate (no auto-merge in MVP)
5. **Queries**: Allow intelligent inference beyond stored data
6. **Data**: Server-side only, no local caching (simplest)
7. **UX**: Start with blank state, no tutorial
8. **Infrastructure**: Monorepo with Vercel (frontend) + Render (backend API)
9. **Development**: Expo Go for iOS initially

### Monorepo Structure
```
blackbook/
├── apps/
│   ├── mobile/          # Expo React Native app
│   └── api/             # Node.js backend
├── packages/
│   ├── types/           # Shared TypeScript types
│   └── utils/           # Shared utilities
├── package.json         # Root package.json
└── turbo.json          # Turborepo config
```

## Next Steps
1. Set up monorepo with Turborepo
2. Initialize Expo app with TypeScript
3. Create Node.js backend with Express
4. Set up Honcho account and test API
5. Implement basic voice-to-text flow