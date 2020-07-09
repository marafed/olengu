import React, {useState, useEffect, useReducer} from 'react';
import SearchItemBox from '../Components/SearchItemBox';
import { Link } from 'react-router-dom';
import PrenotazioneItem from './PrenotazioneItem';

function BooksInCorso() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        var json_string_form = localStorage.getItem("prenotazioni_string")
        var json = JSON.parse(json_string_form)
        var in_corso_array = []        
        console.log(typeof(json))
        for(var i=0; i<json.length; i++){
            var obj = json[i]
            if(obj.stato == "incorso"){
                in_corso_array.push(obj)
            }
        }
        console.log(in_corso_array)
        setItems(items);
    };

    return(
        <div>
            <h1 style={{color: "white", margin: 1 + 'em'}}>Prenotazioni in corso</h1>
            {items.map(item => (
                <SearchItemBox item={item} /> 
            ))}
        </div>
    );
}

export default BooksInCorso;