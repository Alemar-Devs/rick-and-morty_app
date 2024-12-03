'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRandomCharacters } from './useRickMorty';
import { Character } from '@/types/character';

const VISIBLE_CARDS = 5;
const INITIAL_INDEX = 0;
const ROTATION_INTERVAL = 3000;

export interface CarouselState {
  currentIndex: number;
  isTransitioning: boolean;
  isPlaying: boolean;
}

export function useCharacterCarousel() {
  const { data: characters = [] } = useRandomCharacters(VISIBLE_CARDS);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const totalCards = characters.length;

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [isTransitioning, totalCards]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [isTransitioning, totalCards]);

  const handleHover = useCallback((isHovered: boolean) => {
    setIsPlaying(!isHovered);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (!isPlaying || !characters.length) {
      return;
    }

    const interval = setInterval(() => {
      if (currentIndex < totalCards - 1) {
        handleNext();
      } else {
        setIsPlaying(false);
      }
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, totalCards, handleNext]);

  const visibleCards = characters.slice(currentIndex, currentIndex + VISIBLE_CARDS);

  return {
    characters: visibleCards,
    currentIndex,
    isTransitioning,
    isLoading: !characters.length,
    handleNext,
    handlePrev,
    handleHover,
    totalCards,
  };
}
