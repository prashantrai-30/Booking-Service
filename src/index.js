const express = require('express');

const {ServerConfig,  Logger} = require('./config');

const apiRoutes = require('./routes');
const { config } = require('dotenv');
const { json } = require('sequelize');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,async () =>{
    console.log(`succesfully started the server ${ServerConfig.PORT}`);
});