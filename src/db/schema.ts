import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const characterHistory = pgTable('character_history', {
  id: serial('id').primaryKey(),
  characterId: text('character_id').notNull(),
  name: text('name').notNull(),
  image: text('image').notNull(),
  timestamp: timestamp('timestamp').defaultNow().notNull(),
});
