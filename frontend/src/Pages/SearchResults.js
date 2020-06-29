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
            'https://www.superheroapi.com/api.php/3043826855693933/search/bat'
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };
    
    return(
        <div className="containerFluid">
            <div className="row">
                <div className="col">
                    {items.map(item => (
                        <SearchItemBox item={item} /> 
                     ))}
                </div>
            </div>
        </div>
    );
}

export default SearchResults;