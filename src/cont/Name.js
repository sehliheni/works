import React from 'react';
import Card from 'react-bootstrap/Card';
import { players } from './data';

const Name = ({players}) => {
return (
    <div>
    <Card  style={{ width: '16rem' }}>
        <Card.Img variant="top" src={players.imageUrl} />
        <Card.Body>
        <Card.Title> Name :{players.name}</Card.Title>
        <Card.Text>
        Team :{players.team}
        Age :{players.age}
        </Card.Text>
        </Card.Body>
    </Card>
    </div>
)
}

export default Name;

