import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchItemBox({ item }) {

    const [nome_annuncio, setNomeAnnuncio] = useState("")
    const [luogo, setLuogo] = useState("")
    const [descrizione, setDescrizione] = useState("")

    useEffect(() => {
        fetchAnnuncio();
    }, []);

    const fetchAnnuncio = async () => {
        const query = '/api/getannuncio/';
        const id_annuncio = item.ref_id_ann;
        await axios.get(query + id_annuncio, {"Access-Control-Allow-Origin":"*"})
        .then(function (response) {
            setNomeAnnuncio(response.data.nome_annuncio)
            setLuogo(response.data.luogo)
            setDescrizione(response.data.descrizione)
          }
        ).catch(function (error) {
          alert(error);
      });
    }

    return(
        <div className="containerFluid">
            <div className="row" id="present-item-box">
                <div className="col-md-3 col-sm-12 present-item-col">
                    {/* <img className="present-item-img" src={item.image.url} /> */}
                </div>
                <div className="col-md-9 col-sm-12">
                    <h2>{item.nome_annuncio}</h2>
                    <h4>{item.luogo}</h4>
                    <p>{item.descrizione}</p>
                </div>
            </div>
        </div>
    );
}

export default SearchItemBox; 