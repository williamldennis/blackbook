# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BlackBook is a personal relationship manager that uses natural language processing to capture and retrieve relationship information. The core flow is: Input (voice/text) → Process (LLM) → Store (Honcho) → Retrieve (natural language queries).

## Architecture

### Monorepo Structure
```
blackbook/
├── apps/
│   ├── mobile/          # Expo React Native app
│   └── api/             # Node.js Express backend
├── packages/
│   ├── types/           # Shared TypeScript types
│   └── utils/           # Shared utilities
```

### Key Technical Decisions
- **Mobile**: React Native with Expo SDK 50+, TypeScript, NativeWind for styling
- **Backend**: Node.js with Express, TypeScript
- **Memory Layer**: Honcho hosted service (direct API calls)
- **LLM**: OpenAI GPT-4 for all operations
- **Voice Input**: Expo's native speech-to-text (expo-speech)
- **Deployment**: Monorepo with Vercel (frontend) + Render (backend)
- **Development**: Expo Go for iOS

## Development Commands

### Initial Setup
```bash
# Install monorepo dependencies
npm install

# Install turbo globally (if not installed)
npm install -g turbo
```

### Mobile App (apps/mobile)
```bash
# Start Expo development server
cd apps/mobile
npx expo start

# Run on iOS simulator
npx expo run:ios

# Build for production
npx eas build --platform ios
```

### Backend API (apps/api)
```bash
# Start development server
cd apps/api
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Monorepo Commands (from root)
```bash
# Run all dev servers
turbo dev

# Build all packages
turbo build

# Run type checking
turbo typecheck

# Run linting
turbo lint
```

## Core Data Flow

1. **Input Processing Pipeline**:
   - User speaks/types → Mobile app captures input
   - Sends to `/api/process-note` endpoint
   - Backend extracts entities and relationships using GPT-4
   - Stores in Honcho with metadata
   - Returns processed result to mobile

2. **Query Processing Pipeline**:
   - User asks natural language question
   - Sends to `/api/query` endpoint
   - Backend queries Honcho Dialectic API
   - Enhances with GPT-4 intelligent inference
   - Returns contextual answer with related contacts

## Key Services

### NoteProcessor (apps/api/services/NoteProcessor.ts)
Handles entity extraction and relationship mapping from natural language input.

### HonchoService (apps/api/services/HonchoService.ts)
Manages all Honcho interactions including storage, retrieval, and Dialectic queries.

## Environment Variables

### Backend (apps/api/.env)
```
PORT=3000
OPENAI_API_KEY=sk-...
HONCHO_API_KEY=...
HONCHO_APP_ID=...
NODE_ENV=development
```

### Mobile (apps/mobile)
API URL is configured in `config/api.ts` with environment-based switching.

## MVP Feature Scope

### In Scope
- Voice and text input for notes
- Entity extraction (people, companies)
- Relationship mapping
- Natural language queries
- Honcho memory storage
- Two screens: Input and Query

### Out of Scope
- User authentication
- Contact editing/profiles
- Data visualization
- Offline mode
- Push notifications
- Android support (iOS only for MVP)

## Testing Approach

For MVP, focus on:
1. End-to-end flow testing on real iOS device
2. Manual testing of voice input accuracy
3. API endpoint testing with example inputs
4. Honcho integration verification

## Critical Implementation Notes

1. **Entity Extraction**: Keep duplicates separate (no auto-merge in MVP)
2. **Queries**: Allow intelligent inference beyond stored data using GPT-4
3. **Voice Input**: Use device's native speech-to-text, not audio streaming
4. **State Management**: Server-side only, no local caching for MVP
5. **Error Handling**: Focus on network errors and API timeouts
6. **Response Time**: Must be under 5 seconds for complete flow

## Common Development Tasks

### Adding a New API Endpoint
1. Create route file in `apps/api/routes/`
2. Add TypeScript types to `packages/types/`
3. Implement service logic in `apps/api/services/`
4. Update mobile API client

### Modifying Entity Extraction
1. Edit prompt templates in `apps/api/prompts/`
2. Test with example inputs
3. Update TypeScript types if needed

### Updating Mobile UI
1. Components go in `apps/mobile/components/`
2. Screens go in `apps/mobile/app/(tabs)/`
3. Use NativeWind classes for styling
4. Test on Expo Go first