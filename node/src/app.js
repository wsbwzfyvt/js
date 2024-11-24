import express from 'express';
import { conectaDB } from './config/dbConnect.js';
import { routes } from './routes/index.js';

// conexao com o banco de dados
const conexao = await conectaDB();
conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});
conexao.once('open', () => {
    console.log('Conectado no MongoDB com sucesso!');
});

// app
export const app = express();
routes(app);

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).json(livros);
});