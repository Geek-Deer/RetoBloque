import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from './components/Navbar';
import Table from './components/table'; 


function callApi4() {
  const studentID = document.getElementById('id').value;
  const name = document.getElementById('nombre').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const team = document.getElementById('team').value;
    
    const url = `/api/imaginantes/${studentID}`;
  
    axios.put(url, {studentID ,name, password, email, team})
      .then(response => {
        console.log(response.data);
        alert('Información del estudiante actualizada con exito');
      })
      .catch(error => {
        console.error(error);
        alert('Error al buscar al estudiante');
      });
  }

const Update = (props) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/imaginantes`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    const info = data;

    return (
      <div className='derecha' >
      <Navbar brand ="Actualizar datos de imaginantes" />
      <div>
      <Table data={info}/>
      <h2 className="home-text09">Ingresa los nuevos datos</h2>
      <form onSubmit={() => {callApi4(); window.location.reload(); }}>
      <input type="text" placeholder="Matricula:" className="input" id='id' required maxLength={9} minLength={9}/>
      <input type="text" placeholder="Nombre:" className="input" id='nombre' required maxLength={80}/>
      <input type="text" placeholder="Contraseña" className="input" id='password' required maxLength={20}/>
      <input type="text" placeholder="E-mail:" className="input" id='email' required maxLength={80}/>
      <input type="number" placeholder="Equipo:" className="input" id='team' required maxLength={2}/>
      <input type='submit' className="defaultButton" value="Actualizar" ></input>
      </form>
      </div>
      </div>
    );
  }
  export default Update;