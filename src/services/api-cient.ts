import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c77c394be1124759bf20c004fa6d5798'
    }
});

export default apiClient;