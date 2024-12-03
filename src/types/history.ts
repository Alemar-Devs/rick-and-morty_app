export interface RecentCharacter {
  id: number;
  name: string;
  image: string;
  timestamp: number; // Para ordenar por más reciente
}

export interface CharacterHistory {
  recentCharacters: RecentCharacter[];
  maxItems?: number; // Límite de items en el historial
}
