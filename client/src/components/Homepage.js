import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import titulo from "../img/titulo.png";
import lacman from "../img/Lacman.png";
import unirseJuego from "../img/unirseJuego.PNG";
import crearJuego from "../img/crearJuego.PNG";
import {Modal, ModalBody, ModalHeader, ModalFooter, ButtonGroup, ButtonToggle, Button} from 'reactstrap';
import { Link } from "react-router-dom";
//import randomCodeGenerator from "../utils/randomCodeGenerator";

const Homepage = () => {
  // Declarando variable de estado!
  const [modal2, setModal2] = useState(false);
  const [modal, setModal] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Crear', value: '1' },
    { name: 'Unirse', value: '2' },
  ];

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Link to={`/aboutGame`}>
              <a className="btn btn-light btn-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                  <path className="pathColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                </svg>
              </a>
            </Link>
            <img src={titulo} className="titlee"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="window">
              <input id="newname" type="text" className="text" placeholder="Ingresa  tu  nombre  aqui ..."/>
              <button className="btn btn-primary btn-lg" size="lg" onClick={()=>setModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 15 15">
                  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>Jugar
              </button> 
              <center><p className="jprivados">Juegos Privados</p></center>
              
              <ButtonGroup toggle className="btn-group-toggle">
                <ButtonToggle className="btn btn-danger active btnc" data-toggle="modal"  onClick={()=>setModal(true)}>
                   Crear
                </ButtonToggle>
                <ButtonToggle className="btn btn-danger btnc" data-toggle="modal" onClick={()=>setModal2(true)}> Unirse
                </ButtonToggle>
              </ButtonGroup>
            </div>
          </div>
          <div className="col-lg-5">
            <img src={lacman} className="imglacman"/>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} dialogClassName="modal-10w">
        <div className="modal-create">
          <ModalHeader>
            <Button type="button" className="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</Button>
            <img src={crearJuego} className="imgCrearJuego"/>
          </ModalHeader>
          <ModalBody className="medio">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <input id="newpasscode" className="classCodigo" name="codigo" type="text" placeholder="Ingresa el código"/>
                  <p className="classCA">El código de acceso debe tener mínimo 4 caracteres.</p>
                  <Button type="button" className="btn btn-danger btDanger" onclick="Module.showPasscode()">Asignar</Button>
                </div>
                <div className="col-lg-3">
                  <h5 className="classAcceso">Código de Acceso</h5>
                  <button id="getpasscode" type="button" className="btn btn-secondary btn-lg labelpass" disabled>Passcode</button>
                  <p id="ready" className="classCB"></p>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="button" className="btn btn-light" data-dismiss="modal" onClick={()=>setModal(false)}>Cancelar</Button>
            <button type="button" className="btn btn-primary" onclick="Module.addGameRoom()">Jugar</button>
          </ModalFooter>
        </div>
      </Modal>
      <Modal isOpen={modal2} dialogClassName="modal-90w">
        <div className="modal-join">
          <ModalHeader>
            <Button type="button" className="close" data-dismiss="modal" onClick={()=>setModal2(false)}>&times;</Button>
            <img src={unirseJuego} className="imgUnirJuego"/>
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <input id="joinpasscode" className="classCodigo2" name="codigo" type="text" placeholder="Ingresa el código de acceso"/>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="button" className="btn btn-light" data-dismiss="modal" onClick={()=>setModal2(false)}>Cancelar</Button>
            <button type="button" className="btn btn-primary" onclick="Module.isPasscode()">Jugar</button>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
};

export default Homepage;
