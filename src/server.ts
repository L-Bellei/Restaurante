import express from 'express';
import { routes } from './routes';

const server = express();

server.use(express.json());

server.use(routes);

server.listen(3030, () => console.log('Rodando na porta 3030'));
