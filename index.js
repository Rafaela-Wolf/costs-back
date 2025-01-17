const express = require('express');
const cors = require('cors');
const db = require('./db.json');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/projects', (req, res) => {
  res.json(db.projects || []);
});

app.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;

  const project = db.projects.find((project) => project.id === Number(id));

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  res.status(200).json(project);
});

app.post('/api/projects', (req, res) => {
  const newProject = req.body;

  if (!newProject || !newProject.name || !newProject.budget) {
      return res.status(400).json({ message: "Invalid project data" });
  }

  db.projects.push(newProject);

  res.status(201).json(newProject);
});

app.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const projectIndex = db.projects.findIndex((project) => project.id === id);

  if (projectIndex === -1) {
    return res.status(404).json({ message: "Project not found" });
  }

  const deletedProject = db.projects.splice(projectIndex, 1);

  res.status(200).json({ message: "Project deleted successfully", project: deletedProject });
});

app.patch('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body; 

  const projectIndex = db.projects.findIndex((project) => project.id === id);

  if (projectIndex === -1) {
    return res.status(404).json({ message: "Project not found" });
  }

  const updatedProject = { ...db.projects[projectIndex], ...updatedData };

  db.projects[projectIndex] = updatedProject;

  res.status(200).json(updatedProject);
});

app.get('/api/categories', (req, res) => {
  res.json(db.categories || []);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;