import React from 'react';

function SearchItemBox({ item }) {
    return(
        <div className="containerFluid">
            <div className="row" id="present-item-box">
                <div className="col-md-3 col-sm-12 present-item-col">
<<<<<<< HEAD
                    <img className="present-item-img" src={item.image.url} />
                </div> 
=======
                    {/*<img className="present-item-img" src={item.image.url} />*/}
                </div>
>>>>>>> 56cff02d3d7bffaac3b0a63d97e2cc0121de57a9
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