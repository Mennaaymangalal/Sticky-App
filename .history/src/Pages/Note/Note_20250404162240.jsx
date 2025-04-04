import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Note({note , deleteNote}) {
  console.log(note)
  return (
    <>
     <div className="col-3 py-4">
     <Card>
      <Card.Header className='fw-semibold'>{note.title}</Card.Header>
      <Card.Body>        
        <Card.Text>
        {note.content}
        </Card.Text>
       <div className="d-flex justify-align-content-around">
       <Button className='bg-transparent text-danger border-0'> <i className="fa-solid fa-trash"></i></Button>
       <Button onClick={deleteNote} className='bg-transparent text-primary border-0'> <i class="fa-solid fa-pen-to-square"></i></Button>
       </div>
      </Card.Body>
    </Card>
     </div>
    </>
  )
}
