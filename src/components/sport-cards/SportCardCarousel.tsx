'use client';

import { useCharacterCarousel } from "@/hooks/useCharacterCarousel";
import { SportCharacterCard } from "./SportCharacterCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Character } from "@/types/character";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

export function SportCardCarousel() {
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
    return index - centerIndex;
  };

  const getCardStyle = (position: number) => {
    const baseTransform = 'translateX(-50%)';
    // Ajustamos el offset horizontal para cards más compactas
    const xOffset = position * (Math.abs(position) > 1 ? 100 : 120);
    const zOffset = Math.abs(position) * 120;
    
    // Reducimos más la escala para las cards externas
    const scale = position === 0 
      ? 1 
      : Math.abs(position) === 1 
        ? 0.85 
        : 0.7;
    
    // Aumentamos la opacidad para el efecto de desvanecimiento
    const opacity = position === 0 
      ? 1 
      : Math.abs(position) === 1 
        ? 0.6 
        : 0.3;

    return {
      transform: `${baseTransform} translateX(${xOffset}px) translateZ(${-zOffset}px) scale(${scale})`,
      zIndex: 10 - Math.abs(position),
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'absolute',
      left: '50%',
      opacity,
      filter: Math.abs(position) > 1 ? 'blur(1px)' : 'none',
      mask: Math.abs(position) > 1 
        ? 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        : 'none',
      WebkitMask: Math.abs(position) > 1 
        ? 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        : 'none',
    } as React.CSSProperties;
  };

  return (
    <div className="relative w-full h-[500px] -mt-4">
      {/* Efectos de luz ambiental */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luz principal desde arriba */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-[#5AE65A]/20 blur-[100px] rounded-full" />
        
        {/* Luz secundaria desde abajo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-[#5AE65A]/10 blur-[80px] rounded-full" />
        
        {/* Luces laterales suaves */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[100px] h-[300px] bg-[#5AE65A]/5 blur-[60px] rounded-full" />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[100px] h-[300px] bg-[#5AE65A]/5 blur-[60px] rounded-full" />
      </div>

      {/* Contenedor del carrusel con perspectiva */}
      <div 
        className="absolute inset-0 perspective-[1000px]"
      >
        {characters.map((character, index) => {
          const position = getCardPosition(index);
          const style = getCardStyle(position);
          const isCenter = position === 0;

          return (
            <div
              key={character.id}
              style={style}
              className={cn(
                'transition-all duration-500',
                isTransitioning && 'pointer-events-none'
              )}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <SportCharacterCard
                character={character}
                isCenter={isCenter}
                position={position}
                onCardClick={() => setSelectedCharacter(character)}
              />
            </div>
          );
        })}
      </div>

      {/* Botones de navegación */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          disabled={currentIndex === 0 || isTransitioning}
          className="
            bg-background/70 backdrop-blur-md 
            hover:bg-background/80 
            shadow-lg 
            border-[#5AE65A]/30 
            hover:border-[#5AE65A]/50
            transition-colors
            group
          "
        >
          <ChevronLeft className="h-4 w-4 text-[#5AE65A] group-hover:text-[#7FFF7F]" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentIndex >= totalCards - characters.length || isTransitioning}
          className="
            bg-background/70 backdrop-blur-md 
            hover:bg-background/80 
            shadow-lg 
            border-[#5AE65A]/30 
            hover:border-[#5AE65A]/50
            transition-colors
            group
          "
        >
          <ChevronRight className="h-4 w-4 text-[#5AE65A] group-hover:text-[#7FFF7F]" />
        </Button>
      </div>

      {/* Modal de personaje */}
      <Dialog open={!!selectedCharacter} onOpenChange={() => setSelectedCharacter(null)}>
        <DialogContent className="sm:max-w-[425px] bg-background/95 backdrop-blur-xl">
          {selectedCharacter && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedCharacter.name}</DialogTitle>
                <DialogDescription className="text-foreground/70">
                  {selectedCharacter.species} - {selectedCharacter.status}
                </DialogDescription>
              </DialogHeader>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden my-4">
                <Image
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Origin</h4>
                    <p className="text-sm text-foreground/70">{selectedCharacter.origin.name}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Location</h4>
                    <p className="text-sm text-foreground/70">{selectedCharacter.location.name}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Gender</h4>
                  <p className="text-sm text-foreground/70">{selectedCharacter.gender}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
