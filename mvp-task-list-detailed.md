# BlackBook MVP Task List - Detailed

## Phase 1: Project Setup (Day 1-2)

### 1. Environment Setup
- [x] 1.1 Initialize monorepo with Turborepo
  - [x] 1.1.1 Run `npx create-turbo@latest blackbook`
  - [x] 1.1.2 Choose "npm" as package manager
  - [x] 1.1.3 Configure turbo.json with pipeline tasks
- [x] 1.2 Set up Git repository
  - [x] 1.2.1 Initialize git with `git init`
  - [x] 1.2.2 Create .gitignore with node_modules, .env, dist
  - [x] 1.2.3 Make initial commit
- [x] 1.3 Create folder structure
  - [x] 1.3.1 Create apps/mobile directory
  - [x] 1.3.2 Create apps/api directory
  - [x] 1.3.3 Create packages/types directory
  - [x] 1.3.4 Create packages/utils directory
- [x] 1.4 Configure TypeScript at root level
  - [x] 1.4.1 Create root tsconfig.json with base settings
  - [x] 1.4.2 Set strict mode and module resolution
  - [x] 1.4.3 Configure path aliases for packages
- [x] 1.5 Set up ESLint and Prettier
  - [x] 1.5.1 Install ESLint with TypeScript plugin
  - [x] 1.5.2 Install Prettier with config file
  - [x] 1.5.3 Add format and lint scripts to package.json
  - [x] 1.5.4 Configure VSCode settings.json

### 2. Mobile App Foundation
- [x] 2.1 Initialize Expo app in apps/mobile
  - [x] 2.1.1 Run `npx create-expo-app -t expo-template-blank-typescript`
  - [x] 2.1.2 Move generated files to apps/mobile
  - [x] 2.1.3 Update package.json name to "@blackbook/mobile"
- [x] 2.2 Install Expo SDK 50+ dependencies
  - [x] 2.2.1 Verify expo version is 50+
  - [x] 2.2.2 Run `npx expo install --fix` to align versions
- [x] 2.3 Configure Expo Router for navigation
  - [x] 2.3.1 Install `expo-router` and dependencies
  - [x] 2.3.2 Update app.json with scheme for deep linking
  - [x] 2.3.3 Create app directory structure
  - [x] 2.3.4 Set up _layout.tsx file
- [x] 2.4 Set up NativeWind for styling
  - [x] 2.4.1 Install nativewind and dependencies
  - [x] 2.4.2 Create tailwind.config.js
  - [x] 2.4.3 Configure babel.config.js for NativeWind
  - [x] 2.4.4 Create global.css with Tailwind directives
- [x] 2.5 Create basic two-screen navigation structure
  - [x] 2.5.1 Create app/(tabs)/_layout.tsx for tab navigation
  - [x] 2.5.2 Create app/(tabs)/index.tsx for Input screen
  - [x] 2.5.3 Create app/(tabs)/query.tsx for Query screen
  - [x] 2.5.4 Add tab icons and labels
- [ ] 2.6 Test Expo Go on iOS device/simulator
  - [ ] 2.6.1 Run `npx expo start`
  - [ ] 2.6.2 Open in iOS Simulator
  - [ ] 2.6.3 Test navigation between screens
  - [ ] 2.6.4 Verify hot reload works

### 3. Backend API Foundation
- [x] 3.1 Initialize Node.js + TypeScript in apps/api
  - [x] 3.1.1 Create package.json with name "@blackbook/api"
  - [x] 3.1.2 Install TypeScript and @types/node
  - [x] 3.1.3 Create tsconfig.json extending root config
  - [x] 3.1.4 Add build and dev scripts
- [x] 3.2 Set up Express server
  - [x] 3.2.1 Install express and @types/express
  - [x] 3.2.2 Create src/index.ts entry point
  - [x] 3.2.3 Create basic Express app instance
  - [x] 3.2.4 Add JSON body parser middleware
- [x] 3.3 Configure environment variables
  - [x] 3.3.1 Install dotenv package
  - [x] 3.3.2 Create .env file with PORT=3000
  - [x] 3.3.3 Create .env.example template
  - [x] 3.3.4 Add config/env.ts for type-safe env vars
- [x] 3.4 Set up CORS for local development
  - [x] 3.4.1 Install cors and @types/cors
  - [x] 3.4.2 Configure CORS for Expo dev server
  - [x] 3.4.3 Add allowed origins list
- [x] 3.5 Create basic error handling middleware
  - [x] 3.5.1 Create middleware/errorHandler.ts
  - [x] 3.5.2 Add async error wrapper
  - [x] 3.5.3 Create custom error classes
  - [x] 3.5.4 Add request logging middleware
- [x] 3.6 Test API locally
  - [x] 3.6.1 Add GET /health endpoint
  - [x] 3.6.2 Start server with `npm run dev`
  - [x] 3.6.3 Test with curl or Postman
  - [x] 3.6.4 Verify error handling works

### 4. Shared Packages
- [x] 4.1 Create packages/types structure
  - [x] 4.1.1 Initialize package.json as "@blackbook/types"
  - [x] 4.1.2 Create src/index.ts entry point
  - [x] 4.1.3 Configure TypeScript build
- [ ] 4.2 Define initial data models
  - [ ] 4.2.1 Create types/Contact.ts interface
  - [ ] 4.2.2 Create types/Note.ts interface
  - [ ] 4.2.3 Create types/Entity.ts interface
  - [ ] 4.2.4 Create types/Relationship.ts interface
- [ ] 4.3 Set up package exports
  - [ ] 4.3.1 Export all types from index.ts
  - [ ] 4.3.2 Configure package.json exports field
  - [ ] 4.3.3 Test imports in mobile app
  - [ ] 4.3.4 Test imports in API

## Phase 2: Core Input Flow (Day 3-5)

### 5. Voice Input (Mobile)
- [x] 5.1 Install and configure expo-speech
  - [x] 5.1.1 Run `npx expo install expo-speech`
  - [ ] 5.1.2 Add iOS usage description to app.json
  - [ ] 5.1.3 Import Speech module
- [x] 5.2 Create VoiceButton component
  - [x] 5.2.1 Create components/VoiceButton.tsx
  - [x] 5.2.2 Add Pressable with onPressIn/onPressOut
  - [x] 5.2.3 Add microphone icon (expo-vector-icons)
  - [ ] 5.2.4 Style with NativeWind classes
- [ ] 5.3 Implement speech recognition
  - [ ] 5.3.1 Request microphone permissions
  - [ ] 5.3.2 Start recording on press
  - [ ] 5.3.3 Stop recording on release
  - [ ] 5.3.4 Get transcription result
- [x] 5.4 Add visual feedback
  - [x] 5.4.1 Create recording state
  - [ ] 5.4.2 Add pulse animation while recording
  - [x] 5.4.3 Change button color during recording
  - [ ] 5.4.4 Add haptic feedback on press
- [ ] 5.5 Handle speech results
  - [ ] 5.5.1 Display transcription in text field
  - [ ] 5.5.2 Auto-submit after successful transcription
  - [ ] 5.5.3 Show confidence score (if available)
- [ ] 5.6 Add error handling
  - [ ] 5.6.1 Handle permission denied
  - [ ] 5.6.2 Handle no speech detected
  - [ ] 5.6.3 Handle network errors
  - [ ] 5.6.4 Show user-friendly error messages

### 6. Text Input (Mobile)
- [x] 6.1 Create TextInput component
  - [x] 6.1.1 Create components/NoteInput.tsx
  - [x] 6.1.2 Add TextInput with multiline support
  - [x] 6.1.3 Add placeholder text
  - [x] 6.1.4 Style with proper padding
- [x] 6.2 Implement keyboard handling
  - [x] 6.2.1 Add KeyboardAvoidingView wrapper
  - [x] 6.2.2 Configure keyboard dismiss on drag
  - [x] 6.2.3 Add submit button above keyboard
  - [ ] 6.2.4 Handle return key submission
- [x] 6.3 Add submit handler
  - [x] 6.3.1 Validate non-empty input
  - [x] 6.3.2 Trim whitespace
  - [ ] 6.3.3 Call API endpoint
  - [x] 6.3.4 Clear input after success
- [x] 6.4 Add loading states
  - [x] 6.4.1 Disable input during processing
  - [x] 6.4.2 Show activity indicator
  - [x] 6.4.3 Disable submit button
  - [x] 6.4.4 Show processing message
- [x] 6.5 Create unified input handler
  - [x] 6.5.1 Abstract submission logic
  - [x] 6.5.2 Handle both voice and text
  - [ ] 6.5.3 Add input source tracking
  - [ ] 6.5.4 Centralize error handling

### 7. Input Screen UI
- [x] 7.1 Design main input screen layout
  - [x] 7.1.1 Create screens/InputScreen.tsx
  - [x] 7.1.2 Add SafeAreaView wrapper
  - [x] 7.1.3 Create header with app title
  - [x] 7.1.4 Position input components
- [x] 7.2 Add recent notes display
  - [x] 7.2.1 Create RecentNotes component
  - [x] 7.2.2 Create note card design
  - [x] 7.2.3 Show timestamp and preview
  - [x] 7.2.4 Limit to 3 most recent
- [x] 7.3 Implement state management
  - [x] 7.3.1 Create notes store (Context or Zustand)
  - [x] 7.3.2 Add addNote action
  - [x] 7.3.3 Add getRecentNotes selector
  - [x] 7.3.4 Connect to UI components
- [x] 7.4 Add pull-to-refresh
  - [x] 7.4.1 Wrap in ScrollView/FlatList
  - [ ] 7.4.2 Add RefreshControl
  - [ ] 7.4.3 Implement refresh handler
  - [ ] 7.4.4 Fetch latest notes
- [ ] 7.5 Add navigation to Query screen
  - [ ] 7.5.1 Add search icon button
  - [ ] 7.5.2 Implement navigation handler
  - [ ] 7.5.3 Pass any needed context
- [x] 7.6 Style with NativeWind
  - [x] 7.6.1 Apply consistent color scheme
  - [x] 7.6.2 Add proper spacing
  - [x] 7.6.3 Ensure touch targets are 44pt+
  - [ ] 7.6.4 Test in light/dark mode

## Phase 3: LLM Processing (Day 6-8)

### 8. OpenAI Integration (Backend)
- [x] 8.1 Set up OpenAI SDK
  - [x] 8.1.1 Install openai package
  - [ ] 8.1.2 Add OPENAI_API_KEY to .env
  - [ ] 8.1.3 Create services/openai.ts
  - [ ] 8.1.4 Initialize OpenAI client
- [ ] 8.2 Create entity extraction prompt
  - [ ] 8.2.1 Create prompts/entityExtraction.ts
  - [ ] 8.2.2 Define system prompt for extraction
  - [ ] 8.2.3 Create few-shot examples
  - [ ] 8.2.4 Define JSON output schema
- [ ] 8.3 Implement entity extraction
  - [ ] 8.3.1 Create extractEntities function
  - [ ] 8.3.2 Call GPT-4 with prompt
  - [ ] 8.3.3 Parse JSON response
  - [ ] 8.3.4 Validate extracted entities
- [ ] 8.4 Create relationship mapping
  - [ ] 8.4.1 Create prompts/relationshipExtraction.ts
  - [ ] 8.4.2 Define relationship types
  - [ ] 8.4.3 Create extraction prompt
  - [ ] 8.4.4 Include context from entities
- [ ] 8.5 Test with examples
  - [ ] 8.5.1 Create test cases file
  - [ ] 8.5.2 Test simple introductions
  - [ ] 8.5.3 Test complex relationships
  - [ ] 8.5.4 Test edge cases

### 9. API Endpoints
- [ ] 9.1 Create POST /api/process-note
  - [ ] 9.1.1 Create routes/notes.ts
  - [ ] 9.1.2 Define request body schema
  - [ ] 9.1.3 Add input validation
  - [ ] 9.1.4 Return processed result
- [ ] 9.2 Implement request validation
  - [ ] 9.2.1 Check content length
  - [ ] 9.2.2 Validate content type
  - [ ] 9.2.3 Sanitize input text
  - [ ] 9.2.4 Return 400 for invalid input
- [ ] 9.3 Add error handling
  - [ ] 9.3.1 Catch OpenAI errors
  - [ ] 9.3.2 Handle rate limits
  - [ ] 9.3.3 Log errors properly
  - [ ] 9.3.4 Return appropriate status codes
- [x] 9.4 Set up rate limiting
  - [x] 9.4.1 Install express-rate-limit
  - [ ] 9.4.2 Configure limits per IP
  - [ ] 9.4.3 Add custom error message
  - [ ] 9.4.4 Test rate limiting

### 10. Processing Pipeline
- [ ] 10.1 Create NoteProcessor class
  - [ ] 10.1.1 Create services/NoteProcessor.ts
  - [ ] 10.1.2 Add constructor with dependencies
  - [ ] 10.1.3 Define process method signature
  - [ ] 10.1.4 Add error handling
- [ ] 10.2 Implement extraction pipeline
  - [ ] 10.2.1 Extract entities first
  - [ ] 10.2.2 Extract relationships with context
  - [ ] 10.2.3 Combine results
  - [ ] 10.2.4 Format for response
- [ ] 10.3 Add response formatting
  - [ ] 10.3.1 Create consistent response structure
  - [ ] 10.3.2 Include processing metadata
  - [ ] 10.3.3 Add timestamp
  - [ ] 10.3.4 Include confidence scores
- [ ] 10.4 Handle edge cases
  - [ ] 10.4.1 Empty input handling
  - [ ] 10.4.2 No entities found
  - [ ] 10.4.3 Ambiguous relationships
  - [ ] 10.4.4 Very long input

## Phase 4: Honcho Integration (Day 9-11)

### 11. Honcho Setup
- [ ] 11.1 Create Honcho account
  - [ ] 11.1.1 Sign up at honcho.dev
  - [ ] 11.1.2 Create new application
  - [ ] 11.1.3 Note workspace ID
- [ ] 11.2 Get API credentials
  - [ ] 11.2.1 Generate API key
  - [ ] 11.2.2 Add HONCHO_API_KEY to .env
  - [ ] 11.2.3 Add HONCHO_APP_ID to .env
  - [ ] 11.2.4 Secure credentials
- [ ] 11.3 Install/create Honcho client
  - [ ] 11.3.1 Check for official SDK
  - [ ] 11.3.2 Or create services/honcho.ts
  - [ ] 11.3.3 Set up axios for API calls
  - [ ] 11.3.4 Configure base URL and headers
- [ ] 11.4 Test basic connection
  - [ ] 11.4.1 Create test endpoint
  - [ ] 11.4.2 Make simple API call
  - [ ] 11.4.3 Verify authentication
  - [ ] 11.4.4 Check response format

### 12. Memory Storage
- [ ] 12.1 Create HonchoService class
  - [ ] 12.1.1 Create services/HonchoService.ts
  - [ ] 12.1.2 Add constructor with config
  - [ ] 12.1.3 Initialize HTTP client
  - [ ] 12.1.4 Add error handling
- [ ] 12.2 Implement storeInteraction
  - [ ] 12.2.1 Create session if needed
  - [ ] 12.2.2 Format message payload
  - [ ] 12.2.3 Include metadata
  - [ ] 12.2.4 Handle API response
- [ ] 12.3 Add session management
  - [ ] 12.3.1 Create getOrCreateSession
  - [ ] 12.3.2 Store session ID
  - [ ] 12.3.3 Handle session expiry
  - [ ] 12.3.4 Add session metadata
- [ ] 12.4 Store entities as metadata
  - [ ] 12.4.1 Format entities for storage
  - [ ] 12.4.2 Add entity type tags
  - [ ] 12.4.3 Include extraction confidence
  - [ ] 12.4.4 Add timestamps
- [ ] 12.5 Test data persistence
  - [ ] 12.5.1 Store test interaction
  - [ ] 12.5.2 Retrieve stored data
  - [ ] 12.5.3 Verify metadata intact
  - [ ] 12.5.4 Check data structure

### 13. Query Integration
- [ ] 13.1 Implement Dialectic API
  - [ ] 13.1.1 Add Dialectic endpoint URL
  - [ ] 13.1.2 Create query method
  - [ ] 13.1.3 Format query payload
  - [ ] 13.1.4 Parse response
- [ ] 13.2 Create queryNetwork method
  - [ ] 13.2.1 Accept natural language query
  - [ ] 13.2.2 Add session context
  - [ ] 13.2.3 Call Dialectic API
  - [ ] 13.2.4 Format response for app
- [ ] 13.3 Format queries for Honcho
  - [ ] 13.3.1 Add query context
  - [ ] 13.3.2 Include user ID
  - [ ] 13.3.3 Specify response format
  - [ ] 13.3.4 Set token budget
- [ ] 13.4 Parse responses
  - [ ] 13.4.1 Extract answer text
  - [ ] 13.4.2 Identify mentioned entities
  - [ ] 13.4.3 Extract relationships
  - [ ] 13.4.4 Add source citations
- [ ] 13.5 Add context retrieval
  - [ ] 13.5.1 Implement getContext method
  - [ ] 13.5.2 Set token budget (2000)
  - [ ] 13.5.3 Prioritize recent context
  - [ ] 13.5.4 Handle context overflow

## Phase 5: Query Interface (Day 12-14)

### 14. Query Screen (Mobile)
- [ ] 14.1 Create Query screen component
  - [ ] 14.1.1 Create screens/QueryScreen.tsx
  - [ ] 14.1.2 Add SafeAreaView wrapper
  - [ ] 14.1.3 Create screen layout
  - [ ] 14.1.4 Add back navigation
- [ ] 14.2 Implement search bar
  - [ ] 14.2.1 Create SearchBar component
  - [ ] 14.2.2 Add TextInput with icon
  - [ ] 14.2.3 Add clear button
  - [ ] 14.2.4 Style with rounded corners
- [ ] 14.3 Add keyboard handling
  - [ ] 14.3.1 Auto-focus on mount
  - [ ] 14.3.2 Add search button on keyboard
  - [ ] 14.3.3 Dismiss on scroll
  - [ ] 14.3.4 Handle submit action
- [ ] 14.4 Add suggested queries
  - [ ] 14.4.1 Create suggestions array
  - [ ] 14.4.2 Display as chips/buttons
  - [ ] 14.4.3 Handle tap to search
  - [ ] 14.4.4 Update based on history
- [ ] 14.5 Display query results
  - [ ] 14.5.1 Create ResultCard component
  - [ ] 14.5.2 Show answer text
  - [ ] 14.5.3 Highlight entities
  - [ ] 14.5.4 Add timestamp
- [ ] 14.6 Show related contacts
  - [ ] 14.6.1 Parse contacts from response
  - [ ] 14.6.2 Create contact pills
  - [ ] 14.6.3 Show company info
  - [ ] 14.6.4 Make tappable (future)
- [ ] 14.7 Add loading/error states
  - [ ] 14.7.1 Show skeleton while loading
  - [ ] 14.7.2 Add retry button for errors
  - [ ] 14.7.3 Show empty state
  - [ ] 14.7.4 Add error messages

### 15. Query Processing (Backend)
- [ ] 15.1 Create GET /api/query endpoint
  - [ ] 15.1.1 Create routes/query.ts
  - [ ] 15.1.2 Accept query parameter
  - [ ] 15.1.3 Validate input
  - [ ] 15.1.4 Return formatted response
- [ ] 15.2 Connect to Honcho Dialectic
  - [ ] 15.2.1 Get query from request
  - [ ] 15.2.2 Call HonchoService.query
  - [ ] 15.2.3 Handle Honcho response
  - [ ] 15.2.4 Add error handling
- [ ] 15.3 Process natural language
  - [ ] 15.3.1 Clean query text
  - [ ] 15.3.2 Add context if needed
  - [ ] 15.3.3 Format for Dialectic
  - [ ] 15.3.4 Log queries
- [ ] 15.4 Format for mobile display
  - [ ] 15.4.1 Truncate if needed
  - [ ] 15.4.2 Add markdown support
  - [ ] 15.4.3 Extract entity mentions
  - [ ] 15.4.4 Add metadata
- [ ] 15.5 Add GPT-4 inference layer
  - [ ] 15.5.1 Enhance Honcho response
  - [ ] 15.5.2 Add intelligent suggestions
  - [ ] 15.5.3 Infer missing connections
  - [ ] 15.5.4 Improve answer quality

### 16. Results Display
- [ ] 16.1 Create ResponseCard component
  - [ ] 16.1.1 Create components/ResponseCard.tsx
  - [ ] 16.1.2 Add card container
  - [ ] 16.1.3 Style with shadow
  - [ ] 16.1.4 Add padding
- [ ] 16.2 Format contact mentions
  - [ ] 16.2.1 Detect @mentions
  - [ ] 16.2.2 Create clickable Text
  - [ ] 16.2.3 Add underline style
  - [ ] 16.2.4 Store contact data
- [ ] 16.3 Add copy functionality
  - [ ] 16.3.1 Add copy icon button
  - [ ] 16.3.2 Use Clipboard API
  - [ ] 16.3.3 Show success toast
  - [ ] 16.3.4 Copy plain text
- [ ] 16.4 Implement pull-to-refresh
  - [ ] 16.4.1 Add to results ScrollView
  - [ ] 16.4.2 Clear and re-query
  - [ ] 16.4.3 Update timestamp
  - [ ] 16.4.4 Show loading state

## Phase 6: Integration & Polish (Day 15-17)

### 17. End-to-End Flow Testing
- [ ] 17.1 Test complete flow
  - [ ] 17.1.1 Input note via voice
  - [ ] 17.1.2 Verify processing
  - [ ] 17.1.3 Check Honcho storage
  - [ ] 17.1.4 Query and verify result
- [ ] 17.2 Fix data flow issues
  - [ ] 17.2.1 Check API responses
  - [ ] 17.2.2 Verify state updates
  - [ ] 17.2.3 Fix any race conditions
  - [ ] 17.2.4 Ensure data consistency
- [ ] 17.3 Optimize API calls
  - [ ] 17.3.1 Add request deduplication
  - [ ] 17.3.2 Implement caching
  - [ ] 17.3.3 Batch where possible
  - [ ] 17.3.4 Reduce payload sizes
- [ ] 17.4 Add loading states
  - [ ] 17.4.1 Audit all async operations
  - [ ] 17.4.2 Add loading indicators
  - [ ] 17.4.3 Disable interactions
  - [ ] 17.4.4 Test loading states

### 18. Error Handling
- [ ] 18.1 Network error handling
  - [ ] 18.1.1 Add network check
  - [ ] 18.1.2 Show offline message
  - [ ] 18.1.3 Queue for retry
  - [ ] 18.1.4 Test airplane mode
- [ ] 18.2 API timeout handling
  - [ ] 18.2.1 Set reasonable timeouts
  - [ ] 18.2.2 Add timeout errors
  - [ ] 18.2.3 Show timeout message
  - [ ] 18.2.4 Add retry button
- [ ] 18.3 Graceful degradation
  - [ ] 18.3.1 Fallback for voice input
  - [ ] 18.3.2 Cache last results
  - [ ] 18.3.3 Show partial data
  - [ ] 18.3.4 Maintain core functions
- [ ] 18.4 User-friendly messages
  - [ ] 18.4.1 Create error message map
  - [ ] 18.4.2 Avoid technical jargon
  - [ ] 18.4.3 Suggest next steps
  - [ ] 18.4.4 Add contact support
- [ ] 18.5 Retry logic
  - [ ] 18.5.1 Add exponential backoff
  - [ ] 18.5.2 Limit retry attempts
  - [ ] 18.5.3 Show retry status
  - [ ] 18.5.4 Allow manual retry

### 19. Performance Optimization
- [ ] 19.1 Optimize bundle size
  - [ ] 19.1.1 Analyze bundle
  - [ ] 19.1.2 Remove unused deps
  - [ ] 19.1.3 Use dynamic imports
  - [ ] 19.1.4 Minimize assets
- [ ] 19.2 Implement caching
  - [ ] 19.2.1 Add React Query
  - [ ] 19.2.2 Cache API responses
  - [ ] 19.2.3 Set cache duration
  - [ ] 19.2.4 Add cache invalidation
- [ ] 19.3 Reduce re-renders
  - [ ] 19.3.1 Add React.memo
  - [ ] 19.3.2 Use useCallback
  - [ ] 19.3.3 Optimize state updates
  - [ ] 19.3.4 Profile with DevTools
- [ ] 19.4 Profile operations
  - [ ] 19.4.1 Measure API response times
  - [ ] 19.4.2 Check render performance
  - [ ] 19.4.3 Monitor memory usage
  - [ ] 19.4.4 Fix bottlenecks

## Phase 7: Deployment Prep (Day 18-19)

### 20. Backend Deployment
- [ ] 20.1 Set up Render account
  - [ ] 20.1.1 Create Render account
  - [ ] 20.1.2 Connect GitHub repo
  - [ ] 20.1.3 Create new Web Service
  - [ ] 20.1.4 Choose Node environment
- [ ] 20.2 Configure environment
  - [ ] 20.2.1 Add all env variables
  - [ ] 20.2.2 Set NODE_ENV=production
  - [ ] 20.2.3 Configure build command
  - [ ] 20.2.4 Set start command
- [ ] 20.3 Deploy to Render
  - [ ] 20.3.1 Trigger deployment
  - [ ] 20.3.2 Watch build logs
  - [ ] 20.3.3 Verify deployment
  - [ ] 20.3.4 Note API URL
- [ ] 20.4 Configure production
  - [ ] 20.4.1 Set up custom domain
  - [ ] 20.4.2 Enable auto-deploy
  - [ ] 20.4.3 Configure health checks
  - [ ] 20.4.4 Set up monitoring
- [ ] 20.5 Test endpoints
  - [ ] 20.5.1 Test /health endpoint
  - [ ] 20.5.2 Test process-note
  - [ ] 20.5.3 Test query endpoint
  - [ ] 20.5.4 Verify Honcho connection

### 21. Mobile Build
- [ ] 21.1 Update API URLs
  - [ ] 21.1.1 Create config/api.ts
  - [ ] 21.1.2 Add production URL
  - [ ] 21.1.3 Use env-based switching
  - [ ] 21.1.4 Test URL resolution
- [ ] 21.2 Create production build
  - [ ] 21.2.1 Update app.json
  - [ ] 21.2.2 Set bundle identifier
  - [ ] 21.2.3 Configure splash screen
  - [ ] 21.2.4 Set app icon
- [ ] 21.3 Build with EAS
  - [ ] 21.3.1 Install EAS CLI
  - [ ] 21.3.2 Run eas build:configure
  - [ ] 21.3.3 Create iOS build
  - [ ] 21.3.4 Wait for completion
- [ ] 21.4 Test on device
  - [ ] 21.4.1 Download build
  - [ ] 21.4.2 Install via TestFlight
  - [ ] 21.4.3 Test all features
  - [ ] 21.4.4 Check performance

### 22. Integration Testing
- [ ] 22.1 Test production flow
  - [ ] 22.1.1 Test voice input
  - [ ] 22.1.2 Test text input
  - [ ] 22.1.3 Test processing
  - [ ] 22.1.4 Test queries
- [ ] 22.2 Verify Honcho
  - [ ] 22.2.1 Check data storage
  - [ ] 22.2.2 Verify persistence
  - [ ] 22.2.3 Test query responses
  - [ ] 22.2.4 Monitor API usage
- [ ] 22.3 Check response times
  - [ ] 22.3.1 Measure input processing
  - [ ] 22.3.2 Measure query time
  - [ ] 22.3.3 Check under 5 seconds
  - [ ] 22.3.4 Identify slow points
- [ ] 22.4 Load testing
  - [ ] 22.4.1 Test concurrent users
  - [ ] 22.4.2 Test rapid inputs
  - [ ] 22.4.3 Monitor server load
  - [ ] 22.4.4 Check rate limits

## Phase 8: Final Testing & Launch (Day 20-21)

### 23. QA Testing
- [ ] 23.1 Test happy paths
  - [ ] 23.1.1 Simple note input
  - [ ] 23.1.2 Complex relationships
  - [ ] 23.1.3 Basic queries
  - [ ] 23.1.4 Multiple sessions
- [ ] 23.2 Test error scenarios
  - [ ] 23.2.1 No network
  - [ ] 23.2.2 API errors
  - [ ] 23.2.3 Invalid input
  - [ ] 23.2.4 Timeout scenarios
- [ ] 23.3 Test edge cases
  - [ ] 23.3.1 Very long input
  - [ ] 23.3.2 Special characters
  - [ ] 23.3.3 Multiple languages
  - [ ] 23.3.4 Rapid submissions
- [ ] 23.4 iOS version testing
  - [ ] 23.4.1 Test on iOS 14
  - [ ] 23.4.2 Test on iOS 15
  - [ ] 23.4.3 Test on iOS 16+
  - [ ] 23.4.4 Different screen sizes
- [ ] 23.5 Fix critical bugs
  - [ ] 23.5.1 Prioritize crashes
  - [ ] 23.5.2 Fix data loss issues
  - [ ] 23.5.3 Resolve UX blockers
  - [ ] 23.5.4 Document known issues

### 24. Documentation
- [ ] 24.1 Create README
  - [ ] 24.1.1 Add project description
  - [ ] 24.1.2 List features
  - [ ] 24.1.3 Add screenshots
  - [ ] 24.1.4 Include tech stack
- [ ] 24.2 Document API
  - [ ] 24.2.1 List all endpoints
  - [ ] 24.2.2 Show request/response
  - [ ] 24.2.3 Add example calls
  - [ ] 24.2.4 Document errors
- [ ] 24.3 Setup instructions
  - [ ] 24.3.1 Prerequisites
  - [ ] 24.3.2 Installation steps
  - [ ] 24.3.3 Configuration
  - [ ] 24.3.4 Running locally
- [ ] 24.4 Create .env.example
  - [ ] 24.4.1 List all variables
  - [ ] 24.4.2 Add descriptions
  - [ ] 24.4.3 Provide examples
  - [ ] 24.4.4 Note required vs optional

### 25. Launch Checklist
- [ ] 25.1 Verify services
  - [ ] 25.1.1 API health check
  - [ ] 25.1.2 Honcho connection
  - [ ] 25.1.3 OpenAI access
  - [ ] 25.1.4 Mobile app builds
- [ ] 25.2 Secure API keys
  - [ ] 25.2.1 Rotate test keys
  - [ ] 25.2.2 Set production keys
  - [ ] 25.2.3 Verify env vars
  - [ ] 25.2.4 Check key permissions
- [ ] 25.3 Monitor usage
  - [ ] 25.3.1 Set up logging
  - [ ] 25.3.2 Monitor API calls
  - [ ] 25.3.3 Track errors
  - [ ] 25.3.4 Watch costs
- [ ] 25.4 Error tracking
  - [ ] 25.4.1 Add Sentry (optional)
  - [ ] 25.4.2 Or basic logging
  - [ ] 25.4.3 Set up alerts
  - [ ] 25.4.4 Create runbook
- [ ] 25.5 Share TestFlight
  - [ ] 25.5.1 Upload to TestFlight
  - [ ] 25.5.2 Add beta testers
  - [ ] 25.5.3 Send invitations
  - [ ] 25.5.4 Gather feedback

## Total Task Count: 459 subtasks across 25 main categories