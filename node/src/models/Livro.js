import mongoose, { version } from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editora: {type: String, required: true},
    preco: {type: Number},
    paginas: {type: Number},
}, {versionKey: false});

export const livro = mongoose.model('livro', livroSchema);