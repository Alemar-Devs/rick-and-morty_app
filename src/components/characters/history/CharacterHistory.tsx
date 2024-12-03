'use client';

import { useCharacterHistory } from '@/store/character-history.store';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export function CharacterHistory() {
  const { history, removeCharacter, loadHistory } = useCharacterHistory();

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  if (history.length === 0) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        No hay historial de personajes
      </div>
    );
  }

  return (
    <div className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-lg mb-6">
      <div className="px-4 py-2 border-b">
        <h3 className="text-sm font-medium">Personajes vistos recientemente</h3>
      </div>
      <div className="relative py-4">
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex space-x-4 px-4 pt-4 min-h-[80px] items-center pb-4">
            <AnimatePresence>
              {history.map((character) => (
                <motion.div
                  key={character.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative group flex-shrink-0"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-muted hover:border-primary transition-colors">
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs text-white font-medium">#{character.id}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-background border shadow-sm"
                    onClick={() => removeCharacter(character.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <ScrollBar orientation="horizontal" className="mt-1 mx-4" />
        </ScrollArea>
      </div>
    </div>
  );
}
