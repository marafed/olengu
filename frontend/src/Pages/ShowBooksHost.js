import React, {useState, useEffect, useReducer} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import { Link } from 'react-router-dom';

function ShowBooksHost() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(
            '/api/getprenotazionibyuserid/:id'
        );
        const items = await data.json();
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
                <h1 style={{color: "white", margin: 1 + 'em', fontWeight: "bold"}}>Le tue prenotazioni</h1>
                {items.map(item => (
                    <Link to={`/ShowBooksHost/${item.id}`} >
                        <SearchItemBox item={item} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ShowBooksHost;