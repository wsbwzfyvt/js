import express from 'express';
import { routes as livros } from './livrosRoutes.js';

export const routes = (app) => {
    app.route("/").get((req, res) =>  res.status(200).send('Hello World!'));
    app.use(express.json(), livros);
};