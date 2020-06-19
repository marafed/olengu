import React from 'react';

function HomeHost() {
  return(
    <div className="Host">
      <div className="container-fluid">
        <div className="row" id="txt1">
          <img src="/img/text574s6.png" />
        </div>
        <div className="row" id="first-row">
          <div className="col-sm-6" id="img1">
            <img src="/img/photo_2020-05-17_18-03-30.jpg" />
          </div>
          <div className="col-sm-6" id="txt2">
            <p>Tutti i vantaggi di diventare un host con olengu.it</p>
            <ul id="list">
              <li>Guadagna denaro affittando i tuoi appartamenti</li>
              <li>Stabilisci tu come e quando affittare i tuoi appartamenti</li>
              <li>Assicurazione garantita per danni</li>
              <li>Sicurezza assicurata olengu.it</li>
            </ul>
            <a href="">
              <button className="btn btn-gradient" id="register_now">Registra ora il tuo appartamento</button>
            </a>
          </div>
        </div>
      </div>
   </div>
  );
}

export default HomeHost;
