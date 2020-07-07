import React, {useState, useEffect, useReducer} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import { Link } from 'react-router-dom';

function BooksInSospeso() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(
            'https://www.superheroapi.com/api.php/3043826855693933/search/ze'
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

    return(
        <div>
            <h1 style={{color: "white", margin: 1 + 'em'}}>Prenotazioni in sospeso</h1>
            {items.map(item => (
                <Link to={`/BooksInSospeso/${item.id}`} >
                    <SearchItemBox item={item} /> 
                </Link>
            ))}
        </div>
    );
}

export default BooksInSospeso;