import { CACHE_CONFIG } from '@/config/cache.config';
import { rickMortyClient } from '@/lib/http-client';
import { Character, CharacterResponse } from '@/server/models/character.model';
import { SearchFilters } from '@/types/filters';

const API_BASE_URL = 'https://rickandmortyapi.com/api';
const DEFAULT_REVALIDATE_TIME = 300; // 5 minutos

/**
 * Service for interacting with the Rick and Morty API
 */
export class RickMortyService {
  static async getCharacters(filters: SearchFilters): Promise<CharacterResponse> {
    const queryParams = new URLSearchParams();
    
    if (filters.name) queryParams.append('name', filters.name);
    if (filters.status) queryParams.append('status', filters.status);
    if (filters.species) queryParams.append('species', filters.species);
    if (filters.gender) queryParams.append('gender', filters.gender);
    if (filters.page) queryParams.append('page', filters.page.toString());

    return rickMortyClient.get<CharacterResponse>(`/character?${queryParams.toString()}`, {
      tags: [CACHE_CONFIG.tags.characters],
      revalidate: DEFAULT_REVALIDATE_TIME,
    });
  }

  static async getCharacterById(id: number): Promise<Character> {
    return rickMortyClient.get<Character>(`/character/${id}`, {
      tags: [CACHE_CONFIG.tags.characters],
      revalidate: DEFAULT_REVALIDATE_TIME,
    });
  }

  static async getCharactersByIds(ids: number[]): Promise<Character[]> {
    if (!ids.length) return [];
    return rickMortyClient.get<Character[]>(`/character/${ids.join(',')}`, {
      tags: [CACHE_CONFIG.tags.characters],
      revalidate: DEFAULT_REVALIDATE_TIME,
    });
  }

  static async getRandomCharacters(count: number = 20): Promise<Character[]> {
    // Get total count of characters
    const { info } = await this.getCharacters({});
    const totalCharacters = info.count;

    // Generate random unique IDs
    const randomIds = new Set<number>();
    while (randomIds.size < count) {
      randomIds.add(Math.floor(Math.random() * totalCharacters) + 1);
    }

    // Fetch characters by IDs
    return this.getCharactersByIds(Array.from(randomIds));
  }

  static async searchCharacters(query: string): Promise<Character[]> {
    const response = await this.getCharacters({ name: query });
    return response.results;
  }
}
