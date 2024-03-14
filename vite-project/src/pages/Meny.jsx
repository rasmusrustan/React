import React from "react";

import meny1 from '../a_html/meny1.png';
import meny2 from '../a_html/meny2.png';
import meny3 from '../a_html/meny3.png';


function Meny (){
	return(
	<div className="image-container">

        <img src={meny1} alt="MenyBild1" className="M1"  />
        <img src={meny2} alt="MenyBild2" className="M2" />
        <img src={meny3} alt="MenyBild3" className="M3" />

         </div>
	)
}

export default Meny;
