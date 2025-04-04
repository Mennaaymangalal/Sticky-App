import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Note({note}) {
  console.log(note)
  return (
    <>
     <div className="col-3 py-4">
     <Card>
      <Card.Header>{note.title}</Card.Header>
      <Card.Body>        
        <Card.Text>
        {note.content}
        </Card.Text>
        <Button className='bg-transparent text-danger'> <i className="fa-solid fa-trash"></i></Button>
      </Card.Body>
    </Card>
     </div>
    </>
  )
}
