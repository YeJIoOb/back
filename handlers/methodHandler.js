"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../_http/http");
const container_1 = require("../container");
/**
 * @wahtItDoes holds all information about the method of a controller
 */
class MethodHandler {
    constructor() {
        this.hasResponseBodyDecorator = false;
        this.requestBodyParams = [];
    }
    call(req, res, next) {
        let controller = container_1.Container.get(this.controller);
        let method = controller[this.methodName];
        let paramsValues = this.getparamsValues(req, res);
        let dataToBeSent = method.call(controller, ...paramsValues);
        if (this.hasResponseBodyDecorator) {
            this.sendData(res, dataToBeSent);
        }
    }
    getparamsValues(req, res) {
        let paramsValues = [];
        for (let i = 0; i < this.paramsNames.length; i++) {
            paramsValues[i] = this.getParamValue(this.paramsNames[i], this.paramsTypes[i], req, res);
        }
        return paramsValues;
    }
    getParamValue(paramName, paramType, req, res) {
        if (this.requestBodyParams[paramName]) {
            return req.body;
        }
        else if (paramType === http_1.Request) {
            return req;
        }
        else if (paramType === http_1.Response) {
            return res;
        }
        else {
            return req.params[paramName] || req.body[paramName] || req.query[paramName];
        }
    }
    sendData(res, data) {
        if (data instanceof Promise) {
            data.then((dataToBeSent) => {
                res.json(dataToBeSent);
            });
        }
        else {
            res.json(data);
        }
    }
    isRequest(param) {
        return param.baseUrl !== undefined && param.method !== undefined;
    }
    isResponse(param) {
        return param.send !== undefined && param.end !== undefined;
    }
}
exports.MethodHandler = MethodHandler;
