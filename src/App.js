import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Button from 'react-bootstrap/Button';

function App() {


  return (
    <div className="App">
      <Top></Top>
      <LoginInput></LoginInput>
      <Loginbtn></Loginbtn>
    </div>
  );
}

// navbar
function Top() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">로그인</Nav.Link>
          <Nav.Link href="#features">회원가입</Nav.Link>
          <Nav.Link href="#pricing">기타</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

// login-input-box
function LoginInput() {
  return (
    <div className='inputWrap'>
      <FloatingLabel
        controlId="floatingInput"
        label="ID"
        className="mb-2"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </div>
  );
}

// 로그인, 회원가입 Button
function Loginbtn() {
  function Click() {
    console.log("click");
  }
  return (
    <div className="d-grid gap-2" id='Login'>
      <Button variant="primary" size="lg" onClick={Click}>
        로그인
      </Button>
      <Button variant="danger" size="lg">
        회원가입
      </Button>
    </div>
  )
};

export default App;
