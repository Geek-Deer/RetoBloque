import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from './components/Navbar';
import Table3 from './components/table3'; 

function callApi4() {
  const id = document.getElementById('id').value;
  const studentID = document.getElementById('matricula').value;
  const taskID = document.getElementById('IdTarea').value;
  const status = document.getElementById('status').value;
  const dueDate= document.getElementById('dueDate').value;
  const initialDate= document.getElementById('initialDate').value;

    const url = `/api/assignments/${id}`;
  
    axios.put(url, {id ,studentID , taskID, status, dueDate,initialDate})
      .then(response => {
        console.log(response.data);
        alert('Información de la asignación actualizada con exito');
      })
      .catch(error => {
        console.error(error);
        alert('Error al buscar la asignación');
      });
  }

const UpdateA = (props) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/assignments`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    const info = data;

    return (
      <div className='derecha' >
      <Navbar brand ="Actualizar datos de las asignaciones" />
      <div>
      <Table3 data={info}/>
      <h2 className="home-text09">Ingresa los nuevos datos</h2>
      <form onSubmit={() => {callApi4(); window.location.reload(); }}>
      <input type="text" placeholder="matricula:" className="input" id='id' />
      <input type="text" placeholder="nombre:" className="input" id='nombre'/>
      <input type="text" placeholder="password:" className="input" id='password' />
      <input type="text" placeholder="email:" className="input" id='email'/>
      <input type="text" placeholder="equipo:" className="input" id='team' />
      <input type='submit' className="defaultButton" value="Actualizar" ></input>
      </form>
      </div>
      </div>
    );
  }
  export default UpdateA;