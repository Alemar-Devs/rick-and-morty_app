import { Character } from "@/types/character";

export interface SportCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export type CarouselState = {
  allCards: Character[];
  currentIndex: number;
  isTransitioning: boolean;
  isLoading: boolean;
};

export type SportCardProps = {
  character: Character;
  isCenter: boolean;
  position: number;
  onCardClick?: () => void;
};

export interface CarouselControlsProps {
  onNext: () => void;
  onPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  isTransitioning: boolean;
}
