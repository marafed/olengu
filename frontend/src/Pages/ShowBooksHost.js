import React, {useState, useEffect, useReducer} from 'react';
import PrenotazioneItem from '../Components/PrenotazioneItem';
import { Link } from 'react-router-dom';
import SearchItemBox from '../Components/SearchItemBox';

function ShowBooksHost() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(`/api/getprenotazionihost/${localStorage.setItem('token')}`);
        const items = await data.json();
        
        //inseriamo prenotazioni in localstorage per passar
        var prenotazioni_array_string_form = JSON.stringify(items);
        localStorage.setItem("prenotazioni_string", prenotazioni_array_string_form)

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