import React from 'react';

function PrenotazioneItem(props) {
    return(
        <div class="my-3 px-5">
            <div class="row bg-success accepted_request_row">
            <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="row">
                  <div class="col">
                    <div class="mx-0 my-2"><strong>id prenotazione: </strong>{props.item.id_prenotazione}</div>
                  </div>
                </div>
                    <div class="d-flex flex-row ">
                        <div class="my-2"><strong>dal</strong></div>
                        <div class="mx-3 my-2">{props.item.checkin}</div>
                        <div class="ml-5 my-2"><strong>al</strong></div>
                        <div class="mx-3 my-2">{props.item.checkout}</div>
                        <div class="col-lg-1"></div>
                        <div class="mx-3 my-2"><strong>id_utente:</strong></div>
                        <div class="mx-3 my-2">{props.item.guest}</div>
                        <div class="col-lg-1"></div>
                        <div class="space"></div>
                        <div class="ml-5 my-2"><strong>totale pagato:</strong></div>
                        <div class="space"></div>
                        <div class="mx-3 my-2">{props.item.tot_pagato}</div>
                        <div class="mx-3 my-2"><strong>status:</strong></div>
                        <div class="mx-3 my-2">{props.item.stato}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrenotazioneItem; 