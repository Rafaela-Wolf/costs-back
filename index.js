const express = require('express');
const cors = require('cors');
const db = require('./db.json');

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint para obter os dados do db.json
app.get('/api/projects', (req, res) => {
  res.json(db.projects || []);
});

// Porta será configurada automaticamente pelo Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;