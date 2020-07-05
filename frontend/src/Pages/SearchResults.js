import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SearchItemBox from '../Components/SearchItemBox'

function SearchResults() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);


    const fetchItems = async() => {
        const data = await fetch(
            "/api/auth/results",
            {
                method: "GET",
                mode: 'cors',
                cache: 'no-cache'
            }
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };
    
    return(
        <div className="containerFluid">
            <div className="row">
                <button className="btn-gradient">Filtri</button>
            </div>
            <div className="row">
                <div className="col">
                    {items.map(item => (
                        <h5 key={item.id}>
                            <Link to={`/SearchResults/${item.id}`} >
                                <SearchItemBox item={item} /> 
                            </Link>
                        </h5>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchResults;