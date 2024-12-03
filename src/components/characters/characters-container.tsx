'use client';

import { useRandomCharacters } from "@/hooks/useRickMorty"
import { CharactersGrid } from "./characters-grid"

export function CharactersContainer() {
  const { data: characters = [], isLoading } = useRandomCharacters()
  return <CharactersGrid characters={characters} />
}
