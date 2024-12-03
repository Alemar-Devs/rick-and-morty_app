import { drizzle } from 'drizzle-orm/neon-http';
import { neon, neonConfig } from '@neondatabase/serverless';
import { characterHistory } from './schema';

neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export { db };
export type CharacterHistory = typeof characterHistory.$inferSelect;
export type InsertCharacterHistory = typeof characterHistory.$inferInsert;
