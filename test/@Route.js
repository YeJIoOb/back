"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const request = require("supertest");
const assert = require("assert");
require("mocha");
const bodyParser = require("body-parser");
describe("@Route", () => {
    it("should return value", done => {
        index_1.Back.reset();
        let ProductController = class ProductController {
            constructor() { }
            someMethod(req, res) {
                res.end("done");
            }
        };
        __decorate([
            index_1.Get("/"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [index_1.Request, index_1.Response]),
            __metadata("design:returntype", void 0)
        ], ProductController.prototype, "someMethod", null);
        ProductController = __decorate([
            index_1.Controller,
            index_1.Route("/product"),
            __metadata("design:paramtypes", [])
        ], ProductController);
        let app = index_1.Back.express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        index_1.Back.prepare(app);
        request(app)
            .get("/product")
            .expect("done", done);
    });
    it("should return value", done => {
        index_1.Back.reset();
        let ProductController = class ProductController {
            constructor() { }
            otherMethod(req, res) {
                res.end("done");
            }
        };
        __decorate([
            index_1.Get("/deals/"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [index_1.Request, index_1.Response]),
            __metadata("design:returntype", void 0)
        ], ProductController.prototype, "otherMethod", null);
        ProductController = __decorate([
            index_1.Controller,
            index_1.Route("/product"),
            __metadata("design:paramtypes", [])
        ], ProductController);
        let app = index_1.Back.express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        index_1.Back.prepare(app);
        request(app)
            .get("/product/deals")
            .expect("done", done);
    });
});
