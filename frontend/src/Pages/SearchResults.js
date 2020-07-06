import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SearchItemBox from '../Components/SearchItemBox';
import SearchResultsPopup from '../Components/SearchResultsPopup';

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
    
    const filter_popup = () => {
        let popup = document.getElementById("popup-filter");

        if (popup.style.display == "none") {
            popup.style.display = "block";
        } else {
            popup.style.display ="none";
        }
    }
    
    return(
        <div className="containerFluid">
            <div className="row">
                <button onClick={filter_popup} className="btn-gradient searchresults-filter">Filtri</button>}>
            </div>
            <div className="row">
                <div className="col">
                    <SearchResultsPopup />
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