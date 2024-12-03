'use client';

import { Character } from '@/server/models/character.model';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion } from 'framer-motion';
import { CharacterCard } from '@/components/cards/character-card';

interface CharacterSearchGridProps {
  characters: Character[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  isError: boolean;
  onPageChange: (page: number) => void;
  onCharacterSelect?: (character: Character) => void;
}

export function CharacterSearchGrid({
  characters,
  currentPage,
  totalPages,
  isLoading,
  isError,
  onPageChange,
  onCharacterSelect
}: CharacterSearchGridProps) {
  if (isError) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          No se encontró ningún personaje. Por favor, intenta con otro término de búsqueda.
        </AlertDescription>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (characters.length === 0) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          No se encontraron personajes con los filtros seleccionados.
        </AlertDescription>
      </Alert>
    );
  }

  const handleCardClick = (character: Character) => {
    onCharacterSelect?.(character);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-items-center">
        {characters.map((character, index) => (
          <motion.div
            key={character.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
            className="w-full max-w-[250px] cursor-pointer"
            onClick={() => handleCardClick(character)}
          >
            <CharacterCard character={character} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          Anterior
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Página {currentPage} de {totalPages}
          </span>
        </div>
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
