"use strict";
var user = (function () {
    function user() {
    }
    return user;
}());
exports.user = user;
var registerModel = (function () {
    function registerModel(success, message) {
        this.success = success;
        this.message = message;
    }
    return registerModel;
}());
exports.registerModel = registerModel;
var authenticateModel = (function () {
    function authenticateModel(success, message) {
        this.success = success;
        this.message = message;
    }
    return authenticateModel;
}());
exports.authenticateModel = authenticateModel;
//# sourceMappingURL=user.js.map