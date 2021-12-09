const { Router } = require("express");
const router = Router();
const {
    mercadoPagoPost2,
} = require("../controllers/mercadoPagoController2");

router.post("/", mercadoPagoPost2);


module.exports = router;
