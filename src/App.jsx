import "./App.css";
import {useEffect, useState} from "react";
import {fetchItems} from "./lib/useAPI.js";

function App() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getItems = async () => {
            try {
                const data = await fetchItems();
                setItems(data);
            } catch (err) {
                setError("Failed to fetch items");
                console.error(err);
            }
        };

        getItems();
    }, []);

    return (
        <>
            <h1>Hello World</h1>
            {items.map((item, index) => <p key={index}>{item}</p>)}
            <p>{error}</p>
        </>
    );
}

export default App; 
