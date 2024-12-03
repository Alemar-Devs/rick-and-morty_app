import { Character } from '@/types/character';

const API_URL = 'https://rickandmortyapi.com/api/character';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Obtener un conjunto aleatorio de personajes
export async function getRandomCharacters(count: number): Promise<Character[]> {
  try {
    // Añadir un pequeño delay para mostrar el skeleton
    await delay(1000);

    // Primero, obtener el total de personajes disponibles
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters info');
    }
    
    const data = await response.json();
    const totalCharacters = data.info.count;

    // Generar índices aleatorios únicos
    const randomIndices = new Set<number>();
    while (randomIndices.size < count) {
      const randomId = Math.floor(Math.random() * totalCharacters) + 1;
      randomIndices.add(randomId);
    }

    // Obtener los personajes usando los índices aleatorios
    const charactersPromises = Array.from(randomIndices).map(async id => {
      const res = await fetch(`${API_URL}/${id}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch character ${id}`);
      }
      return res.json();
    });

    const characters = await Promise.all(charactersPromises);
    console.log('Fetched characters:', characters); // Debug log
    return characters;
  } catch (error) {
    console.error('Error fetching random characters:', error);
    return [];
  }
}

// Obtener un personaje específico por ID
export async function getCharacterById(id: number): Promise<Character | null> {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch character ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching character:', error);
    return null;
  }
}

// Obtener el siguiente personaje (simulado para el ejemplo)
export async function getNextCharacter(): Promise<Character | null> {
  const characters = await getRandomCharacters(1);
  return characters[0] || null;
}
