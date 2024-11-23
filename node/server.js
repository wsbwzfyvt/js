import http from 'http';

const PORT = 3000;

const rotas = {
    '/': "Hello World\n",
    '/livros': "Lista de livros\n",
    '/autores': "Lista de autores\n",

};

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(req.url in rotas ? rotas[req.url] : 'Rota não encontrada\n');
});

server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000/');
});

