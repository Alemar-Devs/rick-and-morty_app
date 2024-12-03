'use client';

import { useEffect, useState } from 'react';
import { Character } from '@/types/character';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CharacterCard } from './CharacterCard';
import { useCharacterCarousel } from '@/hooks/useCharacterCarousel';

export function CharacterCarousel() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const {
    characters,
    isTransitioning,
    isLoading,
    handleNext,
    handlePrev,
    handleHover,
    currentIndex,
    totalCards,
  } = useCharacterCarousel();

  const getCardPosition = (index: number): number => {
    const centerIndex = Math.floor(characters.length / 2);
    const position = index - currentIndex;
    return position;
  };

  const getCardStyle = (index: number) => {
    const position = getCardPosition(index);
    const isCenter = position === 0;
    const absPosition = Math.abs(position);

    return {
      transform: `
        translateX(${position * 60}%)
        scale(${1 - absPosition * 0.2})
        translateZ(${-absPosition * 100}px)
      `,
      zIndex: totalCards - absPosition,
      opacity: 1 - absPosition * 0.3,
      transition: isTransitioning ? 'all 0.5s ease-in-out' : 'none',
    };
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          characters.map((character, index) => (
            <div
              key={character.id}
              className="absolute w-80 cursor-pointer"
              style={getCardStyle(index)}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <CharacterCard character={character} />
            </div>
          ))
        )}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2"
        onClick={handlePrev}
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={handleNext}
        disabled={isTransitioning}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
