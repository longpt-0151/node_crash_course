const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;
const methodOverride = require('method-override')

const route = require('./routes');
const db = require('./config/db');

// override method 
app.use(methodOverride('_method'))

//connect to db

db.connect();
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// XMLHttpRequest, fetch, axios

//http logger
app.use(morgan('tiny'));
//Loads the handlebars module
const { engine } = require('express-handlebars');
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers : {
            sum: (a,b) => a + b
        }
    }),
);

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
