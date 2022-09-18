let express = require('express');

let app = express();

let appRoutes = require('./routes/app');

app.use('/', appRoutes);
app.use(express.static(__dirname + '/public'));


app.listen(3000,() => {
  console.log('App listening on port 3000! (http://localhost:3000)');
});