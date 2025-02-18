import apiClient from "@/services/api-cient";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

export const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);
        const controller = new AbortController();

        apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
            setData(res.data.results);
            setisLoading(false);
        })
        .catch((e) => {
            if (e instanceof CanceledError) return;
            setError(e.message);
            setisLoading(false);
        });

    return () => controller.abort();
    }, dependencies ? [...dependencies] : []);

    return { data, error, isLoading };
}