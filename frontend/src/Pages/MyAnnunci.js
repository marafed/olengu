import React, {useState, useEffect, useReducer} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import { Link } from 'react-router-dom';
import SearchResultsPopup from '../Components/SearchResultsPopup';



function MyAnnunci() {

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
        const data = await fetch(`http://localhost:3500/api/getannunci/${localStorage.getItem("token")}`);
        const items = await data.json();
        console.log(items);
        setItems(items);
    };

    const filter_popup = () => {
        setAlertVisibility(true);
    }

    return(
        <div className="containerFluid">
            <div className="row">
                <Link to ="/InsertItem">
                    <button className="btn-gradient searchresults-filter">Inserisci annuncio</button>
                </Link>
            </div>
            <div className="row">
                <div className="col">
                    {filter}
                    {items.map(item => (
                        <h5 key={item.id}>
                            <SearchItemBox item={item} />
                        </h5>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyAnnunci;