'use client';

import { useCharacterStore } from '@/store/character.store';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export function CharacterFilters() {
  const { filters, setFilters, resetFilters } = useCharacterStore();

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-card rounded-lg shadow-sm">
      <Select
        value={filters.status}
        onValueChange={(value) => setFilters({ status: value })}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All</SelectItem>
          <SelectItem value="alive">Alive</SelectItem>
          <SelectItem value="dead">Dead</SelectItem>
          <SelectItem value="unknown">Unknown</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.species}
        onValueChange={(value) => setFilters({ species: value })}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Species" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All</SelectItem>
          <SelectItem value="human">Human</SelectItem>
          <SelectItem value="alien">Alien</SelectItem>
          <SelectItem value="robot">Robot</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.gender}
        onValueChange={(value) => setFilters({ gender: value })}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All</SelectItem>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="genderless">Genderless</SelectItem>
          <SelectItem value="unknown">Unknown</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        onClick={resetFilters}
        className="ml-auto"
      >
        Reset Filters
      </Button>
    </div>
  );
}
