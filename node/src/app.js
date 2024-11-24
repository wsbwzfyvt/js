import express from 'express';

export const app = express();
app.use(express.json());


const livros = [
    {
        id:1,
        titulo: 'O Senhor dos Anéis',
    },
    {
        id:2,
        titulo: 'Harry Potter',
    },
]

function buscaLivro(id) {
    return livros.findIndex(
        livro => {
            return livro.id === Number(id);
        }
    );
}

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});


app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
    const livro = req.body;
    livros.push(livro);
    res.status(201).send('livro adicionado com sucesso');
});


app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    const livro = req.body;
    livros[index].titulo = livro.titulo;https://unibb.alura.com.br/course/node-js-api-rest-express-mongodb/task/136727
    res.status(200).json(livros);
});


app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).json(livros);
});