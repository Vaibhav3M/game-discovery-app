import './App.css'
import { ColorModeButton } from "@/components/ui/color-mode";
import { Grid, GridItem, HStack, Show, useBreakpointValue } from '@chakra-ui/react'
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { GameGrid } from './components/GameGrid/GameGrid';
import { GenreList } from './components/GenreList/GenreList';



function App() {

  return (
    <>
    <Grid 
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
        }} 
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}>
      <GridItem area='nav' >
        <HStack justifyContent='space-between' paddingY={2}>
          <NavigationBar></NavigationBar>
          <ColorModeButton></ColorModeButton>
        </HStack>
      </GridItem>
      <Show when={useBreakpointValue({lg: true })}>
        <GridItem area='aside' paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
    </>
  )
}

export default App
