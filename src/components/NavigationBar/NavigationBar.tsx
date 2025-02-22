import { HStack, Image } from "@chakra-ui/react";
import logo from '../../assets/Logo/logo.webp';
import { SearchBar } from "../SearchBar";
import { ColorModeButton } from "../ui/color-mode";

interface Props {
    onSearch: (search: string) => void;
}

export function NavigationBar({ onSearch }: Props) {
    return (
        <HStack paddingX={2} >
            <Image src={logo} boxSize={10}></Image>
            <SearchBar onSearch={(search) => onSearch(search)}></SearchBar>
            <ColorModeButton />
        </HStack>
    )
}