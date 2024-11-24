import { livro } from "../models/Livro.js";

export class LivroController {
    static async listaLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao listar livros`});
        }
    };
    static async listaLivroPorID(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao listar livros`});
        }
    };
    static async cadastraLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);            
            res.status(201).json({
                message: 'Livro adicionado com sucesso', 
                livro: novoLivro});
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao adicionar livro`});
        }
    };
    static async atualizaLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'Livro atualizado com sucesso'});
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha na requisicao`});
        }
    };
    static async deletaLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: 'Livro deletado com sucesso'});
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha na requisicao`});
        }
    };
};