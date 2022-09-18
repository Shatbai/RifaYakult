let express = require('express');

let app = express();

let appRoutes = require('./routes/app');

let appConfig = require('./configs/app');


app.use('/', appRoutes);
app.use(express.static(__dirname + '/public'));



app.listen(appConfig.express_port,() => {
  let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port +')';
  console.log(show);
});