import { ControllerHandler } from "./handlers/controllerHandler";
import "reflect-metadata";
/**
 * @whatItDoes holds all the components (controllers, services, ...) and instances
 */
export declare class Container {
    /**
     * Array of components , each component holds its function constructor
     * and its dependencies
     */
    static components: any;
    /**
     * see ../handlers/controllerHandler.ts
     */
    static controllerHandlers: ControllerHandler[];
    /**
     * each component (service ,controller,...) instansiated will be pushed here
     */
    static instances: any[];
    /**
     * get an instance of the component
     */
    static get(token: string | Function): any;
}
