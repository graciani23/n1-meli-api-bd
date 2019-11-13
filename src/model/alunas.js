const mongoose = require('mongoose');

const AlunasSchema = new mongoose.Schema({
    nome: { type: String},
    dateOfBirth: { type: Date },
    nasceuEmSp: { type: String },
    livros: [{
        titulo: String,
        leu: String
    }]
})

const Alunas = mongoose.model('Alunas', AlunasSchema);

module.exports = Alunas

// exemplo de schema com campos obrigatórios
// var sampleSchema = new Schema({ name: { type: string, required: true}})

