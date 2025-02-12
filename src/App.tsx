import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HStack, VStack } from '@chakra-ui/react'
import SelectDropDown from './components/SelectDropDown/SelectDropDown'

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
  const [orderBy, setOrderBy] = useState<string[]>([]);

  return (
    <>
    <VStack>
    <h1>{selectedPlatform}</h1>
      <HStack>
        <SelectDropDown placeholder="Platforms" elements={platforms} onSelectedValue={setSelectedPlatform}></SelectDropDown>
        <SelectDropDown placeholder="Order By: " elements={sortingOrder} onSelectedValue={setOrderBy} combineItems={true}></SelectDropDown>
      </HStack>
    </VStack>
    </>
  )
}

export default App
