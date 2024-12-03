import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Character } from '@/types/character';
import { RickMortyService } from '@/server/services/rick-morty.service';

export function useRandomCharacters(count: number = 20): UseQueryResult<Character[]> {
  return useQuery({
    queryKey: ['characters', 'random', count],
    queryFn: () => RickMortyService.getRandomCharacters(count),
    staleTime: 1000 * 60 * 5, // Datos considerados frescos por 5 minutos
    gcTime: 1000 * 60 * 60, // Caché mantenido por 1 hora
  });
}

export function useCharacter(id: number): UseQueryResult<Character | null> {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => RickMortyService.getCharacterById(id),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60,
  });
}

export function useCharacters(ids: number[]): UseQueryResult<Character[]> {
  return useQuery({
    queryKey: ['characters', ids],
    queryFn: () => RickMortyService.getCharactersByIds(ids),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60,
  });
}
