import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../../assets/Logo/logo.webp';

export function NavigationBar() {
    return (
        <HStack>
            <Image src={logo} boxSize={10}></Image>
            <Text> Nav Bar</Text>
        </HStack>
    )
}