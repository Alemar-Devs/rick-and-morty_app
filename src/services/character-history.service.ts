import { db } from '@/db';
import { characterHistory } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { InsertCharacterHistory } from '@/db/index';

export const characterHistoryService = {
  async getAll() {
    return await db
      .select()
      .from(characterHistory)
      .orderBy(characterHistory.timestamp);
  },

  async add(character: InsertCharacterHistory) {
    return await db.insert(characterHistory).values(character).returning();
  },

  async remove(characterId: string) {
    return await db
      .delete(characterHistory)
      .where(eq(characterHistory.characterId, characterId))
      .returning();
  },

  async clear() {
    return await db.delete(characterHistory).returning();
  }
};
