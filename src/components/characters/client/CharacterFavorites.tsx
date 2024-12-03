'use client';

import { useCharacterStore } from '@/store/character.store';
import { CharacterCard } from './CharacterCard';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export function CharacterFavorites() {
  const { favorites, toggleFavorite } = useCharacterStore();

  if (!favorites.length) {
    return (
      <div className="text-center p-8">
        <Heart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No Favorites Yet</h3>
        <p className="text-muted-foreground">
          Start adding characters to your favorites by clicking the heart icon on their cards.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Favorites ({favorites.length})</h2>
        <Button
          variant="outline"
          onClick={() => favorites.forEach(char => toggleFavorite(char))}
        >
          Clear All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {favorites.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            showFavoriteButton
          />
        ))}
      </div>
    </div>
  );
}
