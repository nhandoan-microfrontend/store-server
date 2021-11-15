"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorModel = exports.MAP_CODE_TO_MESSAGE = void 0;
exports.MAP_CODE_TO_MESSAGE = {
    401: 'Unauthorized',
};
class ErrorModel {
    constructor(code, message) {
        this.code = code;
        this.message = message || exports.MAP_CODE_TO_MESSAGE[code] || '';
    }
}
exports.ErrorModel = ErrorModel;
//# sourceMappingURL=errorHelpers.js.map