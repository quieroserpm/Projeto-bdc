const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: false },
    datanas: { type: String, unique: false, required: true },
    estadoc: { type: String, unique: false, required: false },
    gender: { type: String, unique: false, required: false },
    cep: { type: String, unique: false, required: true }, 
    logradouro: { type: String, unique: false, required: true }, 
    numero: { type: String, unique: false, required: true }, 
    bairro: { type: String, unique: false, required: true }, 
    localidade: { type: String, unique: false, required: true }, 
    uf: { type: String, unique: false, required: true }, 
    email: { type: String, unique: false, required: true },
    identidade: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    vehiculo: { type: String, unique: false, required: false }, 
    habilitacao: { type: String, unique: false, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);