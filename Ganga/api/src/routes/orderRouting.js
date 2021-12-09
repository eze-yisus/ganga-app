const { Router } = require("express");
const router = Router();
const {
    postOrder,
    allOrders,
    putOrder,
    deleteOrder,
    getOrderWithUserId
 } = require("../controllers/orderController.js");

router.post("/", postOrder);
router.put("/", putOrder);
router.delete("/", deleteOrder);
router.get("/", allOrders);
router.get("/info", getOrderWithUserId);

module.exports = router;
