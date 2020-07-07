import React, {useState, useEffect, useReducer} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import { Link } from 'react-router-dom';

function BooksConcluse() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(
            'https://www.superheroapi.com/api.php/3043826855693933/search/bl'
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

    return(
        <div>
            <h1 style={{color: "white", margin: 1 + 'em'}}>Prenotazioni concluse</h1>
            {items.map(item => (
                <Link to={`/BooksConcluse/${item.id}`} >
                    <SearchItemBox item={item} /> 
                </Link>
            ))}
        </div>
    );
}

export default BooksConcluse;