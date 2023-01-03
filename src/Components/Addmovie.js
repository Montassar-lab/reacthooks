import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';


function Addmovie({movies,setMovies}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [title,setTitle] = useState('')
    const [posterURL,setPosterURL] = useState('')
    const [description,setDescription] = useState('')
    const [rating,setRating] = useState(0)

    const handleAdd=()=>setMovies([...movies,{title,posterURL,description,rating,id:Math.random()}])

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MOVIE DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Picture</Form.Label>
              <Form.Control
                type="Text"
                placeholder="add your movie picture"
                onChange={(e)=>setPosterURL(e.target.value) }
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="Text"
                placeholder="add your movie title"
                onChange={(e)=>setTitle(e.target.value) }
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Movie description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e)=>setDescription(e.target.value) } />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>rating</Form.Label>
              <Rating
                name="simple-controlled"
                
                onChange={(e)=>setRating(e.target.value)}
              />

            </Form.Group>

          </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();handleAdd()}}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addmovie