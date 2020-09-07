import express, { Application, Request, Response } from 'express';
import routes from './routes';
require('./database');

const app: Application = express();

app.use(express.json());
app.use(routes);

app.listen(8080, () => console.log('server running'));