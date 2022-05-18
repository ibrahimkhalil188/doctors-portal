import React, { useEffect, useState } from 'react';

const UseToken = user => {
    const [token, setToken] = useState("")
    useEffect(() => {
        const email = user?.user?.email
        const currentUser = { email: email }
        if (email) {
            console.log(email)
            fetch(`http://localhost:5000/users/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const access_token = data.token
                    localStorage.setItem("access_token", access_token)
                    setToken(access_token)

                })
        }
    }, [user])
    return [token, setToken]
};

export default UseToken;