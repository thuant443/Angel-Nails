import React, { Component, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => window.location.reload(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
       
        <button className="btn btn-primary" type="submit" variant="primary" onClick={handleShow} >
              Submit form
            </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>You have sucessfully book an appoinment!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
       
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Example;