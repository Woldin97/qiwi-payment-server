const ApiError = require("../error/ApiError");

module.exports = function (req, res, next) {
    const { amount, successUrl, account, email, phone } = req.body;
    const fields = {
        amount: amount,
        successUrl: successUrl,
        account: account,
        email: email,
        phone: phone
    };
    
    for (let key in fields) {        
        if (!fields[key]) {
            return next(ApiError.setBadRequest(`${key} is empty`));
        }
    }
    next()
}