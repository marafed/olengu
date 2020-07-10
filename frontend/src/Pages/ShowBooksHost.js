import React, {useState, useEffect, useReducer} from 'react';
import { Link } from 'react-router-dom';
import SearchItemBox from '../Components/SearchItemBox';

function ShowBooksHost() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(`/api/getprenotazionihost/${localStorage.getItem('token')}`);
        const items = await data.json();
        
        var totale_pagato = 0;

        for(var i in items) {   
            var obj = items[i];
         
            totale_pagato = totale_pagato + obj.totale_pagato;
        }
        console.log(totale_pagato);
        setItems(items);
    };

    return(
        <div className="ShowBooksHost row">
            <div className="col-lg-2 col-md-12 bookshost-sidebar">
                    <Link to="/BooksInCorso" className="link-bookshost-sidebar">Prenotazioni in corso</Link><br />
                    <Link to="/BooksAttive" className="link-bookshost-sidebar">Prenotazioni attive</Link><br />
                    <Link to="/BooksInSospeso" className="link-bookshost-sidebar">Prenotazioni in sospeso</Link><br />
                    <Link to="/BooksConcluse" className="link-bookshost-sidebar">Prenotazioni concluse</Link><br />
            </div>
            <div className="col-lg-10 col-md-12">
                <h1 style={{color: "white", margin: 1 + 'em', fontWeight: "bold"}}>Tutte le tue prenotazioni</h1>
                {items.map(item => (
                    <SearchItemBox item={item} />
                ))}
            </div>
        </div>
    );
}

export default ShowBooksHost;