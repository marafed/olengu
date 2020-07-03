import React from 'react';
import Searchbar from '../Components/Searchbar';


function Home() {
        return(
        <div className="Home">

            <Searchbar />

            <div className="row text-center " id="text-vacancy">
                <div className="col">
                    <img src="img/text5746.png" className="mx-auto d-block" />
                </div> 
            </div>
            <div id="slideshow" className="carousel slide row" data-ride="carousel">
                <div className="col">
                    <ul className="carousel-indicators">
                    <li data-target="#slideshow" data-slide-to="0" className="active"></li>
                    <li data-target="#slideshow" data-slide-to="1"></li>
                    <li data-target="#slideshow" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                    <div className="carousel-item active text-center ">
                        <img className="d-block w-100" src="photos/casa.jpg" alt="Case" />
                        <div className="carousel-caption">
                        <p className="caption">Case selezionate dai nostri esperti</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="photos/11208622.jpg" alt="host" />
                        <div className="carousel-caption">
                        <p className="caption">I migliori host certificati</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="photos/pingu.jpg" alt="pingu" />
                        <div className="carousel-caption">
                        <p className="caption">Approvato dal pinguino!</p>
                        </div>
                    </div>
                </div>
                    <a className="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#slideshow" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        );
    }   


export default Home;
