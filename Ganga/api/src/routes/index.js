const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const user = require("./userRouting.js");
const product = require("./productRouting.js");
const review = require("./reviewRouting.js");
const payment = require("./paymentRouting.js");
const order = require("./orderRouting.js");
const category = require("./categoryRouting.js");
const subCategory = require("./subCategoryRouting.js");
const loginGoogle = require("./loginGoogleRouting")
const localLogin = require("./localLoginRouting")
const sessionActive  = require('./sessionActiveRouting');
const cart  = require('./cartRouting.js');
const userMessage = require("./userMessageRouting");
const newsletter = require('./newsletter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/user", user);
router.use("/product", product);
router.use("/review", review);
router.use("/payment", payment);
router.use("/order", order);
router.use("/category", category);
router.use("/subcategory", subCategory);
router.use("/loginGoogle",loginGoogle)
router.use("/sessionActive",sessionActive)
router.use("/localLogin",localLogin)
router.use("/cart", cart)
router.use("/userMessage", userMessage)
router.use('/newsletter', newsletter);

module.exports = router;
