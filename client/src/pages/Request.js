import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Table6 from './components/table6';  

function hideAcepted() {
    document.getElementById("acepted").style.display = "none";
    document.getElementById("rejected").style.display = "block";
    
  }

  function hideRejected() {
    document.getElementById("rejected").style.display = "none";
    document.getElementById("acepted").style.display = "block";
  }

function getRow() {
    alert(document.getElementById("myTable").rows[0]);
  }

const Request = (props) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/requests0`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    const [data2, setData2] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/requests1`)
        .then((res) => res.json())
        .then((data) => setData2(data));
    }, []);
    const [data3, setData3] = React.useState(null);
  React.useEffect(() => {
      fetch(`/api/requests2`)
        .then((res) => res.json())
        .then((data) => setData3(data));
    }, []);
    var Data;
  return (
    <>
    <div className='derecha' >
    <div className="header-container">
      <Navbar brand="Lista de solicitudes" />
      </div>    

    <div className='tableContainer paired'>
        <div className='r1'>
            <h2>Lista de solicitudes pendientes</h2>
            <br/><br/>
            <Table6 data={data}/>
        </div>
        <div className='r1'>
            <h2>Lista de solicitudes revisadas</h2>
            <button className="defaultButton" onClick={hideRejected}>Solicitudes Aceptadas</button>
            <button className="defaultButton" onClick={hideAcepted}>Solicitudes Rechazadas</button>
            <div id="acepted">
                <Table6 data={data2}/>
            </div>
            <div id="rejected">
                <Table6 data={data3}/>
            </div>
            
        </div>
            
        </div>
    </div>
    </>
  );
}
export default Request;