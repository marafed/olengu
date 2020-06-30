import React, {useState, useEffect, useReducer} from 'react';
import SearchItemBox from '../Components/SearchItemBox';

function ShowBooks() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(
            'https://www.superheroapi.com/api.php/3043826855693933/search/bat'
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

    return(
        <div>
            <h2>Le tue prenotazioni</h2>
            {items.map(item => (
                <SearchItemBox item={item} /> 
            ))}
        </div>
    );
}

export default ShowBooks;