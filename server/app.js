const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose')
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./db/dbconnection').connect();


const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server has been started on ${PORT} port`)
})
