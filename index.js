let express = require('express');

let app = express();

let appRoutes = require('./routes/app');

let appConfig = require('./configs/app');

const path = require('path');

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', appRoutes);

let exphbs = require('express-handlebars');
const extNameHbs = 'hbs';

let hbs = exphbs.create({extname: extNameHbs});

app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

app.use(express.static(path.join(__dirname, 'public')));


app.listen(appConfig.express_port,() => {
  let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port +')';
  console.log(show);
});