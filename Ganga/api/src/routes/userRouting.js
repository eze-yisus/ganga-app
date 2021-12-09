const { Router } = require("express");
const router = Router();
const {
  postUser,
  putUser,
  deleteUser,
  allUsers,
  userInfo,
  addCart,
  clearCart,
  deleteProduct
 } = require("../controllers/userController.js");

router.post("/", postUser);
router.put("/", putUser);
router.delete("/", deleteUser);
router.get("/", allUsers);
router.get("/info", userInfo);
router.post("/addCart", addCart);
router.put('/clearCart', clearCart)
router.put('/deleteProduct', deleteProduct)


module.exports = router;
