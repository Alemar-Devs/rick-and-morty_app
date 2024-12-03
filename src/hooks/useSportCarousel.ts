'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { CarouselState } from '@/components/sport-cards/types';
import { getRandomCharacters } from '@/server/services/sport-card-service';
import { Character } from '@/types/character';

const ROTATION_INTERVAL = 3000;
const BUFFER_SIZE = 20;
const VISIBLE_CARDS = 5;
const INITIAL_INDEX = 0;

const initialState: CarouselState = {
  allCards: [],
  currentIndex: INITIAL_INDEX,
  isTransitioning: false,
  isLoading: true,
};

export function useSportCarousel() {
  const [state, setState] = useState<CarouselState>(initialState);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Cargar tarjetas iniciales
  useEffect(() => {
    let isMounted = true;

    const loadInitialCards = async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true }));
        console.log('Fetching initial cards...');
        
        const cards = await getRandomCharacters(BUFFER_SIZE);
        console.log('Received cards:', cards);

        if (!isMounted) return;

        if (!cards || cards.length === 0) {
          throw new Error('No cards loaded');
        }

        setState(prev => ({
          ...prev,
          allCards: cards,
          currentIndex: INITIAL_INDEX,
          isLoading: false
        }));

        console.log('State updated with cards');
      } catch (error) {
        console.error('Error loading cards:', error);
        if (isMounted) {
          setState(prev => ({ ...prev, isLoading: false }));
        }
      }
    };

    loadInitialCards();

    return () => {
      isMounted = false;
    };
  }, []);

  // Obtener las cinco tarjetas visibles actuales
  const visibleCards = useMemo(() => {
    if (state.isLoading || !state.allCards || state.allCards.length < VISIBLE_CARDS) {
      console.log('No visible cards yet - loading:', state.isLoading, 'cards length:', state.allCards?.length);
      return [];
    }

    const startIndex = Math.max(0, Math.min(state.currentIndex, state.allCards.length - VISIBLE_CARDS));
    const endIndex = startIndex + VISIBLE_CARDS;
    const cards = state.allCards.slice(startIndex, endIndex);

    console.log('Visible cards:', cards);
    return cards;
  }, [state.allCards, state.currentIndex, state.isLoading]);

  // Rotación automática
  useEffect(() => {
    if (!isPlaying || state.isLoading || !visibleCards.length) {
      return;
    }

    const interval = setInterval(() => {
      if (state.currentIndex < state.allCards.length - VISIBLE_CARDS) {
        handleNext();
      } else {
        setIsPlaying(false);
      }
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [isPlaying, state.currentIndex, state.allCards.length, state.isLoading, visibleCards.length]);

  const handleNext = useCallback(() => {
    if (state.isTransitioning || state.currentIndex >= state.allCards.length - VISIBLE_CARDS) return;

    setState(prev => ({
      ...prev,
      currentIndex: prev.currentIndex + 1,
      isTransitioning: true
    }));

    setTimeout(() => {
      setState(prev => ({ ...prev, isTransitioning: false }));
      setActiveIndex(prev => prev + 1);
    }, 500);
  }, [state.isTransitioning, state.currentIndex, state.allCards.length]);

  const handlePrev = useCallback(() => {
    if (state.isTransitioning || state.currentIndex <= 0) return;

    setState(prev => ({
      ...prev,
      currentIndex: prev.currentIndex - 1,
      isTransitioning: true
    }));

    setTimeout(() => {
      setState(prev => ({ ...prev, isTransitioning: false }));
      setActiveIndex(prev => prev - 1);
    }, 500);
  }, [state.isTransitioning, state.currentIndex]);

  const handleHover = useCallback((isHovered: boolean) => {
    setIsPlaying(!isHovered);
  }, []);

  return {
    characters: visibleCards,
    isTransitioning: state.isTransitioning,
    isLoading: state.isLoading,
    handleNext,
    handlePrev,
    handleHover,
    currentIndex: state.currentIndex,
    totalCards: state.allCards.length,
    activeIndex
  };
}
