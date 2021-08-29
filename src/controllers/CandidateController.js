const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { name, cargo, datanas, estadoc, gender, cep, logradouro, numero, bairro, 
            localidade, uf, email, identidade, cpf, vehiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();

        newCandidate.name = name;
        newCandidate.cargo = cargo;
        newCandidate.datanas = datanas;
        newCandidate.estadoc = estadoc;
        newCandidate.gender = gender;
        newCandidate.cep = cep;
        newCandidate.logradouro = logradouro;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.localidade = localidade;
        newCandidate.uf = uf;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.vehiculo = vehiculo;
        newCandidate.habilitacao = habilitacao;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro! Tente novamente!');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};