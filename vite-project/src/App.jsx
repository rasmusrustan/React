import './hemsida.css';
import Homepage from './pages/Homepage';

import Header from './components/Header';

import Meny from './pages/Meny';
import Kontakt from './pages/Kontakt';
import Omoss from './pages/Omoss';
import Lunch from './pages/Lunch';


import { BrowserRouter as Router, Routes, Route }
from "react-router-dom"

function App() {
	return (
		
	  <Router>
	    <div>
	    
	      <Routes>
		
		<Route path="/Homepage" element={<Homepage />} />
		<Route path="/Meny" element={<Meny />} />
		<Route path="/Kontakt" element={<Kontakt />} />
          	<Route path="/Omoss" element={<Omoss />} />
          	<Route path="/Lunch" element={<Lunch />} />
		
	      </Routes>
	      <Header/>
	    </div>
	  </Router>
	);
      }
      
      export default App;
	    