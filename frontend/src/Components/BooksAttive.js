import React, {useState, useEffect, useReducer} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import { Link } from 'react-router-dom';

function BooksAttive() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(
            `http://localhost:3500/api/getprenotazioniattive/${localStorage.getItem("token")}`
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

    return(
        <div>
            <h1 style={{color: "white", margin: 1 + 'em'}}>Prenotazioni attive</h1>
            {items.map(item => (
                <Link to={`/BooksAttive/${item.id_prenotazione}`} >
                    <SearchItemBox item={item} /> 
                </Link>
            ))}
        </div>
    );
}

export default BooksAttive;