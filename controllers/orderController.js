const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk');
const SECRET_KEY = process.env.SECRET_KEY;
const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);

class orderController {
    async create(req, res) {        
        const billId = qiwiApi.generateId();
        const {amount, sucessUrl} = req.body;
        const fields = {
            amount: amount,
            sucessUrl: sucessUrl
        };

        try {
            const order = await qiwiApi.createBill(billId, fields);
            return res.json(order);
        } catch (error) {
            return res.status(error.statusCode).json({message: error.message});
        }        
    }

    async getOrder(req, res) {
        const {billId} = req.query;
        
        try {
            const billInfo = await qiwiApi.getBillInfo(billId);
            return res.json(billInfo);
        } catch (error) {            
            return res.status(error.statusCode).json({message: error.message});
        }        
    }

    async cancel(req, res) {
        const {billId} = req.body;

        try {
            const billInfo = await qiwiApi.cancelBill(billId);
            return res.json(billInfo);
        } catch (error) {            
            return res.status(error.statusCode).json({message: error.message});
        }  
    }
}

module.exports = new orderController();