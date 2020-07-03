import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
 

function SearchItemDetails({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({
        image: {
            url: ""
        },
        name: "",
        biography: {
            "full-name": ""
        },
        work: {
            occupation: ""
        }
    });

    const fetchItem = async() => {
        const fetchItem = await fetch(
            `https://www.superheroapi.com/api.php/3043826855693933/${match.params.id}`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
        console.log(item.image.url);
    }

    return(
        <div className="containerFluid">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12" style={{margin: 2 + 'em'}}>                  
                    <img src={item.image.url} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" style={{margin: 2 + 'em', color: "white"}}>
                    <h1>{item.name}</h1>
                    <h3>{item.biography["full-name"]}</h3>
                    <p>{item.work.occupation}</p>
                </div>
            </div>
        </div>
    );
}

export default SearchItemDetails;