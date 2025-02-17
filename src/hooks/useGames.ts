import apiClient from "@/services/api-cient";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

interface GetGamesResponse {
    count: number;
    results: Game[];
}

export const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);
        const controller = new AbortController();

        apiClient.get<GetGamesResponse>('/games', { signal: controller.signal })
        .then((res) => {
            setGames(res.data.results);
            setisLoading(false);
        })
        .catch((e) => {
            if (e instanceof CanceledError) return;
            setError(e.message);
            setisLoading(false);
        });

    return () => controller.abort();
    }, []);

    return { games, error, isLoading };
    
}