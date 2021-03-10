const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({result: 'ok'});
});

app.get('/login', (req, res) => {
    res.json({result: 'success', detail: req.query});
  });

app.listen(3000, () => {
  console.log('Server is running.');
});
