import React, {useState, useEffect, useReducer} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import { Link } from 'react-router-dom';

function MyAnnunci() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(`/api/getannunci/${localStorage.getItem("token")}`);
        const items = await data.json();
        console.log(items);
        setItems(items);
    };

    return(
        <div>
            <Link to="/InsertItem">
                <button className="btn-gradient searchresults-filter">Crea nuovo annuncio</button>
            </Link>
            <h1 style={{color: "white", margin: 1 + 'em'}}>I tuoi annunci</h1>
            {items.map(item => (
                <Link to={`/SearchResults/${item.id}`} >
                    <SearchItemBox item={item} /> 
                </Link>
            ))}
        </div>
    );
}

export default MyAnnunci;