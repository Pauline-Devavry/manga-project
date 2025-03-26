import axios from "axios";

const BASE_URL = "https://api.jikan.moe/v4";

export const getPopularMangas = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/top/manga`);
        return response.data.data; // Jikan renvoie un objet avec une clé 'data'
    } catch (error) {
        console.error("Erreur lors de la récupération des mangas :", error);
        return [];
    }
};

export const getAllMangas = async (page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/manga`, {
            params: { page, limit: 24 },
        });
        console.log("Response data:", response.data);
        return response.data.data; // Jikan renvoie un objet avec une clé 'data'
    } catch (error) {
        console.error("Erreur lors de la récupération des mangas :", error);
        return [];
    }
};


