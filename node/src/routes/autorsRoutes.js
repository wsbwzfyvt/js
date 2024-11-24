import express from 'express';
import { autorController } from '../controllers/autorController.js';

export const routes = express.Router();

routes.get('/autors', autorController.listaautors);
routes.get('/autors/:id', autorController.listaautorPorID);
routes.post('/autors/', autorController.cadastraautor);
routes.put('/autors/:id', autorController.atualizaautor);
routes.delete('/autors/:id', autorController.deletaautor);