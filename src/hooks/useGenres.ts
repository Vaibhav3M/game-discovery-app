import apiClient from "@/services/api-cient";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface GenreResponse {
    count: number;
    results: Genre[];
}

export const useGenres = () => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setisLoading] = useState(false);

    
    useEffect(() => {
        setisLoading(true);
        const controller = new AbortController();
        apiClient.get<GenreResponse>('/genres', { signal: controller.signal})
        .then((res) => {
            setGenres(res.data.results);
            setisLoading(false);
        })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
            setisLoading(false);
        })

        return () => controller.abort();
    }, [])
    
    return { genres, error, isLoading};
}