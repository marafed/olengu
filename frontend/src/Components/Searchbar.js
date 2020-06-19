import React, {useState} from 'react';

function Searchbar() {

  const [get, set] = useState(1);
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    const data = await fetch("http://localhost:8000/api/search/all");
    const items = await data.json();
    setPlaces(items);
  }

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

  fetchPlaces();
  autocomplete(document.getElementById("text-place"), { places });


  return(
    <div className="row" id="searchbar">
        <div className="col-sm-3" id="searchbar-place">
          <div id="button-place" className="button-search">
            <p className="secondary-search">Dove andiamo?</p>
            <input type="text" className="input-search" id="text-place" placeholder="Inserisci destinazione" onfocus="showPopup('popup-place')" onfocusout="hidePopup('popup-place')" />
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


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

export default Searchbar;