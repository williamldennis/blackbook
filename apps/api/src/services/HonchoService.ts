import { Honcho } from '@honcho-ai/sdk';
import { env } from '../config/env';
import { Entity, Relationship } from '@blackbook/types';

export class HonchoService {
  private client: Honcho;
  private userPeer: any = null;
  private currentSession: any = null;

  constructor() {
    this.client = new Honcho({
      apiKey: env.HONCHO_API_KEY || undefined,
      environment: env.HONCHO_API_KEY ? "production" : "demo",
      workspace: env.HONCHO_APP_ID || "default"
    });
  }

  async getOrCreateUserPeer(userId: string = 'default-user') {
    if (!this.userPeer) {
      this.userPeer = await this.client.peer(userId);
    }
    return this.userPeer;
  }

  async getOrCreateSession(sessionId: string = 'blackbook-main') {
    this.currentSession = await this.client.session(sessionId);
    const userPeer = await this.getOrCreateUserPeer();
    await this.currentSession.addPeers([userPeer]);
    return this.currentSession;
  }

  async storeNote(content: string, entities: Entity[], relationships: Relationship[], source: 'voice' | 'text') {
    try {
      const session = await this.getOrCreateSession();
      const userPeer = await this.getOrCreateUserPeer();

      const metadata = {
        source,
        timestamp: new Date().toISOString(),
        entities: entities.map(e => ({
          type: e.type,
          value: e.value,
          confidence: e.confidence
        })),
        relationships: relationships.map(r => ({
          from: r.from,
          to: r.to,
          type: r.type,
          confidence: r.confidence
        })),
        entityCount: entities.length,
        relationshipCount: relationships.length
      };

      await session.addMessages([
        userPeer.message(content, metadata)
      ]);

      return { success: true, metadata };
    } catch (error) {
      console.error('Error storing note in Honcho:', error);
      throw new Error('Failed to store note');
    }
  }

  async queryMemory(question: string, userId: string = 'default-user') {
    try {
      const userPeer = await this.getOrCreateUserPeer(userId);
      const response = await userPeer.chat(question);
      
      return {
        answer: response,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error querying Honcho:', error);
      throw new Error('Failed to query memory');
    }
  }
}