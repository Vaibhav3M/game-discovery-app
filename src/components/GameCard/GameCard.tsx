import { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { PlatformsIconList } from "./PlatformsIconList";
import { CriticScore } from "../CriticScore";
import { getCroppedImage } from "@/services/image-url";

interface Props {
    game: Game;
}
export const GameCard = ({ game }: Props) => {
    return (
        <Card.Root>
            <Image src={getCroppedImage(game.background_image)}></Image>
            <Card.Body>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformsIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    ></PlatformsIconList>
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
            </Card.Body>
        </Card.Root>
    );
};
