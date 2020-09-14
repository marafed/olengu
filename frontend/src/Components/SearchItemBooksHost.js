import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchItemBooksHost({ item }) {

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

export default SearchItemBooksHost; 