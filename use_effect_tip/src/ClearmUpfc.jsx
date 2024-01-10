import React, { useEffect, useState } from "react";

function ClearmUpfc() {
    const [user, setUser] = useState({});
    const [id, setId] = useState(1);
    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
        //     res.json().then((data) => {
        //         console.log("cancelled");
        //         setUser(data);
        //     })
        // );
        // call call fix
        let cancelledRes = false;
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
            res.json().then((data) => {
                if (!cancelledRes) setUser(data);
            })
        );
        return () => {
            cancelledRes = true;
        };
    }, [id]);
    return (
        <div>
            <div>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
            </div>
            <div>
                <button
                    style={{ textDecoration: "underline" }}
                    onClick={() => setId(1)}
                >
                    Fetch user 1
                </button>
                <button
                    style={{ textDecoration: "underline" }}
                    onClick={() => setId(2)}
                >
                    Fetch user 2
                </button>
                <button
                    style={{ textDecoration: "underline" }}
                    onClick={() => setId(3)}
                >
                    Fetch user 3
                </button>
            </div>
        </div>
    );
}

export default ClearmUpfc;
