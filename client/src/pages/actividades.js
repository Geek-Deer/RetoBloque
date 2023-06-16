import './App.css';
import React from "react";
import Navbar from './components/Navbar'; 
import axios from 'axios';
import Table2 from './components/table2'; 
import { Link } from "react-router-dom";

function callApi5() {
  const id = document.getElementById('id3').value;
  
  const url = `/api/assignments/${id}`;

  axios.delete(url)
    .then(response => {
      console.log(response.data);
      alert('El imaginante ha sido eliminado de la base de datos');
    })
    .catch(error => {
      console.error(error);
      alert('Error eliminando al imaginante');
    });
}

const Actividades = (props) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/task`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  return (
    <>
    <div className='derecha' >
    <div className="header-container">
      <Navbar brand="Lista de actividades" />
        <button className="defaultButton der" >
        <Link to="/RegistroAct">Registrar actividad</Link>
      </button>
      </div>
    <div > 
    <Table2 data={data}/>
    </div>
    <div>

      <h2>Borrar Actividad</h2>
      <div>
      <form onSubmit={() => { callApi5(); window.location.reload(); }}>
      <input type="text" placeholder="ID:" className="input" id='id3' required/>
      <input type='submit' className="defaultButton" value="Borrar" ></input>
      </form>
      </div>
      </div>
    </div>
    </>
  );
}
export default Actividades;