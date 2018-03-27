"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @wahtItDoes holds all information about the controller
 */
class ControllerHandler {
    constructor() {
        /**
         * MethodHandler look methodHandler.ts file
         */
        this.methodsHandlers = [];
        this.isRest = false;
    }
}
exports.ControllerHandler = ControllerHandler;
