const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//pagina incial
app.get('/', (req, res) => {
    //res.send('Hola mundo');

    res.render('home', {
        nombre: 'eLías'
    });
});

//pagina about
app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/prueba', (req, res) => {
    res.send('Hola prueba');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});