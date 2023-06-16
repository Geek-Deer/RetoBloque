import * as React from 'react';
import Row from './row.js';

function Table({data}) {
    const table = data?.map(imaginante =>
        <Row id = {imaginante.studentID} nombre = {imaginante.name} password ={imaginante.password} email ={imaginante.email} tareas = {imaginante.tasks} equipo = {imaginante.team}/>
    ); 
    return(
        <div>
        <table className="table table-hover table-dark">
            <thead>
            <tr>
                <th scope="col">Matricula</th>
                <th scope="col">Nombre</th>
                <th scope="col">Contraseña</th>
                <th scope="col">E-mail</th>
                <th scope="col">Tareas</th>
                <th scope="col">Equipo</th>
            </tr>
            </thead>
            <tbody>
            {table} 
            </tbody>
        </table>
    </div>
        );
      };
  export default Table;