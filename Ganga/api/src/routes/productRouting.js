const { Router } = require("express");
const router = Router();
const {
    postProduct,
    putProduct,
    deleteProduct,
    allProducts,
    productInfo,
    updateProduct,
    updateProduct2
 } = require("../controllers/productController.js");

router.post("/", postProduct);
router.put("/", putProduct);
router.delete("/", deleteProduct);
router.get("/", allProducts);
router.get("/info", productInfo);
router.post("/update", updateProduct);
router.post("/update2", updateProduct2);


module.exports = router;
