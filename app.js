const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const userRoute = require('./routes/userRouter')

app.use('/user', userRoute);

module.exports = app;