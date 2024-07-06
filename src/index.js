const express = require('express');

const {ServerConfig,  Logger} = require('./config');

const apiRoutes = require('./routes');
const { config } = require('dotenv');

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,() =>{
    console.log(`succesfully started the server`);
});