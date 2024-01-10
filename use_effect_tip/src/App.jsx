import { useEffect, useState } from "react";
import "./App.css";
import ClearmUpfc from "./ClearmUpfc";

function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    console.log("cpn render");
    useEffect(() => {
        console.log("useEff runing");
    });
    useEffect(() => {
        console.log("useEff runing 1");
    }, []);
    useEffect(() => {
        console.log("useEff runing 2");
    }, [count2]);
    return (
        <div className="App">
            <ClearmUpfc />
        </div>
    );
}

export default App;
