const express = require('express');
const cors = require('cors');
const db = require('./db.json');

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint para obter os dados dos projetos
app.get('/api/projects', (req, res) => {
  res.json(db.projects || []);
});

app.post('/api/projects', (req, res) => {
  res.json(db.projects || []);
});

app.patch('/api/projects/:project.id', (req, res) => {
  res.json(db.projects || []);
});

app.delete('/api/projects/:id', (req, res) => {
  res.json(db.projects || []);
});

// app.post('/api/projects', (req, res) => {
//   const newProject = req.body;

//   if (!newProject || !newProject.name || !newProject.budget) {
//       return res.status(400).json({ message: "Invalid project data" });
//   }

//   db.projects.push(newProject);

//   res.status(201).json(newProject);
// });

// Endpoint para obter os dados das categorias 
app.get('/api/categories', (req, res) => {
  res.json(db.categories || []);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;