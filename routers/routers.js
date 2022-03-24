const Router = require('express');
const router = new Router;
const orderRouter = require("./OrderRouter");

router.use("/order", orderRouter);

module.exports = router;
