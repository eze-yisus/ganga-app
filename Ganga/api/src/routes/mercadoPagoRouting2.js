const { Router } = require("express");
const router = Router();
const {
    mercadoPagoPost,
} = require("../controllers/mercadoPagoController");

router.post("/", mercadoPagoPost);


module.exports = router;
