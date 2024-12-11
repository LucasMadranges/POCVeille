import axios from "axios";

const API_URL = "https://l3e4mlhn3i.execute-api.eu-west-3.amazonaws.com/users";

export const fetchItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
};
