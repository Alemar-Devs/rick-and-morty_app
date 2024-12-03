import { create } from 'zustand';
import { CharacterHistory } from '@/db';
import { characterHistoryService } from '@/services/character-history.service';

interface CharacterHistoryState {
  history: CharacterHistory[];
  addCharacter: (character: { id: string; name: string; image: string }) => Promise<void>;
  removeCharacter: (characterId: string) => Promise<void>;
  clearHistory: () => Promise<void>;
  loadHistory: () => Promise<void>;
}

export const useCharacterHistory = create<CharacterHistoryState>((set) => ({
  history: [],
  
  loadHistory: async () => {
    const history = await characterHistoryService.getAll();
    set({ history });
  },

  addCharacter: async (character) => {
    const newCharacter = {
      characterId: character.id,
      name: character.name,
      image: character.image,
      timestamp: new Date(),
    };

    const [added] = await characterHistoryService.add(newCharacter);
    if (added) {
      set((state) => ({
        history: [...state.history, added],
      }));
    }
  },

  removeCharacter: async (characterId) => {
    await characterHistoryService.remove(characterId);
    set((state) => ({
      history: state.history.filter((char) => char.characterId !== characterId),
    }));
  },

  clearHistory: async () => {
    await characterHistoryService.clear();
    set({ history: [] });
  },
}));
