import React, {useState, useEffect} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import SearchItemBoxGuest from '../Components/SearchItemBoxGuest';
import { Link } from 'react-router-dom';
import axios from 'axios';  

function ShowBooks() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {

        const id = localStorage.getItem("id_usr")
        const query = '/api/getprenotazioniguest/'
        await axios.get(query + id, {"Access-Control-Allow-Origin":"*"})
        .then(function (response) {
            console.log(response)
            setItems(response.data)
          }
        ).catch(function (error) {
          alert(error);
      });
    };

    return(
        <div>
            <h1 style={{color: "white", margin: 1 + 'em'}}>Le tue prenotazioni</h1>
            {items.map(item => (
                <SearchItemBoxGuest item={item} />))}
        </div>
    );
}

export default ShowBooks;

/*
*/