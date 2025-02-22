import "./App.css";
import {
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { GameGrid } from "./components/GameGrid/GameGrid";
import { GenreList } from "./components/GenreList/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { SortSelector } from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
  search: string | null;
}
function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" marginY={5}>
          <NavigationBar onSearch={(search) => setGameQuery({ ...gameQuery, search })}></NavigationBar>
        </GridItem>
        <Show when={useBreakpointValue({ lg: true })}>
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onGenreSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack paddingY={2} >
            <PlatformSelector onPlatformSelect={(platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
            <SortSelector onSortSelect={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} selectedSort={gameQuery.sortOrder}></SortSelector>
          </HStack>
          <GameGrid
            gameQuery={gameQuery}
          ></GameGrid>
        </GridItem>
      </Grid >
    </>
  );
}

export default App;
