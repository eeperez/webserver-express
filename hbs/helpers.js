const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    let iAnio = new Date().getFullYear();
    return iAnio;
});

hbs.registerHelper('capitalizar', (cTexto) => {
    let palabras = cTexto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});