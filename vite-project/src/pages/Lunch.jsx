import React from 'react';

function Lunch() {
    return (
        <div className="menu-container">
            <h1>Lunch Meny</h1>
            <h2>Pizzor</h2>
            <ul className="menu-list">
                <li><a href="#">1.Margherita. Ost. 95,00 kr.</a></li>
                <li><a href="#">2.Vesuvio. Skinka. 100,00 kr.</a></li>
                <li><a href="#">3.Funghi. Champinjoner. 100,00 kr.</a></li>
                <li><a href="#">4.Orientale. Köttfärs, lök. 105,00 kr.</a></li>
                <li><a href="#">5.Capricciosa. Skinka, champinjoner. 105,00 kr.</a></li>
                <li><a href="#">6.Calzone. Skinka (inbakad) 105,00 kr.</a></li>
                <li><a href="#">7.Calzone Special. Skinka, Räkor (inbakad) 105,00 kr.</a></li>
                <li><a href="#">8.Al Tono. Tonfisk, lök. 105,00 kr.</a></li>
            </ul>
            <h2>Kebab &amp; Hamburgare</h2>
            <ul className="menu-list">
                <li><a href="#">9.Cheese burgare.95kr</a></li>
                <li><a href="#">10.Dubbel cheese burgare 120,00 kr.</a></li>
                <li><a href="#">11.KebabRulle 100,00 kr.</a></li>
            </ul>
            <h2>Salad</h2>
            <ul className="menu-list">
                <li><a href="#">12.Klassisk Caesar-sallad. 95kr</a></li>
                <li><a href="#">13.Grekisk sallad. 100,00 kr.</a></li>
                <li><a href="#">14.Räksallad med avokado. 100,00 kr.</a></li>
            </ul>
        </div>
    );
}

export default Lunch;
