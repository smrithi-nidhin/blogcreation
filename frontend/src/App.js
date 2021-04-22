
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
//import Modal from './components/Modal';
//import { Button,Modal} from 'react-bootstrap';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Add from './components/Add';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userpage from './components/Userpage';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  // constructor()
  // {
  //   super()
  //   this.state={
  //     show:false
  //   }
  // }
  // handleModal()
  // {
  //   this.setState({show:!this.state.show})
  // }
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              {/* <Button onClick={()=>{this.handleModal()}}>open modal</Button>
              <Modal show={this.state.show} onHide={()=>{this.handleModal()}}>
                <Modal.Header closeButton>modal head part</Modal.Header>
                <Modal.Body>
                  hi
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={()=>{this.handleModal()}}>Close</Button>
                </Modal.Footer>
              </Modal> */}
            {/* <Modal /> */}
              <Navbar />
                <Route exact path="/" component={ Home} />
                
                
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  {/* <List /> */}
                  <Route exact path="/add" component={ Add} />
                  <Route exact path="/userpage" component={ Userpage} />

                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;