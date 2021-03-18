const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const path = require('path');
const app = express();
const port = 3000;

app.use('/public',express.static(path.join(__dirname,'views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/cad", function(req, res) {
    res.sendFile(path.join(__dirname, 'views', "/cad.html"));
});

app.use('/medicos', controllers.medicos);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));