import { CharactersContainer } from "@/components/characters/characters-container";
import { CharacterSearchContainer } from "@/components/characters/search/CharacterSearchContainer";

export default function CharactersPage() {
  return (
    <div className="container py-8 space-y-12">
      {/* <div>
        <h2 className="text-2xl font-semibold mb-4">Random Characters</h2>
        <p className="text-lg text-muted-foreground">
          Explore random characters from the Rick and Morty universe and
          discover their stories, origins, and unique characteristics.
        </p>
        <CharactersContainer />
      </div> */}

      <div>
        <h2 className="text-2xl font-semibold mb-4">Search Characters by Name or Status</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Use the search bar to find specific characters by name, number or status using the filters.
        </p>
        <CharacterSearchContainer />
      </div>
    </div>
  );
}
