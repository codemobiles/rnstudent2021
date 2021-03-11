const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const position = require('./model_position');

app.post('/record_position', async (req, res) => {
  console.log(JSON.stringify(req.body));
  await position.create(req.body);
  res.json({result: 'ok'});
});

app.get('/position', async (req, res) => {
  let result = await position.findAll();
  res.json(result);
});

app.listen(3000, () => {
  console.log('Ready..');
});
