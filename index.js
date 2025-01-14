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

// Endpoint para obter os dados das categorias 
app.get('/api/categories', (req, res) => {
  res.json(db.categories || []);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;