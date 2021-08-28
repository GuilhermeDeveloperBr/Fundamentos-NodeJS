const express = require('express');

const app = express();

app.use(express.json());

app.listen(3333);

//GET - BUSCAR UM DADO DENTRO DO SERVIDOR
app.get('/get', (request, response) => {
  return response.json({ message: 'Olá Mundo!'});
});

//POST - INSERIR UM DADO DENTRO DO SERVIDOR
app.post('/post', (request, response) => {
  const { data } = request.body;
  return response.json({ message: `Olá Developer o dado enviado no body via POST foi ${data}`});
});

//PUT - ALTERAR UM DADO DENTRO DO SERVIDOR
app.put('/put/:id', (request, response) => {
  const { id } = request.params;
  return response.json({ message: `Olá Developer o dado enviado no params via PUT foi ${id}`});
});

//PATCH - ALTERAR UM DADO ESPECÍFICA NO SERVIDOR
app.patch('/patch/:id', (request, response) => {
  const { id } = request.params;
  return response.json({ message: `Olá Developer o dado enviado no params via PATCH foi ${id}`});
});

//DELETE - DELETAR UM DADO NO SERVIDOR
app.delete('/delete/:id', (request, response) => {
  const { id } = request.params;
  return response.json({ message: `Olá Developer o dado enviado no params via DELETE foi ${id}`});
});