import React from 'react';


export default function Row6({id , assignmentID,assignmentResponseID,status,initialAvailableDate,endAvailableDate}) {
  
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