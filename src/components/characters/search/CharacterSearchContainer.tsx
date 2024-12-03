'use client';

import { useCallback, useState, useEffect } from 'react';
import { CharacterSearch } from './CharacterSearch';
import { CharacterSearchGrid } from './CharacterSearchGrid';
import { CharacterHistory } from '../history/CharacterHistory';
import { useCharacterSearch } from '@/hooks/useCharacterSearch';
import { useCharacterHistory } from '@/store/character-history.store';
import { SearchFilters } from '@/types/filters';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const initialFilters: SearchFilters = {
  name: '',
  status: 'all',
  species: 'all',
  gender: 'all',
  page: 1
};

export function CharacterSearchContainer() {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [hasSearched, setHasSearched] = useState(false);
  const { addCharacter } = useCharacterHistory();

  const { data, isLoading, isError } = useCharacterSearch(filters, hasSearched);

  const handleSearch = useCallback((newFilters: SearchFilters) => {
    const hasActiveFilters = 
      (newFilters.name?.trim() || '') !== '' || 
      newFilters.status !== '' || 
      newFilters.species !== '' || 
      newFilters.gender !== '';

    setFilters({ 
      ...newFilters,
      page: 1 
    });
    
    if (hasActiveFilters) {
      setHasSearched(true);
    }
  }, []);

  const handleReset = useCallback(() => {
    setFilters(initialFilters);
    setHasSearched(false);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setFilters(prev => ({
      ...prev,
      page
    }));
  }, []);

  const handleCharacterSelect = useCallback((character: any) => {
    addCharacter({
      id: character.id,
      name: character.name,
      image: character.image,
      timestamp: Date.now()
    });
  }, [addCharacter]);

  const currentPage = filters.page || 1;
  const totalPages = data?.info?.pages || 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 space-y-4">
          <CharacterSearch 
            onSearch={handleSearch}
            onReset={handleReset}
          />
        </div>
        <div className="w-[600px]">
          <CharacterHistory />
        </div>
      </div>

      {!hasSearched && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Utiliza el buscador y los filtros para encontrar personajes de Rick and Morty
          </AlertDescription>
        </Alert>
      )}
      
      {hasSearched && data?.results && (
        <CharacterSearchGrid
          characters={data.results}
          currentPage={currentPage}
          totalPages={totalPages}
          isLoading={isLoading}
          isError={isError}
          onPageChange={handlePageChange}
          onCharacterSelect={handleCharacterSelect}
        />
      )}
    </div>
  );
}
