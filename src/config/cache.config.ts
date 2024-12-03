export const CACHE_CONFIG = {
  // Tiempos de caché
  times: {
    short: 60, // 1 minuto
    medium: 300, // 5 minutos
    long: 3600, // 1 hora
    day: 86400, // 1 día
  },
  
  // Tags para revalidación
  tags: {
    characters: 'characters',
    character: 'character',
  },
  
  // Configuración de revalidación
  revalidate: {
    onDemand: 0, // Revalidación manual
    periodic: 300, // 5 minutos
  },
} as const;

// Tipos de revalidación
export type CacheTags = keyof typeof CACHE_CONFIG.tags;
export type CacheTimes = keyof typeof CACHE_CONFIG.times;
