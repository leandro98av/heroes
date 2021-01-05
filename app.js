const fs = require('fs');
const express = require('express');

const mainRouter = require('./routes/main');
const heroesRouter = require('./routes/heroes');

const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/heroes',heroesRouter)
app.use('/',mainRouter)