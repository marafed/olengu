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
            `http://localhost:3500/api/getprenotazioniinsospeso${localStorage.getItem("token")}` 
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

    const accetta = async(id) => {
        const data = await fetch(`http://localhost:3500/api/updateprenotazioneattiva/${id}`);
        fetchItems();
    };

    const rifiuta = async(id) => {
        const data = await fetch(`/api/deletePrenotazione/${id}`);
        fetchItems();
    };

    return(
        <div>
            <h1 style={{color: "white", margin: 1 + 'em'}}>Prenotazioni in sospeso</h1>
            {items.map(item => (
                <Link to={`/BooksInSospeso/${item.id_prenotazione}`} >
                    <SearchItemBox item={item} />
                    <button className="btn-secondary btn-dashboard" onClick={accetta(`${item.id_prenotazione}`)}>Accetta</button>
                    <button className="btn-secondary btn-dashboard" onClick={rifiuta(`${item.id_prenotazione}`)}>Rifiuta</button>
                </Link>
            ))}
        </div>
    );
}

export default BooksInSospeso;