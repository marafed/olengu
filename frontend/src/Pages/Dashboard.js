import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Dashboard() {

    useEffect(() => {
        fetchItems()
    }, []);

    const [items, setItems] = useState([]);


    const fetchItems = async() => {
        const data = await fetch(
            'https://www.superheroapi.com/api.php/3043826855693933/search/a'
        );
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };
    return(
        <div className="containerFluid">
            <div className="row" id="insertitem-box">
                <div className="col-lg-4 col-md-6 col-sm-12 checklist-box-col">
                    {items.map(item => (
                        <h5 key={item.id}>
                            <Link to={`/dashboard/${item.id}`}>{item.name}</Link>
                        </h5>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;