import "reflect-metadata";
/**
 * @whatItDoes class Decorator used to mark a class as a controller
 * @howToUse
 * ```
 * @Controller
 * class homeController {
 *  // code here
 * }
 * ```
 */
export declare function Controller(target: Function): void;
export declare function RestController(target: Function): void;
/**
 * @whatItDoes class Decorator used to attach a route to the controller
 * @howToUse
 * ```
 * @Controller
 * @Route("/home")
 * class homeController {
 *  // code here
 * }
 * ```
 */
export declare function Route(route: string): (target: Function) => void;
/**
 * @whatItDoes method decorator indicates the route handled by the method
 * @howToUse
 * ```
 * @Get("/user/:id")
 * getUser(req: Request, res: Response) {
 *  // code here
 * }
 * ```
 * @description
 * the method will handle all the requests of type GET coming from the route
 * specified in its parameter
 */
export declare function Get(route: string): (target: any, methodName: string) => void;
/**
 * @whatItDoes method decorator indicates the route handled by the method
 * @howToUse
 * ```
 * @Post("/user")
 * addUser(req: Request, res: Response) {
 *  // code here
 * }
 * ```
 * @description
 * the method will handle all the requests of type POST coming from the route
 * specified in its parameter
 */
export declare function Post(route: string): (target: any, methodName: string) => void;
/**
 * @whatItDoes method decorator indicates the route handled by the method
 * @howToUse
 * ```
 * @Put("/user")
 * updateUser(req: Request, res: Response) {
 *  // code here
 * }
 * ```
 * @description
 * the method will handle all the requests of type PUT coming from the route
 * specified in its parameter
 */
export declare function Put(route: string): (target: any, methodName: string) => void;
/**
 * @whatItDoes method decorator indicates the route handled by the method
 * @howToUse
 * ```
 * @Delete("/user/:id")
 * deleteUser(req: Request, res: Response) {
 *  // code here
 * }
 * ```
 * @description
 * the method will handle all the requests of type DELETE coming from the route
 * specified in its parameter
 */
export declare function Delete(route: string): (target: any, methodName: string) => void;
/**
 * @whatItDoes parameter decorator indicates that the parameter should be bound
 * to the web request body
 * @howToUse
 * ```
 * @Put("/user")
 * updateUser(req: Request, res: Response, @RequestBody newUser) {
 *  // code here
 * }
 * ```
 * @description
 * the parameter will be bound to the request body
 */
export declare function RequestBody(target: Object, methodName: string, parameterIndex: number): void;
/**
 * @whatItDoes method decorator indicates the return value should be bound
 * to the web response body
 * @howToUse
 * ```
 * @Get("/user/:id")
 * @ResponseBody
 * updateUser(req: Request,id: number): User{
 *  // code here
 *  return new User(125,"jhon",35);
 * }
 * ```
 * @description
 * the return value will be bound to the response body, if the return value
 * is type of Promise the holded value will be sent
 */
export declare function ResponseBody(target: any, methodName: string): void;
