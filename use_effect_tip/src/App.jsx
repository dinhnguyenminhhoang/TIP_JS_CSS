import { useEffect, useState } from "react";
import "./App.css";

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
            <div style={{ marginTop: 100 }}>
                <span>Click me now ! {count2}</span>
                <button
                    style={{ padding: 10, borderWidth: 1 }}
                    onClick={() => setCount2(count2 + 1)}
                >
                    increase
                </button>
            </div>
        </div>
    );
}

export default App;
