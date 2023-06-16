import React from 'react';


export default function Row3({id , studentID, taskID, status,dueDate,initialDate}) {
    if(status == 0){
        var Estado= "Pendiente"
      }
      if(status == 1){
        var Estado = "Terminada"
      }
    return (

        <tr>
            <td>{id}</td>
            <td>{studentID}</td>
            <td>{taskID}</td>
            <td>{status}</td>
            <td>{dueDate}</td>
            <td>{initialDate}</td>
        </tr>
    );
}