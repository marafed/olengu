import React from 'react';
import { useState, useEffect } from 'react';

function SearchItemDetails() {
    useEffect(() => {
        fetchItem();
    }, []);
    

    const [item, setItem] = useState({});

    const fetchItem = async() => {
        const fetchItem = await fetch(`https://www.superheroapi.com/api.php/3043826855693933/search/bat`);
        const item = await fetchItem.json();

        console.log(item);
    }

    return(
        <div>
            <h1>Ciao
            </h1>
             <h5 key={item.id}>
                 <h2>{item.name}</h2>
            </h5>
        </div>
    ); 
}
export default SearchItemDetails;