'use server';

import { RickMortyService } from '../services/rick-morty.service';
import { CharacterFilters } from '../models/character.model';

export async function getCharacters(page: number = 1, filters?: CharacterFilters) {
  return RickMortyService.getCharacters(page, filters);
}

export async function getCharacterById(id: number) {
  return RickMortyService.getCharacterById(id);
}

export async function getRandomCharacters(count: number = 20) {
  return RickMortyService.getRandomCharacters(count);
}

export async function searchCharacters(query: string) {
  return RickMortyService.searchCharacters(query);
}
