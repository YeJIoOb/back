import { Response, Request, HttpRequestMethod } from "../_http/http";
/**
 * @wahtItDoes holds all information about the method of a controller
 */
export declare class MethodHandler {
    route: string;
    methodName: string;
    paramsTypes: any[];
    paramsNames: any[];
    controller: string;
    httpRequestMethod: HttpRequestMethod;
    hasResponseBodyDecorator: boolean;
    requestBodyParams: boolean[];
    call(req?: Request, res?: Response, next?: Function): any;
    getparamsValues(req: Request, res: Response): any[];
    getParamValue(paramName: any, paramType: any, req: Request, res: Response): any;
    sendData(res: Response, data: any): void;
    isRequest(param: any): boolean;
    isResponse(param: any): boolean;
}
