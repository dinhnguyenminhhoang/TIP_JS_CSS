import React, { useEffect, useState } from "react";

function ClearmUpfc() {
    const [user, setUser] = useState();
    const [id, setId] = useState();
    useEffect(() => {
        fetch(`https://jsonplaceholder.tyicode.com/users/${id}`);
    });
    return (
        <div>
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
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
