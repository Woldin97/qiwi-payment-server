const Router = require("express");
const router = new Router();
const orderController = require('../controllers/orderController');
const createOrderMiddleware = require("../middleware/createOrderMiddleware");

router.post("/create", createOrderMiddleware, orderController.create);
router.get("/", orderController.getOrder);
router.post("/cancel", orderController.cancel)

module.exports = router;