import express from 'express';
import logger from 'morgan';
import indexRoute from './routes/index';
import logingRoute from './routes/login';
import callbackRoute from './routes/callback';
import profileRoute from './routes/profile';

const app = express();
const port = process.env.PORT || '3000';

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.set('view engine', 'ejs');
app.set('port', port);

app.use(express.static('public'));


app.use('/', indexRoute);
app.use('/login', logingRoute);
app.use('/callback', callbackRoute);
app.use('/profile', profileRoute);

const server = app.listen(port);

export default server;
