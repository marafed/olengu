import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SearchItemBox from '../Components/SearchItemBox';
import SearchResultsPopup from '../Components/SearchResultsPopup';

function SearchResults() {

    const [alert, setAlertVisibility] = useState(false);
    const onClosingAlert = () => {
        setAlertVisibility(false);
    }

    var filter
    if (alert) {
        filter = <SearchResultsPopup onClosing={onClosingAlert}/>
    }
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        var citta = localStorage.getItem("citta");
        const data = await fetch(`/api/getAnnunciByLuogo/${citta}`);
        const items = await data.json();
        setItems(items);
    };
    
    const filter_popup = () => {
        setAlertVisibility(true);
    }
    
    return(
        <div className="containerFluid">
            <div className="row">
                <button onClick={filter_popup} className="btn-gradient searchresults-filter">Filtri</button>
            </div>
            <div className="row">
                <div className="col">
                    {filter}
                    {items.map(item => (
                        <h5 key={item.id}>
                            <Link to={`/SearchResults/${item.id_ann}`} >
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