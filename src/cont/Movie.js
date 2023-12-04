import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ReactStars from "react-rating-stars-component";




const Movie = ({movies}) => {
  const [Rate, setRate] = useState(0);
  const ratingChanged = (newRating) => {
    setRate(newRating);
      };

  return (
    //movies card
    <div className='mov'>  
      {movies.map((elm) => (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img src={elm.Imag}></Card.Img>
      <Card.Text>
      <h4>Titel:{elm.name}</h4>
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
/>,
  
      </Card.Text>
    </Card.Body>
    
    </Card>
      ))}
    </div>
  );
}

export default Movie;
