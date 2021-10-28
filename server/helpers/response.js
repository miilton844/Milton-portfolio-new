
class Response {
    constructor(isSuccess = true, data = {}, errMessage = "",) {
        this.isSuccess = isSuccess;
        this.data = data;
        this.errMessage = errMessage;
    }
}

module.exports = Response;