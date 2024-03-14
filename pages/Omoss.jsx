import React, { useState } from 'react';

function Omoss() {

	const [likes, setLikes] = useState(0); 

	const handleLikeClick = () => {
	  setLikes(likes + 1); 
  	};

  return (
    <div>
	<button onClick={handleLikeClick}>Like</button>
	<span>Likes: {likes}</span>
      <h2>Tabell endast för att det behövs</h2>
      
      
     
        <table>
          <thead>
            <tr>
              <th>Col 1</th>
              <th>Col 2</th>
              <th>Col 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
            </tr>
          </tbody>
        </table>
      

      <video width="320" height="240" controls style={{ maxWidth: '400px', maxHeight: '300px' }}>
        <source src="Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Omoss;
