import { cache } from 'react';
import { CACHE_CONFIG } from '@/config/cache.config';

interface FetchOptions extends RequestInit {
  tags?: string[];
  revalidate?: number;
}

class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetchWithCache<T>(
    url: string,
    options: FetchOptions = {}
  ): Promise<T> {
    const { tags = [], revalidate = CACHE_CONFIG.revalidate.periodic, ...fetchOptions } = options;
    
    const fetchData = cache(
      async () => {
        const response = await fetch(this.baseUrl + url, {
          ...fetchOptions,
          next: {
            revalidate,
            tags,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      }
    );

    return fetchData();
  }

  async get<T>(url: string, options?: FetchOptions): Promise<T> {
    return this.fetchWithCache<T>(url, {
      ...options,
      method: 'GET',
    });
  }

  // Método para revalidar el caché por tags
  async revalidateCache(tags: string[]) {
    try {
      await Promise.all(
        tags.map(tag =>
          fetch('/api/revalidate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tag }),
          })
        )
      );
    } catch (error) {
      console.error('Error revalidating cache:', error);
    }
  }
}

// Instancia singleton para la API de Rick and Morty
export const rickMortyClient = new HttpClient('https://rickandmortyapi.com/api');
