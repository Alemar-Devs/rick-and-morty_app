'use client';

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SportCardProps } from "./types";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SportCharacterCard({ character, isCenter, position, onCardClick }: SportCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Función para determinar la intensidad del overlay basado en la posición
  const getOverlayClasses = () => {
    if (isCenter) return '';
    const baseClasses = 'absolute inset-0 transition-opacity duration-300';
    const positionValue = typeof position === 'number' ? Math.abs(position) : 1;
    
    if (positionValue === 1) {
      return cn(baseClasses, 'bg-background/30 backdrop-blur-[2px]');
    }
    return cn(baseClasses, 'bg-background/50 backdrop-blur-[3px]');
  };

  return (
    <div 
      className={`
        group
        ${isCenter ? 'cursor-pointer' : 'cursor-default'}
      `}
      onClick={() => isCenter && onCardClick?.()}
    >
      <Card className={`
        relative w-[250px] rounded-lg overflow-hidden
        transition-all duration-500 ease-in-out
        transform-gpu
        ${isCenter ? 'hover:scale-105' : ''}
        before:absolute before:inset-0 before:z-[-1]
        before:bg-gradient-to-r before:from-primary/20 before:via-primary/10 before:to-primary/20
        before:blur-xl before:opacity-75
        after:absolute after:inset-0 after:z-[-2]
        after:bg-gradient-to-b after:from-background/50 after:to-background
        after:blur-3xl after:opacity-90
        shadow-[0_0_15px_rgba(0,0,0,0.2)]
        border border-white/10
        backdrop-blur-sm
      `}>
        <CardContent className="p-0">
          <AspectRatio ratio={3/4}>
            <div className="relative w-full h-full">
              {/* Efecto de brillo de fondo */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 opacity-50" />
              
              {/* Skeleton mientras carga la imagen */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-muted/50 animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skeleton-shine" />
                </div>
              )}

              {/* Imagen del personaje */}
              {!imageError && (
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className={`
                    object-cover transition-opacity duration-300
                    ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                  `}
                  sizes="250px"
                  priority={isCenter}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(true);
                  }}
                />
              )}

              {/* Imagen de respaldo en caso de error */}
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                  <span className="text-sm text-muted-foreground">Failed to load image</span>
                </div>
              )}

              {/* Overlay basado en la posición */}
              {!isCenter && <div className={getOverlayClasses()} />}

              {/* Información del personaje */}
              <div className={cn(
                "absolute bottom-0 left-0 right-0 p-4",
                "bg-gradient-to-t from-black/80 to-transparent",
                !isCenter && "opacity-90"
              )}>
                <h3 className="text-lg font-bold text-white mb-1">{character.name}</h3>
                <p className="text-sm text-white/80">{character.species}</p>
              </div>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>
    </div>
  );
}
