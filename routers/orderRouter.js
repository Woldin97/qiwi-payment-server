const Router = require("express");
const router = new Router();
const orderController = require('../controllers/orderController');

router.post("/create", orderController.create);
router.get("/", orderController.getOrder);
router.post("/cancel", orderController.cancel)

module.exports = router;