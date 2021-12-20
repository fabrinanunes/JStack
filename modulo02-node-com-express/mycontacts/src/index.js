const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

// app.use = middlewares
app.use(express.json());
// express entende as rotas como middlewares
app.use(routes);
app.use((error, req, res, next) => {
  console.log('###ERROR HANDLER');
  console.log(error);
  res.sendStatus(500);
});

app.listen(3000, () => console.log('Server is running at PORT 3000'));
