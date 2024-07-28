const express = require('express');

const {ServerConfig} = require('./config');

const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);

const PORT = ServerConfig.PORT || 8080 ;

app.listen(PORT,async () =>{
    console.log(`succesfully started the server ${PORT}`);
});