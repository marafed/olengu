import React, {useState, useEffect, useReducer} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import { Link } from 'react-router-dom';

function MyAnnunci() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch(
            '/api/getAnnunciByUserId/:id'
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

    return(
        <div>
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