# BlackBook MVP Task List

## Phase 1: Project Setup (Day 1-2)

### Environment Setup
- [ ] Initialize monorepo with Turborepo
- [ ] Set up Git repository
- [ ] Create folder structure (apps/mobile, apps/api, packages/types)
- [ ] Configure TypeScript at root level
- [ ] Set up ESLint and Prettier

### Mobile App Foundation
- [ ] Initialize Expo app in apps/mobile with TypeScript template
- [ ] Install Expo SDK 50+ dependencies
- [ ] Configure Expo Router for navigation
- [ ] Set up NativeWind for styling
- [ ] Create basic two-screen navigation structure
- [ ] Test Expo Go on iOS device/simulator

### Backend API Foundation  
- [ ] Initialize Node.js + TypeScript in apps/api
- [ ] Set up Express server with basic health check
- [ ] Configure environment variables (.env)
- [ ] Set up CORS for local development
- [ ] Create basic error handling middleware
- [ ] Test API locally

### Shared Packages
- [ ] Create packages/types with shared TypeScript interfaces
- [ ] Define initial data models (Contact, Note, Entity, Relationship)
- [ ] Set up package exports and imports

## Phase 2: Core Input Flow (Day 3-5)

### Voice Input (Mobile)
- [ ] Install expo-speech for speech-to-text
- [ ] Create VoiceButton component with hold-to-record
- [ ] Implement speech recognition with iOS permissions
- [ ] Add visual feedback during recording (pulse animation)
- [ ] Handle speech-to-text results
- [ ] Add error handling for permissions/failures

### Text Input (Mobile)
- [ ] Create TextInput component with proper keyboard handling
- [ ] Implement submit handler
- [ ] Add loading states during processing
- [ ] Create unified input handler for voice/text

### Input Screen UI
- [ ] Design main input screen layout
- [ ] Add recent notes display (last 3)
- [ ] Implement pull-to-refresh
- [ ] Add navigation to Query screen
- [ ] Style with NativeWind/Tailwind classes

## Phase 3: LLM Processing (Day 6-8)

### OpenAI Integration (Backend)
- [ ] Set up OpenAI SDK
- [ ] Create entity extraction prompt template
- [ ] Implement entity extraction endpoint
- [ ] Create relationship mapping logic
- [ ] Add prompt for relationship extraction
- [ ] Test with example inputs

### API Endpoints
- [ ] POST /api/process-note - Main processing endpoint
- [ ] GET /api/health - Health check
- [ ] Error handling and validation
- [ ] Rate limiting setup

### Processing Pipeline
- [ ] Create NoteProcessor service class
- [ ] Implement entity extraction method
- [ ] Implement relationship mapping method
- [ ] Add response formatting
- [ ] Handle edge cases (empty input, no entities)

## Phase 4: Honcho Integration (Day 9-11)

### Honcho Setup
- [ ] Create Honcho account
- [ ] Get API credentials
- [ ] Install Honcho SDK/create API client
- [ ] Test basic connection

### Memory Storage
- [ ] Create HonchoService class
- [ ] Implement storeInteraction method
- [ ] Add session management
- [ ] Store entities and relationships as metadata
- [ ] Test data persistence

### Query Integration  
- [ ] Implement Dialectic API connection
- [ ] Create queryNetwork method
- [ ] Format queries for Honcho
- [ ] Parse and format responses
- [ ] Add context retrieval with token budget

## Phase 5: Query Interface (Day 12-14)

### Query Screen (Mobile)
- [ ] Create Query screen component
- [ ] Implement search bar with keyboard handling
- [ ] Add suggested queries (hardcoded initially)
- [ ] Display query results
- [ ] Show related contacts from response
- [ ] Add loading and error states

### Query Processing (Backend)
- [ ] Create GET /api/query endpoint
- [ ] Connect to Honcho Dialectic API
- [ ] Process natural language queries
- [ ] Format responses for mobile display
- [ ] Add intelligent inference layer with GPT-4

### Results Display
- [ ] Create response card component
- [ ] Format contact mentions as tappable links
- [ ] Add copy-to-clipboard for responses
- [ ] Implement pull-to-refresh for new queries

## Phase 6: Integration & Polish (Day 15-17)

### End-to-End Flow
- [ ] Test complete input → process → store → query flow
- [ ] Fix data flow issues
- [ ] Optimize API calls
- [ ] Add proper loading states throughout

### Error Handling
- [ ] Network error handling
- [ ] API timeout handling  
- [ ] Graceful degradation
- [ ] User-friendly error messages
- [ ] Retry logic for failed requests

### Performance
- [ ] Optimize bundle size
- [ ] Implement request caching
- [ ] Reduce re-renders
- [ ] Profile and fix slow operations

## Phase 7: Deployment Prep (Day 18-19)

### Backend Deployment
- [ ] Set up Render account
- [ ] Configure environment variables
- [ ] Deploy Node.js API to Render
- [ ] Set up SSL/HTTPS
- [ ] Configure production CORS
- [ ] Test production endpoints

### Mobile Build
- [ ] Update API URLs for production
- [ ] Create Expo production build
- [ ] Test on real iOS device
- [ ] Fix iOS-specific issues

### Integration Testing
- [ ] Test full flow on production
- [ ] Verify Honcho integration
- [ ] Check response times
- [ ] Load test with multiple requests

## Phase 8: Final Testing & Launch (Day 20-21)

### QA Testing
- [ ] Test all happy paths
- [ ] Test error scenarios
- [ ] Test edge cases (long input, special characters)
- [ ] Test on different iOS versions
- [ ] Fix critical bugs

### Documentation
- [ ] Create basic README
- [ ] Document API endpoints
- [ ] Add setup instructions
- [ ] Create .env.example file

### Launch Checklist
- [ ] Verify all services are running
- [ ] Check API keys are secure
- [ ] Monitor initial usage
- [ ] Set up basic error tracking
- [ ] Share TestFlight link

## Success Criteria Checklist

### Must Have (MVP)
- [ ] Voice input works reliably on iOS
- [ ] Text input alternative available
- [ ] Entity extraction identifies people and companies
- [ ] Relationships between entities are captured
- [ ] Data persists in Honcho
- [ ] Natural language queries return relevant results
- [ ] Response time <5 seconds for full flow
- [ ] Works on Expo Go for testing

### Nice to Have (Post-MVP)
- [ ] Android support
- [ ] Offline input with sync
- [ ] Contact detail view
- [ ] Edit/delete notes
- [ ] Export data
- [ ] Authentication
- [ ] Push notifications

## Technical Debt to Track
- [ ] Add comprehensive error logging
- [ ] Implement proper testing
- [ ] Add monitoring/analytics
- [ ] Optimize Honcho queries
- [ ] Add database for local state
- [ ] Implement proper auth flow

## Daily Checklist
- [ ] Test on real device
- [ ] Commit code with clear messages
- [ ] Update task list progress
- [ ] Note any blockers
- [ ] Plan next day's tasks