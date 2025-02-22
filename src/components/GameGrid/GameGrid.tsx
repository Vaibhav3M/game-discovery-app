import { useGames } from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "../GameCard/GameCard";
import { GameCardSkeleton } from "../GameCard/GameCardSkeleton";
import { GameCardContainer } from "../GameCard/GameCardContainer";
import { GameQuery } from "@/App";

interface Props {
    gameQuery: GameQuery | null;
}

export function GameGrid({ gameQuery }: Props) {
    const { error, data, isLoading } = useGames(gameQuery);
    const skeletonGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="20px">
                {isLoading &&
                    skeletonGrid.map((c) => (
                        <GameCardContainer key={c}>
                            {" "}
                            <GameCardSkeleton />{" "}
                        </GameCardContainer>
                    ))}
                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}></GameCard>{" "}
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
}
