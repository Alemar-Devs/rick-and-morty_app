'use client';

import { Character } from '@/types/character';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCharacterStore } from '@/store/character.store';
import { Heart } from 'lucide-react';
import Image from 'next/image';

interface CharacterCardProps {
  character: Character;
  showFavoriteButton?: boolean;
}

export function CharacterCard({ character, showFavoriteButton = true }: CharacterCardProps) {
  const { favorites, toggleFavorite, setSelectedCharacter } = useCharacterStore();
  const isFavorite = favorites.some(fav => fav.id === character.id);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative w-full h-64 group">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {showFavoriteButton && (
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 transition-colors ${
              isFavorite ? 'text-red-500 hover:text-red-600' : 'text-white hover:text-red-400'
            }`}
            onClick={() => toggleFavorite(character)}
          >
            <Heart className="h-6 w-6" fill={isFavorite ? 'currentColor' : 'none'} />
          </Button>
        )}
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">{character.name}</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-medium">Status:</span>{' '}
            <span className={`${
              character.status === 'Alive' ? 'text-green-500' :
              character.status === 'Dead' ? 'text-red-500' :
              'text-yellow-500'
            }`}>
              {character.status}
            </span>
          </p>
          <p className="text-sm">
            <span className="font-medium">Species:</span> {character.species}
          </p>
          <p className="text-sm">
            <span className="font-medium">Location:</span> {character.location.name}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
