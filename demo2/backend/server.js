const express = require('express');
const formidable = require("formidable")
const app = express();

app.get('/', (req, res) => {
  res.json({result: 'ok'});
});

// http://localhost:3000/login?username=admin&password=1234
app.get('/login', (req, res) => {
  res.json({result: 'success', detail: req.query});
});

// http://localhost:3000/register/lek/1234
app.get('/register/:username/:password', (req, res) => {
  res.json({result: 'success', detail: req.params});
});


app.post('/uploads', (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, (error, fields, files) => {
      res.json({error, fields, files})
    });
  });

app.listen(3000, () => {
  console.log('Server is running.');
});
