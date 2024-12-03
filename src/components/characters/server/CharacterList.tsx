import { getCharacters } from '@/server/actions/character.actions';
import { CharacterGrid } from '../client/CharacterGrid';

export async function CharacterList({ page = 1 }) {
  const { results: characters } = await getCharacters(page);
  
  return <CharacterGrid characters={characters} />;
}
