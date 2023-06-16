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
    var endAvailableDateF = endAvailableDate.substring(0,9) +  endAvailableDate.substring(11,18)
    var initialAvailableDateF = initialAvailableDate.substring(0,9) +  initialAvailableDate.substring(11,18)
    return (

        <tr>
            <td>{id}</td>
            <td>{assignmentID}</td>
            <td>{assignmentResponseID}</td>
            <td>{Estado}</td>
            <td>{initialAvailableDateF}</td>
            <td>{endAvailableDateF}</td>
        </tr>
    );
}