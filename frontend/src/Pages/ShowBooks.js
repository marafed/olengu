import React, {useState, useEffect, useReducer} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import { Link } from 'react-router-dom';

function ShowBooks() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(`/api/getPrenotazioniByToken/${localStorage.getItem('session')}`);
        const items = await data.json();
        setItems(items);
    };

    return(
        <div>
            <h1 style={{color: "white", margin: 1 + 'em'}}>Le tue prenotazioni</h1>
            {items.map(item => (
                <Link to={`/SearchResults/${item.id}`} >
                    <SearchItemBox item={item} /> 
                </Link>
            ))}
        </div>
    );
}

export default ShowBooks;