var clienteController = require("../controllers/clienteController");

module.exports = function (app) {
    app.get("/contato", function (req, res) {
        res.render("site/contato");
    });

    app.get("/", function (req, res) {
        clienteController.index(req, res);
    });

    app.post("/", function (req, res) {
        clienteController.store(req, res);
    });

    app.get("/detalhe/:id", function (req, res) {
        console.log(req.params.id);
        clienteController.show(req, res);
    });
};
