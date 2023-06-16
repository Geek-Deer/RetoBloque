import React from 'react';


export default function Row({id , nombre, password, email,tareas,equipo}) {
    if(equipo == 1){
        var equipoN = "Comunicación"
      }
      if(equipo == 2){
        var equipoN = "Contenido"
      }
      if(equipo == 3){
        var equipoN = "Contenido"
      }
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