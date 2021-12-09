const { Router } = require("express");
const router = Router();
const {
    successMail,
} = require("../controllers/successMailController.js");

router.post("/", successMail);


module.exports = router;
