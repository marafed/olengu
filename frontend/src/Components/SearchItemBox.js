import React from 'react';

function SearchItemBox({ item }) {
    return(
        <div className="containerFluid">
            <div className="row" id="present-item-box">
                <div className="col-md-3 col-sm-12 present-item-col">
                    <img className="present-item-img" src={item.image.url} />
                </div>
                <div className="col-md-9 col-sm-12">
                    <h2>{item.name}</h2>
                    <h4>{item.biography["full-name"]}</h4>
                    <p>{item.work.occupation}</p>
                </div>
            </div>
        </div>
    );
}

export default SearchItemBox; 