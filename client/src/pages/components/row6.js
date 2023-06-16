import React from 'react';


export default function Row6({id , assignmentID,assignmentResponseID,status,initialAvailableDate,endAvailableDate}) {
    if(status == 0){
        var Estado = "Pendiente"
      }
      if(status == 1){
        var Estado = "Aceptada"
      }
      if(status == 2){
        var Estado = "Rechazada"
      }
    return (

        <tr>
            <td>{id}</td>
            <td>{assignmentID}</td>
            <td>{assignmentResponseID}</td>
            <td>{Estado}</td>
            <td>{initialAvailableDate}</td>
            <td>{endAvailableDate}</td>
        </tr>
    );
}