const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');

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
    }),
);

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
