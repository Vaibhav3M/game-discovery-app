import { useState } from 'react'
import './App.css'
import { ColorModeButton } from "@/components/ui/color-mode";
import { Grid, GridItem, HStack, Show, useBreakpointValue } from '@chakra-ui/react'
import SelectDropDown from './components/SelectDropDown/SelectDropDown';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { GameGrid } from './components/GameGrid/GameGrid';
import { GenreList } from './components/GenreList/GenreList';



function App() {
  const platforms =  {
    items: [
      { label: "PC", value: "PC" },
      { label: "PlayStation", value: "PlayStation" },
      { label: "xbox", value: "xbox" },
      { label: "Nintendo", value: "Nintendo" },
      { label: "iOS", value: "iOS" },
      { label: "Andriod", value: "Andriod" },
  ]};

  const sortingOrder =  {
    items: [
      { label: "Relevance", value: "Relevance" },
      { label: "Date Added", value: "Date Added" },
      { label: "Name", value: "Name" },
      { label: "Release date", value: "Release date" },
      { label: "Rating", value: "Rating" },
  ]};

  const [selectedPlatform, setSelectedPlatform] = useState<string[]>(['Games']);
  const [, setOrderBy] = useState<string[]>([]);

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
    {/* <HStack>
      <SideBar></SideBar>
      <VStack>
      <h1 className=''>{selectedPlatform}</h1>
        <HStack>
          <SelectDropDown placeholder="Platforms" elements={platforms} onSelectedValue={setSelectedPlatform}></SelectDropDown>
          <SelectDropDown placeholder="Order By: " elements={sortingOrder} onSelectedValue={setOrderBy} combineItems={true}></SelectDropDown>
        </HStack>
      </VStack>
    </HStack> */}
    </>
  )
}

export default App
