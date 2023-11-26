import axios from 'axios';

export const ApiData = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const SetAuthToken = (token) => {
    if (token) {
        ApiData.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete ApiData.defaults.headers.common["Authorization"];
    }
};
