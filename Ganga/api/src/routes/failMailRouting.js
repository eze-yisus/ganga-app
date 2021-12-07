const { Router } = require("express");
const router = Router();
const {
    failMail,
} = require("../controllers/failMailController.js");

router.post("/", failMail);


module.exports = router;
