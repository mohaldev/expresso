const express = require('express');
const app = express();
const cors = require('cors');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const apiRouter = require('./api/api');

app.use(bodyParser.json());
app.use(cors());
app.use('/api', apiRouter);
app.use(errorhandler());


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})

module.exports = app;
