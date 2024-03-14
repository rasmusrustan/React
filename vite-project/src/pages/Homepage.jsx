import React from 'react';
import mat1 from '../a_html/mat1.png';
import mat2 from '../a_html/mat2.png';
import mat3 from '../a_html/mat3.png';
import mat4 from '../a_html/mat4.png';
import mat5 from '../a_html/mat5.png';
import mat6 from '../a_html/mat6.png';
import karta from '../a_html/karta.png';
import medier from '../a_html/medier.png';

import { NavLink } from "react-router-dom";

	function HomePage() {
	return (
	<div>	

	<div className="centered-text">
  		<h1>Golden Fork</h1>
	</div>

	<div className="Yellow-rectangle"></div>

	<div className="PizzaPastahamburgare-text">
		<h1>Pizza,Pasta,Hamburgare</h1>
	</div>

	<div className="Öppettider-text">
		<h1>Öppettider:</h1>
		<ul>
		<li>Måndag-Torsdag 10:30-21:00</li>
		<li>Fredag: 10:30-03:00</li>
		<li>Lördag 12:00-03:00</li>
		<li>Söndag 12:00-21:00</li>
		</ul>
	</div>

	<div className="long-content"></div>

	<div className="khaki-rectangle">
		<div className="StorMeny-text">
		<h1>Meny</h1>
		</div>
		<NavLink to="/Meny"><img src={mat1} alt="MatBild1" className="PizzaBild" /></NavLink>
		<NavLink to="/Meny"><img src={mat2} alt="MatBild2" className="Pastabild" /></NavLink>
		<NavLink to="/Meny"><img src={mat3} alt="MatBild3" className="Saladbild" /></NavLink>
		<NavLink to="/Meny"><img src={mat4} alt="MatBild4" className="Hamburgarebild" /></NavLink>
		<NavLink to="/Meny"><img src={mat5} alt="MatBild5" className="Kebabbild" /></NavLink>
		<NavLink to="/Meny"><img src={mat6} alt="MatBild6s" className="Barnmenybild" /></NavLink>
		<div className="Kontakt-text">
		<h1>Kontakta oss</h1>
		<h2>090-19 40 40</h2>
		<h3>Hitta oss Ålidhem Centrum, Examensvägen, 907 30 Umeå</h3>
		<img src={karta} alt="Karta" className="Karta" />
		<img src={medier} alt="Karta" className="med" />
		</div>
	</div>
	</div>
	);
	}

	export default HomePage;
