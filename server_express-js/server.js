const express = require('express');
const passport = require('passport');
const session = require('express-session');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport');

app.disable('x-powered-by');

app.set('port', port);

userRoutes(app);

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});

app.get('/test', (req, res) => {
    res.send('Estas en la ruta de test');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

const ip = '192.168.20.54';
server.listen(port, ip, function() {
    console.log('Aplicación de NodeJs ' + process.pid + ' inició en el puerto ' + server.address().address + ':' + server.address().port);
});
