import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useRef } from 'react';


// import Main from './Main';

// import Modal from 'react-modal';


function App() {
  let [modal, setModal] = useState(false);
  // usestate test 
  //let [text, setText] = useState("alta");
  // function Change () {
  //   setText("alta0204");
  // }
  // usestate test

  return (
    <div className="App">
      <Top></Top>
      <LoginInputBox openModal={setModal}></LoginInputBox>
      {
        modal && <Modal closeModal={setModal} />
      }
      {/* <div onClick={Change}>{text}</div> */}
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
          <Nav.Link href="#home">로그인</Nav.Link>
          <Nav.Link href="#features">회원가입</Nav.Link>
          <Nav.Link href="#pricing">기타</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

// id, pw 입력
function LoginInputBox({ openModal }) {

  let [id, setId] = useState('');
  let [pw, setPw] = useState('');

  let [idWarn, setIdWarn] = useState('');
  let [pwWarn, setPwWarn] = useState('');

  let [auth, setAuth] = useState(false);

  function idHandler(inputEvent) {
    let inputId = inputEvent.target.value;
    setId(inputId);
  }

  function pwHandler(pwEvent) {
    let inputPw = pwEvent.target.value;
    setPw(inputPw);
  }

  function Logines() {
    let fix = {
      id: 'alta',
      pw: "0204"
    };

    if (id !== fix.id) {
      setIdWarn('wrong');
    } else setIdWarn('sucess');

    if (pw !== fix.pw) {
      setPwWarn('wrong')
    } else setPwWarn('');

    if (id === fix.id && pw === fix.pw) {
      setAuth(true)
      setIdWarn("sucess");
      setPwWarn("sucess");
    }
  }

  return (
    // input, button
    <div className='inputWrap'>
      <FloatingLabel controlId="floatingInput" label="ID" className="mb-2" id='idValue' >
        <Form.Control
          type="text"
          onChange={(event) => {
            idHandler(event)
          }}
          placeholder="ID"
        />
        <div>{idWarn}</div>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" id='pwValue' onChange={(event) => pwHandler(event)}>
        <Form.Control type="password" placeholder="Password" />
        <div>{pwWarn}</div>
      </FloatingLabel>
      <div className="d-grid gap-2" id='Login'>
        <Button variant="primary" size="lg" onClick={Logines}>로그인</Button>
        <Button variant="primary" size="lg" onClick={() => openModal(true)}>회원가입</Button>
      </div>
    </div>
  );
}
// modal 회원 가입 창
const Modal = ({ closeModal }) => {

  const [newId, setNewId] = useState("");
  const [newPw, setNewPw] = useState("");

  function newsId (e) {
    setNewId(e.target.value);
  };
  
  function newsPw (e) {
    setNewPw(e.target.value);
  }
  // e.target.value = input 입력값 가져오기
  function join() {
    // localStorage.setItem(JSON.stringify(newId), JSON.stringify(newPw)); 
    localStorage.setItem(newId, newPw);
    // localstorage 에는 문자열만 저장된다. 
    // localstorage에 객체나 배열을 저장하기 위해서는 객체를 문자열로 변환해서 저장해야 함. JSON.str 함수를 사용하여 변환하여 저장
  }
  function remove() {
    localStorage.removeItem(newId);
  }
  // localstroage에 id,pw 저장
  return (
    <div className='modal_container'>
      <div className='newUser-Info'>
        <input type="text" className='newID' placeholder='ID' onChange={newsId} />
        <input type="password" className='newPW' placeholder='PASSWORD' onChange={newsPw} />
        <Button variant="primary" size="lg" onClick={join}>등록</Button>
      </div>
      <Button variant='primary' size='lg' onClick={remove}>삭제</Button>
      <Button variant="primary" size="lg" onClick={() => closeModal(false)}>나가기</Button>
      <div>
        <b>값 : {newId}</b>
      </div>
    </div>
  )
}

export default App;
