var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.post("/cadastrarCarro", function (req, res) {
    dadosController.cadastrarCarro(req, res);
});

router.get("/alertasGerais", function (req, res) {
    dadosController.alertasGerais(req, res);
});

router.get("/alertasUltimoMes", function (req, res) {
    dadosController.alertasUltimoMes(req, res);
});
router.get("/alertasNotificacoes", function (req, res){
    dadosController.alertasNotificacoes(req, res);
})

module.exports = router;