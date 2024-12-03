'use client';

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface CarouselControlsProps {
  onNext: () => void;
  onPrev: () => void;
  onTogglePlay: () => void;
  isPlaying: boolean;
  disabled?: boolean;
}

export function CarouselControls({
  onNext,
  onPrev,
  onTogglePlay,
  isPlaying,
  disabled = false
}: CarouselControlsProps) {
  return (
    <>
      {/* Controles laterales */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70"
          onClick={onPrev}
          disabled={disabled}
          aria-label="Previous character"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="absolute inset-y-0 right-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70"
          onClick={onNext}
          disabled={disabled}
          aria-label="Next character"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Control de reproducción */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70"
          onClick={onTogglePlay}
          disabled={disabled}
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
      </div>
    </>
  );
}
