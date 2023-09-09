require('dotenv').config();
const express = require('express');
const cors = require("cors");

const connectToDb = require('./Config/db.js')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

connectToDb()

const userRoutes = require('./Routes/userRoutes.js')


app.use('/', userRoutes);


module.exports = app;