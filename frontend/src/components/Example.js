import React, { Component,useState } from "react";

import Modal from 'react-modal';  
import { Button} from 'react-bootstrap';
//import Modal from './Modal.js';
function Example() {
    const [show, setShow] = useState(true);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
  
    return (
      <div>
  
    
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
 

        </div>
    );
  }
  

  export default Example;