var clienteModel = require("../models/clienteModel")();
// const { body, validationResult } = require("express-validator");

module.exports.index = function (req, res) {
    clienteModel.all(function (erro, resultado) {
        res.render("site/home", { clientes: resultado });
    });
};

module.exports.store = function (req, res) {
    var dados = req.body;

    // req.assert('nome', 'Preencha um nome').notEmpty();
    // body('nome').not().isEmpty();

    // var validacaoErros = req.validationErrors();
    // var validacaoErros = validationResult(req);

    // if (validacaoErros) {
    //     console.log('erro deu erro');
    //     console.log(validacaoErros.array());
    //     return;
    // }

    clienteModel.save(dados, function (erro, resultado) {
        if (!erro) {
            res.redirect("/");
        } else {
            console.log("Erro ao adicionar");
            res.redirect("/");
        }
    });
};

module.exports.show = function (req, res) {
    clienteModel.find(req.params.id, function (erro, resultado) {
        if (resultado[0] && !erro) {
            res.render("site/detalhe", { cliente: resultado[0] });
        } else {
            console.log("Esse cliente não existe");
            res.redirect("/");
        }
    });
};
