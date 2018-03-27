/// <reference types="express" />
import * as express from "express";
import { Container } from "./container";
export { HttpRequestMethod, Request, Response } from "./_http/http";
export { Controller, Get, Post, Put, Delete, Route, RequestBody, ResponseBody } from "./decorators/decorators";
export { Service } from "./decorators/Service";
export { BackApplication } from "./BackApplication";
export declare class Back {
    static express: typeof express;
    static Container: typeof Container;
    static configs: {
        use: any[];
        set: any;
    };
    static prepare(app: any): void;
    static reset(): void;
    static applyConfigs(app: any): void;
}
