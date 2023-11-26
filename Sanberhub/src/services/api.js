import axios from 'axios';

export const ApiData = axios.create({
    baseURL: "https://cms-admin-v2.ihsansolusi.co.id/",
});

export const SetAuthToken = (token) => {
    if (token) {
        ApiData.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete ApiData.defaults.headers.common["Authorization"];
    }
};
