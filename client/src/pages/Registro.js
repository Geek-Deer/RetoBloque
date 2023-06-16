import './App.css';
import './components/navbar.css';
import React from "react";
import axios from 'axios';
import Navbar from './components/Navbar';
import { Link } from "react-router-dom";

function callApi3() {
    const studentID = document.getElementById('id').value;
    const name = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const team = document.getElementById('team').value;
    
    const uri = `/api/imaginantes`;
  
    axios.post(uri, {studentID , name, password, email, team})
      .then(response => {
        console.log(response.data);
        alert('El imaginante ha sido registrado');
      })
      .catch(error => {
        console.error(error);
        alert('Error registrando al imaginante');
      });
  }
  
const Registro = (props) =>{
    return (
      <>
      <div className='derecha' >
      <Navbar brand ="Registro de imaginantes" />
      <div > 
      <h2 className="home-text08">Ingresar datos</h2>
      <div className="home-container1">
      <form onSubmit={() => { callApi3(); window.location.reload(); }}>
      <input type="text" placeholder="Matricula:" className="input" id='id' required maxLength={9} minLength={9}/>
      <input type="text" placeholder="Nombre:" className="input" id='nombre' required maxLength={80}/>
      <input type="text" placeholder="Contraseña" className="input" id='password' required maxLength={20}/>
      <input type="text" placeholder="E-mail:" className="input" id='email' required maxLength={80}/>
      <input type="number" placeholder="Equipo:" className="input" id='team' required maxLength={2}/>
      <input type='submit' className="defaultButton" value="Registrar" ></input>
      </form>
      </div>
      <button className="defaultButton" ><Link to="/">Regresar</Link></button>
      </div>
      </div>
      </>
    );
  }
  export default Registro;