import { autor } from "../models/Autor.js";

export class autorController {
    static async listaautors(req, res) {
        try {
            const listaautors = await autor.find({});
            res.status(200).json(listaautors);
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao listar autors`});
        }
    };
    static async listaautorPorID(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao listar autors`});
        }
    };
    static async cadastraautor(req, res) {
        try {
            const novoautor = await autor.create(req.body);            
            res.status(201).json({
                message: 'autor adicionado com sucesso', 
                autor: novoautor});
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao adicionar autor`});
        }
    };
    static async atualizaautor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'autor atualizado com sucesso'});
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha na requisicao`});
        }
    };
    static async deletaautor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: 'autor deletado com sucesso'});
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha na requisicao`});
        }
    };
};