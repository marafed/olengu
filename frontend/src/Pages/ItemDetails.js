import React, {useState, useEffect} from 'react';
 

function ItemDetails({ match }) {

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
            <div className="row" id="insertitem-box">
                <div className="col-lg-4 col-md-6 col-sm-12 checklist-box-col">
                    <h1>{item.name}</h1>
                    <img src={item.image.url} />
                    <h3>{item.biography["full-name"]}</h3>
                    <p>{item.work.occupation}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;