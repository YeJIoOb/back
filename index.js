"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const container_1 = require("./container");
const http_1 = require("./_http/http");
const utils_1 = require("./utils/utils");
var http_2 = require("./_http/http");
exports.HttpRequestMethod = http_2.HttpRequestMethod;
exports.Request = http_2.Request;
exports.Response = http_2.Response;
var decorators_1 = require("./decorators/decorators");
exports.Controller = decorators_1.Controller;
exports.Get = decorators_1.Get;
exports.Post = decorators_1.Post;
exports.Put = decorators_1.Put;
exports.Delete = decorators_1.Delete;
exports.Route = decorators_1.Route;
exports.RequestBody = decorators_1.RequestBody;
exports.ResponseBody = decorators_1.ResponseBody;
var Service_1 = require("./decorators/Service");
exports.Service = Service_1.Service;
var BackApplication_1 = require("./BackApplication");
exports.BackApplication = BackApplication_1.BackApplication;
class Back {
    static prepare(app) {
        Back.applyConfigs(app);
        for (let controller in container_1.Container.controllerHandlers) {
            let controllerHandler = container_1.Container.controllerHandlers[controller];
            let router = express.Router();
            for (let method in controllerHandler.methodsHandlers) {
                let methodHandler = controllerHandler.methodsHandlers[method];
                let _httpRequestMethod = methodHandler.httpRequestMethod;
                let httpRequestMethod = "";
                if (_httpRequestMethod === http_1.HttpRequestMethod.GET) {
                    httpRequestMethod = "get";
                }
                else if (_httpRequestMethod === http_1.HttpRequestMethod.POST) {
                    httpRequestMethod = "post";
                }
                else if (_httpRequestMethod === http_1.HttpRequestMethod.PUT) {
                    httpRequestMethod = "put";
                }
                else {
                    httpRequestMethod = "delete";
                }
                router[httpRequestMethod].call(router, methodHandler.route, (req, res, next) => {
                    methodHandler.call(req, res, next);
                });
            }
            app.use(controllerHandler.route, router);
        }
    }
    // for testing
    static reset() {
        Back.Container.instances = [];
        Back.Container.controllerHandlers = [];
        Back.Container.components = [];
    }
    static applyConfigs(app) {
        Back
            .configs
            .use
            .forEach(middleware => {
            app.use(middleware);
        });
        for (let setting in Back.configs.set) {
            let _setting = utils_1.splitCamelCase(setting).toLocaleLowerCase();
            app.set(_setting, Back.configs.set[setting]);
        }
    }
}
Back.express = express;
Back.Container = container_1.Container;
Back.configs = { use: [], set: {} };
exports.Back = Back;
