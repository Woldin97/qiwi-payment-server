const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk');
const ApiError = require('../error/ApiError');
const SECRET_KEY = process.env.SECRET_KEY;
const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);

class OrderController {
    async create(req, res, next) {        
        const billId = qiwiApi.generateId();
        const {amount, successUrl, account, email, phone} = req.body;
        const fields = {
            amount: amount,
            currency: 'RUB',
            successUrl: successUrl,
            account: account,
            email: email,
            phone: phone
        };

        try {
            const order = await qiwiApi.createBill(billId, fields);
            return res.json(order);
        } catch (error) {
            return next(new ApiError(error.statusCode, error.message));
        }        
    }

    async getOrder(req, res, next) {
        const {billId} = req.query;

        if (!billId) {
            return next(ApiError.setBadRequest("billId is empty"));
        }
        
        try {
            const billInfo = await qiwiApi.getBillInfo(billId);
            return res.json(billInfo);
        } catch (error) {          
            return next(new ApiError(error.statusCode, error.message));
        }   
    }

    async cancel(req, res, next) {
        const {billId} = req.body;

        if (!billId) {
            return next(ApiError.setBadRequest("billId is empty"));
        }

        try {
            const billInfo = await qiwiApi.cancelBill(billId);
            return res.json(billInfo);
        } catch (error) {            
            return next(new ApiError(error.statusCode, error.message));
        }  
    }
}

module.exports = new OrderController();