import React, { useState, useEffect } from 'react';

function CounterSearchbar() {
    useEffect( () => {
        window.loadLocations();
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
        <div id="button-guests" className="button-search">
            <p className="secondary-search">Chi parte con noi?</p>
            <p className="secondary-placeholder">
                Inserisci il numero di ospiti
                <img src="/img/minus.svg" className="guests-button" onClick={sub} />
                <span name="ospiti">{get}</span>
                <img src="/img/plus.svg" className="guests-button" onClick={add} />
            </p>
        </div>
    );
}
export default CounterSearchbar;