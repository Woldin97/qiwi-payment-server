const Router = require("express");
const router = new Router();
const OrderController = require('../controllers/OrderController');
const createOrderMiddleware = require("../middleware/createOrderMiddleware");

router.post("/create", createOrderMiddleware, OrderController.create);
router.get("/", OrderController.getOrder);
router.post("/cancel", OrderController.cancel)

module.exports = router;