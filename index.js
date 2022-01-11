const express = require('express');
require('dotenv').config();

const pruebaRoutes = require('./routes/pruebaRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', pruebaRoutes);

app.listen( process.env.PORT, () => {
    console.log(`Running port ${process.env.PORT}`)
});
