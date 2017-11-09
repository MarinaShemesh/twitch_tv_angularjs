const express = require('express');
const app = express();

// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(port, function() {
  console.log("Ears open on 8080.")

});
