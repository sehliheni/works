import Card from 'react-bootstrap/Card';
import { movies } from './Data';

const Movie = ({movies}) => {
  return (
    //movies card
    <div className='mov'>  
      {movies.map((elm) => (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img src={elm.Imag}></Card.Img>
      <Card.Text>
      <h4>Titel:{elm.name}</h4>
      <h4>Rate:{elm.rate}</h4>
      </Card.Text>
    </Card.Body>
    </Card>
      ))}

      
    </div>
  );
}

export default Movie;
