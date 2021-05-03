const express = require('express');
const app = express();

/*Cinfiguraciones*/
app.use(express.static('public'));

/*Server*/
app.listen(process.env.PORT || 3000, function (){
    console.log('Servidor funcionando en el puerto 3000');
});

/*Rutas*/
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});