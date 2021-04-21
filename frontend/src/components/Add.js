import React ,{useState} from "react";
import { connect } from "react-redux";
//import Modal from './Modal.js';
import { add } from '../actions/index';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import Example from "./Example";
import { Button,Modal} from 'react-bootstrap';
import List from './List.js';
const Add = (props) => {
    const [show,setShow] = useState(false);
   
 const handleModal = () =>{
    setShow(!show)
 }
    return (
        <form 
        onSubmit={(event)=>{
            event.preventDefault();
            let input = event.target.userInput.value;
            let title = event.target.userTitle.value;

            props.dispatch(add(input,title));
            event.target.userInput.value ="";
            event.target.userTitle.value ="";
        }}
        >
            {/* <Example /> */}
        
        {/* <div className="jumbotron">
        <Button onClick={handleModal}>open modal</Button>
              <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>
                <input placeholder="Enter Title" style={{margin:"10px",borderBlockStyle:"none",border:"none"}}></input>
            
                    </Modal.Header>
                <Modal.Body>
                <textarea placeholder="Enter description" type="text" name="userInput" rows={10} cols={38} style={{margin:"10px",borderBlockStyle:"none",border:"none"}} />
                <button style={{border:"none",backgroundColor:"#007bff"}}>Submit</button>
                </Modal.Body>
                <Modal.Footer>
                  <Button  onClick={handleModal}>Close</Button>
                </Modal.Footer>
              </Modal>
        </div> */}
        <div className="jumbotron">
          
        {/* <textarea placeholder="enter description" type="text" name="userInput" rows={10} cols={40} style={{margin:"100px"}} />
           */} 
            {/* <button>Submit</button>   */}
           <center> <MDBCard style={{ maxWidth: '29rem' }}>
      <MDBCardBody>
        <MDBCardTitle>
            <input placeholder="Enter Title" name="userTitle" style={{margin:"10px",borderBlockStyle:"none",border:"none"}}></input>
            </MDBCardTitle>
        <MDBCardText>
        <textarea placeholder="Enter description" type="text" name="userInput" rows={10} cols={38} style={{margin:"10px",borderBlockStyle:"none",border:"none"}} />
         
        </MDBCardText>
        <MDBBtn><button style={{border:"none",backgroundColor:"#007bff"}}>Submit</button> </MDBBtn>
      </MDBCardBody>
    </MDBCard></center>
        </div>
           <List />
        </form>
        
    )
}

export default connect()(Add);