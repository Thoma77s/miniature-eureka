
const express = require('express');
const fs = require
const app = express();
const PORT = process.env.PORT || 3001;
require('./routes/routes')(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});