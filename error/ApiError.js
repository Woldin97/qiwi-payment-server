class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static setBadRequest(message) {
        return new ApiError(404, message);
    }

    static setInternalError(message) {
        return new ApiError(500, message);
    }
}

module.exports = ApiError;