import { create } from 'zustand';
import { Character } from '@/types/character';

interface CharacterState {
  selectedCharacter: Character | null;
  favorites: Character[];
  filters: {
    status: string;
    species: string;
    gender: string;
  };
  // Actions
  setSelectedCharacter: (character: Character | null) => void;
  toggleFavorite: (character: Character) => void;
  setFilters: (filters: Partial<CharacterState['filters']>) => void;
  resetFilters: () => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  selectedCharacter: null,
  favorites: [],
  filters: {
    status: '',
    species: '',
    gender: '',
  },

  setSelectedCharacter: (character) =>
    set({ selectedCharacter: character }),

  toggleFavorite: (character) =>
    set((state) => {
      const isFavorite = state.favorites.some((fav) => fav.id === character.id);
      return {
        favorites: isFavorite
          ? state.favorites.filter((fav) => fav.id !== character.id)
          : [...state.favorites, character],
      };
    }),

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),

  resetFilters: () =>
    set({
      filters: {
        status: '',
        species: '',
        gender: '',
      },
    }),
}));
