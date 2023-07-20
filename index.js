const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el número de puerto si lo deseas

app.get('/', (req, res) => {
  res.send('¡Hola Mundo con Express y Node.js!');
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
