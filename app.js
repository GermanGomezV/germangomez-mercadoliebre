const express = require("express");
const path = require("path");
const app = express();

/*Configuraciones*/
app.use(express.static(path.resolve(__dirname,"public")));

/*Rutas*/
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'));
});

/*Server*/
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor funcionando en el puerto 3000');
});

