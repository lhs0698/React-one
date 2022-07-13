import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';


// import Modal from 'react-modal';

export default function Main() {
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Top></Top>
      <div>main page</div>
    </div>
  );
}

// 상단바
function Top() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">alta</Nav.Link>
          <Nav.Link href="#pricing">기타</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

//export default Main;
