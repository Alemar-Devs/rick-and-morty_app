import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { CharacterResponse } from '@/server/models/character.model';
import { RickMortyService } from '@/server/services/rick-morty.service';
import { SearchFilters } from '@/types/filters';

export function useCharacterSearch(
  filters: SearchFilters,
  enabled: boolean = false
): UseQueryResult<CharacterResponse, Error> {
  const searchTerm = filters.name?.trim() || '';
  const currentPage = filters.page || 1;
  
  // Determinar si el término de búsqueda es un ID
  const isSearchById = /^\d+$/.test(searchTerm);
  
  // Solo permitir la búsqueda si enabled es true Y hay algún filtro activo
  const shouldSearch = enabled && (
    searchTerm !== '' || 
    filters.status !== '' || 
    filters.species !== '' || 
    filters.gender !== ''
  );
  
  return useQuery({
    queryKey: ['characters', { 
      name: filters.name,
      status: filters.status,
      species: filters.species,
      gender: filters.gender,
      page: currentPage 
    }],
    queryFn: async () => {
      try {
        // Si es una búsqueda por ID, ajustar la URL
        if (isSearchById) {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${searchTerm}`);
          if (!response.ok) {
            if (response.status === 404) {
              return {
                results: [],
                info: { pages: 0, count: 0 }
              };
            }
            throw new Error('Error en la búsqueda');
          }
          const character = await response.json();
          return {
            results: [character],
            info: { pages: 1, count: 1 }
          };
        }
        
        // Búsqueda normal por nombre y filtros
        const searchFilters = {
          ...filters,
          page: currentPage
        };
        
        return await RickMortyService.getCharacters(searchFilters);
      } catch (error) {
        if ((error as any)?.response?.status === 404) {
          return {
            results: [],
            info: { pages: 0, count: 0 }
          };
        }
        throw error;
      }
    },
    enabled: shouldSearch, // Solo se ejecutará cuando shouldSearch sea true
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchOnWindowFocus: false,
  });
}
