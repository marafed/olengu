import React, {useState, useEffects} from 'react';

function Searchbar() {
  useEffect( () => {
      loadLocations();
    }
  );

  const [get, set] = useState(1);

  const add = () => {
      set(get+1);
  }

  const sub = () => {
      if (get > 1) {
          set(get-1);
      } else {
          set(1);
      }
  }


  return(
    <div className="row" id="searchbar">
        <div className="col-sm-3" id="searchbar-place">
          <div id="button-place" className="button-search">
            <p className="secondary-search">Dove andiamo?</p>
            <input type="text" className="input-search" id="text-places" placeholder="Inserisci destinazione" onLoad={`loadLocations()`} />
          </div>
        </div>
        <div className="col-sm-3" id="searchbar-date">
          <div id="button-date" className="button-search">
            <p className="secondary-search">Quando partiamo?</p>
            <input className="secondary-placeholder" type="date"></input><input type="date" className="secondary-placeholder"></input>
          </div>
        </div>
        <div className="col-sm-3" id="searchbar-guests">
          <div id="button-guests" className="button-search">
            <p className="secondary-search">Chi parte con noi?</p>
            <p className="secondary-placeholder">
                Inserisci il numero di ospiti
                <img src="/img/minus.svg" className="guests-button" onClick={sub} />
                {get}
                <img src="/img/plus.svg" className="guests-button" onClick={add} />
            </p>
          </div>
        </div>
        <div className="col-sm-3" id="cerca">
          <button id="search-button" className="btn btn-gradient" style={{fontSize: 1.5 + 'em'}}>
            Cerca
            <img width="25em" src="img/shapes-and-symbols.svg" style={{marginLeft: 1 + 'em'}} />
          </button>
        </div>
      </div>
    );
}

export default Searchbar;