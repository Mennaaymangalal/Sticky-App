import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Note({note}) {
  console.log(note)
  return (
    <>
     <div className="col-3 py-4">
     <Card>
      <Card.Header>{</Card.Header>
      <Card.Body>        
        <Card.Text>
        mm
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     </div>
    </>
  )
}
