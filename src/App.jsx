import "./App.css";
import {useFetch} from "./lib/useFetch.js";

function App() {
    const data = useFetch("");

    return (
        <>
            <h1>Hello World</h1>
        </>
    );
}

export default App; 
