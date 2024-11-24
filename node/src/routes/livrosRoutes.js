import express from 'express';
import { LivroController } from '../controllers/livrocontroller.js';

export const routes = express.Router();

routes.get('/livros', LivroController.listaLivros);
routes.get('/livros/:id', LivroController.listaLivroPorID);
routes.post('/livros/', LivroController.cadastraLivro);
routes.put('/livros/:id', LivroController.atualizaLivro);
routes.delete('/livros/:id', LivroController.deletaLivro);