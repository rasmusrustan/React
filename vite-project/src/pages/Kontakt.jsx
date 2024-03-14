import React from 'react';
function Kontakt() {
	return (

	<div className="Kontakt-container">
	<h1>Kontakta oss</h1>
	<form action="#" method="POST">
	<label htmlFor="name">Namn:</label><br />
	<input type="text" id="name" name="name" required /><br />

	<label htmlFor="phone">Telefonnummer:</label><br />
	<input type="tel" id="phone" name="phone" /><br />

	<label htmlFor="email">E-postadress:</label><br />
	<input type="email" id="email" name="email" required /><br />

	<label htmlFor="message">Meddelande:</label><br />
	<textarea id="message" name="message" rows="6" required></textarea><br />

	<input type="submit" value="Skicka" />
	</form>
	</div>
	)
}
export default Kontakt;