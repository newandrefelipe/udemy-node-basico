var db = require("../../config/db");

module.exports = function () {
    this.all = function (retorno) {
        var con = db();
        return con.query("select * from clientes", retorno);
    };

    this.find = function (id, retorno) {
        var con = db();
        return con.query("select * from clientes where id = ?", id, retorno);
    };

    this.save = function (dados, retorno) {
        var con = db();

        return con.query("insert into clientes set ?", dados, retorno);
    };

    return this;
};
