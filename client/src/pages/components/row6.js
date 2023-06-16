import React from 'react';


export default function Row6({id , assignmentID,assignmentResponseID,status,initialAvailableDate,endAvailableDate}) {
    if(status == 0){
        Estado = "Pendiente"
      }
      if(status == 1){
        Estado = "Aceptada"
      }
      if(status == 2){
        Estado = "Rechazada"
      }
    return (

        <tr>
            <td>{id}</td>
            <td>{assignmentID}</td>
            <td>{assignmentResponseID}</td>
            <td>{status}</td>
            <td>{initialAvailableDate}</td>
            <td>{endAvailableDate}</td>
        </tr>
    );
}