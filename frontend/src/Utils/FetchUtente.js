import React, { useState, useEffect } from 'react';


function FetchUtente() {
    useEffect(() => {
      
    }, []);

    const [user, setUser] = useState([]);


    const fetchUser = async() => {
        const data = await fetch(
            'https://www.superheroapi.com/api.php/3043826855693933/search/apocalypse'
        );
        const user = await data.json();
        console.log(user.results);
        setUser(user.results);
    };

    return(
        <div>
            {user.map(item => (
                <h5 key={item.id}>
                    <h2 style={{color: "#ff31ea", fontWeight: "bold"}}>{item.nome}</h2>
                </h5>
            ))}
        </div>
    );
}

export default FetchUtente;