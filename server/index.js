//Express
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const { urlencoded } = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();


//App
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser({urlencoded:true}))

//SQL
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "",
  database: "gestionImaginantes"
});
con.connect((error) => {
  if (error) {
    console.error('Error conectando a la base de datos: ', error);
    return;
  }
  console.log('Conexion con la base de datos establecida');
});

//ENDPOINTS Imaginantes
app.get('/api/imaginantes',(req,res)=>{
  con.query("SELECT * FROM user", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/api/imaginantes:id',(req,res)=>{
  const { id } = req.params;
  con.query(`SELECT * FROM user WHERE studentID = ${id}`, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post('/api/imaginantes/', (req, res) => {
  const { studentID , name, password, email, team } = req.body;
  const sql = `INSERT INTO user (studentID , name, password, email, tasks, team) VALUES (?, ?, ?, ?, 0, ?)`;
  const values = [studentID , name, password, email, team];

  con.query(sql, values, (error, results, fields) => {
    if (error) throw error;
    res.json({ message: 'El imaginante se ha agregado con exito' });
  });
});

app.delete('/api/imaginantes/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM user WHERE studentID = "${id}"`;

  con.query(sql, (error, result) => {
    if (error) throw error;
    console.log(`Deleted ${result.affectedRows} row(s)`);
    res.send(`El imaginante con el id: ${id} ha sido eliminado`);
  });
});

app.put('/api/imaginantes/:id', (req, res) => {
  const {studentID,name, password, email, tasks, team} = req.body;
 
  const query = `UPDATE user SET name="${name}", password="${password}", email="${email}", team=${team} WHERE studentID="${studentID}";`;
  con.query(query, (err, result) => {
    if (err) throw err;
    res.send(`El imaginante con el id ${studentID} ha sido actualizado`);
  });
});

//Endpoints Assignments
app.get('/api/assignments',(req,res)=>{
  con.query("SELECT * FROM assignment", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});


app.post('/api/assignments', (req, res) => {
  const { id, studentID , taskID, dueDate, initialDate } = req.body;
  const sql = `INSERT INTO assignment (id, studentID , taskID, status, dueDate, initialDate) VALUES (?, ?, ?, "Started", ?, ?)`;
  const values = [id, studentID , taskID, dueDate, initialDate];

  con.query(sql, values, (error, results, fields) => {
    if (error) throw error;
    res.json({ message: 'La asignación se ha agregado con exito' });
  });
});

app.delete('/api/assignments/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM assignment WHERE id = "${id}"`;

  con.query(sql, (error, result) => {
    if (error) throw error;
    console.log(`Deleted ${result.affectedRows} row(s)`);
    res.send(`La asignación con el id: ${id} ha sido eliminada`);
  });
});

app.put('/api/assignments/:id', (req, res) => {
  const {studentID , taskID, status, dueDate, initialDate} = req.body;
  const {id} = req.params;
  const query = `UPDATE assignments SET id=${id}, studentID="${studentID}", taskID=${taskID}, status=${status}  dueDate=${dueDate}, initialDate=${initialDate} WHERE id=${id}`;
  con.query(query, (err, result) => {
    if (err) throw err;
    res.send(`La asignación con el id ${id} ha sido actualizada`);
  });
});

//Endpoints announcements
app.get('/api/announcements',(req,res)=>{
  con.query("SELECT * FROM announcement", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post('/api/announcements/', (req, res) => {
  const { id, content, createdAt } = req.body;
  const sql = `INSERT INTO announcement (id, content, createdAt) VALUES (?, ?, ?)`;
  const values = [id, content, createdAt];

  con.query(sql, values, (error, results, fields) => {
    if (error) throw error;
    res.json({ message: 'El Anuncio se ha agregado con exito' });
  });
});

app.delete('/api/announcements/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM announcement WHERE id = ${id}`;

  con.query(sql, (error, result) => {
    if (error) throw error;
    console.log(`Deleted ${result.affectedRows} row(s)`);
    res.send(`La asignación con el id: ${id} ha sido eliminada`);
  });
});

//Endpoints request
app.get('/api/request',(req,res)=>{
  con.query("SELECT * FROM request", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

//Endpoints Task 
app.get('/api/task',(req,res)=>{
  con.query("SELECT * FROM task", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});


app.post('/api/task', (req, res) => {
  const { id, name, decription } = req.body;
  const sql = `INSERT INTO task (id, name, decription) VALUES (?, ?, ?)`;
  const values = [id, name, decription];

  con.query(sql, values, (error, results, fields) => {
    if (error) throw error;
    res.json({ message: 'La tarea se ha agregado con exito' });
  });
});

app.delete('/api/task/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM task WHERE id = ${id}`;

  con.query(sql, (error, result) => {
    if (error) throw error;
    console.log(`Deleted ${result.affectedRows} row(s)`);
    res.send(`La tarea con el id: ${id} ha sido eliminada`);
  });
});

app.put('/api/task/:id', (req, res) => {
  const {name, decription} = req.body;
  const {id} = req.params;
  const query = `UPDATE task SET name="${name}", decription="${decription}" WHERE id=${id}`;
  con.query(query, (err, result) => {
    if (err) throw err;
    res.send(`La tarea con el id ${id} ha sido actualizada`);
  });
});

app.get('/api/announcements',(req,res)=>{
  con.query("SELECT * FROM announcement", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/api/users',(req,res)=>{
  con.query("SELECT name, studentID FROM user;", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});
app.get('/api/tasks',(req,res)=>{
  con.query("SELECT id, name FROM task;", (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

    
