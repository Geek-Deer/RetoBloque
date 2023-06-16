import React from 'react';


export default function Row3({id , studentID, taskID, status,dueDate,initialDate}) {
    if(status == 0){
        var Estado= "Pendiente"
      }
      if(status == 1){
        var Estado = "Terminada"
      }
    var dueDateF = dueDate.substring(0,9) +  dueDate.substring(11,18)
    var initialDateF = initialDate.substring(0,9) +  initialDate.substring(11,18)
    return (

        <tr>
            <td>{id}</td>
            <td>{studentID}</td>
            <td>{taskID}</td>
            <td>{Estado}</td>
            <td>{dueDateF}</td>
            <td>{initialDateF}</td>
        </tr>
    );
}