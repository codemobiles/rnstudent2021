const express = require('express');
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
      // res.json({error, fields, files});
      var newname = Date.now();
      var oldpath = files.userfile.path;
      var newpath =
        __dirname +
        '/upload/' +
        newname.toString() +
        '.' +
        files.userfile.name.split('.').pop();
  
      fs.move(oldpath, newpath, function (err) {
        res.json({result: 'Upload Successfully', account: fields});
      });
    });
  });

app.listen(3000, () => {
  console.log('Server is running.');
});
