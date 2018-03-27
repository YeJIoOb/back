"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function BackApplication(configs) {
    return (target) => {
        index_1.Back.configs = configs;
    };
}
exports.BackApplication = BackApplication;
