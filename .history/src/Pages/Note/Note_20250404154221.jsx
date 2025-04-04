import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Note() {
  return (
    <>
     <div className="col-3 py-4">
     <Card>
      <Card.Header>Title</Card.Header>
      <Card.Body>        
        <Card.Text>
         Content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     </div>
    </>
  )
}
