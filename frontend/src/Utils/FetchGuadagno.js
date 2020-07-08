import React, { useState, useEffect } from 'react';


function FetchGuadagno() {
    useEffect(() => {
        fetchUser();
    }, []);

    const [user, setUser] = useState([]);


    const fetchUser = async() => {
        const data = await fetch(
            'https://www.superheroapi.com/api.php/3043826855693933/search/apocalypse' // fare api
        );
        const user = await data.json();
        setUser(user);
    };

    return(
        <div>
            <h2 style={{color: "#ff31ea", fontWeight: "bold"}}>{user.guadagno}</h2>     
        </div>
    );
}

export default FetchGuadagno;