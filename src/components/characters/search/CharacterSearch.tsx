'use client';

import { useCallback, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SearchFilters } from '@/types/filters';
import { useDebounce } from '@/hooks/useDebounce';

interface CharacterSearchProps {
  onSearch: (filters: SearchFilters) => void;
  onReset: () => void;
}

export function CharacterSearch({ onSearch, onReset }: CharacterSearchProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    name: '',
    status: 'all',
    species: 'all',
    gender: 'all',
  });

  const debouncedFilters = useDebounce(filters, 300);

  useEffect(() => {
    const cleanFilters = {
      ...debouncedFilters,
      status: debouncedFilters.status === 'all' ? '' : debouncedFilters.status,
      species: debouncedFilters.species === 'all' ? '' : debouncedFilters.species,
      gender: debouncedFilters.gender === 'all' ? '' : debouncedFilters.gender,
    };
    onSearch(cleanFilters);
  }, [debouncedFilters, onSearch]);

  const handleReset = useCallback(() => {
    setFilters({
      name: '',
      status: 'all',
      species: 'all',
      gender: 'all',
    });
    onReset();
  }, [onReset]);

  return (
    <div className="space-y-4 max-w-2xl">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Input
            type="text"
            placeholder="Buscar por nombre, apellido o por ID"
            value={filters.name}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, name: e.target.value }))
            }
            className="pl-9"
          />
          <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
        </div>
        <Button variant="outline" onClick={handleReset}>
          <X className="h-4 w-4 mr-2" />
          Limpiar
        </Button>
      </div>

      <div className="flex gap-2">
        <Select
          value={filters.status}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, status: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="alive">Vivo</SelectItem>
            <SelectItem value="dead">Muerto</SelectItem>
            <SelectItem value="unknown">Desconocido</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.species}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, species: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Especie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="human">Humano</SelectItem>
            <SelectItem value="alien">Alien</SelectItem>
            <SelectItem value="humanoid">Humanoide</SelectItem>
            <SelectItem value="poopybutthole">Poopybutthole</SelectItem>
            <SelectItem value="mythological">Mitológico</SelectItem>
            <SelectItem value="unknown">Desconocido</SelectItem>
            <SelectItem value="animal">Animal</SelectItem>
            <SelectItem value="disease">Enfermedad</SelectItem>
            <SelectItem value="robot">Robot</SelectItem>
            <SelectItem value="cronenberg">Cronenberg</SelectItem>
            <SelectItem value="planet">Planeta</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.gender}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, gender: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Género" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="female">Femenino</SelectItem>
            <SelectItem value="male">Masculino</SelectItem>
            <SelectItem value="genderless">Sin género</SelectItem>
            <SelectItem value="unknown">Desconocido</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
