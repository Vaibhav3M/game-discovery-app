import { Genre } from "./useGenres";
import { useData } from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

export const useGames = (
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null
) => {
    return useData<Game>(
        "/games",
        {
            params: {
                genres: selectedGenre?.id,
                parent_platforms: selectedPlatform?.id,
            },
        },
        [selectedGenre?.id, selectedPlatform?.id]
    );
};
