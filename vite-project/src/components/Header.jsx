/*import React from "react";
import logga from '../a_html/logga.png';
function Header() {
	return (
	  <div>
	    <img src={logga} alt="Loggan" className="Loggan" />
	    <div className="meny-rectangle">
	      <div className="meny-item-Hem"><a href="index.html">Hem</a></div>
	      <div className="meny-item-Meny">Meny</div>
	      <div className="sub-menu" style={{ display: 'none' }}>
		<ul>
		  <li><a href="meny.html">Pizza</a></li>
		  <li><a href="meny.html">Pasta</a></li>
		  <li><a href="meny.html">Salad</a></li>
		</ul>
	      </div>
	      <div className="meny-item-Lunch"><a href="lunch.html">Lunch</a></div>
	      <div className="meny-item-Avhamtning"><a href="https://www.youtube.com/">Avhämtning</a></div>
	      <div className="meny-item-Omoss"><a href="om-oss.html">Om oss</a></div>
	      <div className="meny-item-Kontakt"><a href="kontakt.html">Kontakt</a></div>
	    </div>
	  </div>
	);
      }
      export default Header;
*/
import React from "react";
import { NavLink } from "react-router-dom";
import logga from '../a_html/logga.png';
import Bakgrund from '../a_html/Bakgrund.png';

function Header() {
  return (
    <div>
	<img src={Bakgrund} alt="Background" className="background-image" />
      <NavLink to="/Homepage"><img src={logga} alt="Loggan" className="Loggan" /></NavLink>

	
      	<div className="meny-rectangle">
        	<div className="meny-item-Hem"><NavLink exact to="/Homepage">Hem</NavLink></div>
       		<div className="meny-item-Meny"><NavLink exact to="/Meny">Meny</NavLink></div>
          	<div className="sub-menu" style={{ display: 'none' }}>

			<ul>
				<li><NavLink to="/Meny">Pizza</NavLink></li>
				<li><NavLink to="/Meny">Pasta</NavLink></li>
				<li><NavLink to="/Meny">Salad</NavLink></li>
			</ul>
          	
        	</div>
        	<div className="meny-item-Lunch"><NavLink to="/Lunch">Lunch</NavLink></div>
        	<div className="meny-item-Avhamtning"><a href="https://www.youtube.com/">Avhämtning</a></div>
        	<div className="meny-item-Omoss"><NavLink to="/Omoss">Om oss</NavLink></div>
        	<div className="meny-item-Kontakt"><NavLink to="/Kontakt">Kontakt</NavLink></div>
      </div>
    </div>
  );
}

export default Header;
