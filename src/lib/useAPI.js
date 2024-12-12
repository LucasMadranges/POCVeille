import axios from "axios";

const API_URL = "https://ns26f8d06l.execute-api.eu-west-3.amazonaws.com/default/users";

export const fetchItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
};
