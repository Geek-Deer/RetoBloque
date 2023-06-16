import React from 'react';


export default function Row({id , nombre, password, email,tareas,equipo}) {
  
    return (

        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{password}</td>
            <td>{email}</td>
            <td>{tareas}</td>
            <td>{equipo}</td>
        </tr>

    );
}