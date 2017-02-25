/**
 * class Tlt allows templates to be used with different sets of data
 */
export declare class Tlt {
    template: any;
    /**
     * constructor of class Tlt
     */
    constructor(templateStringArg: string);
    /**
     * returns template string with data applied
     */
    applyData(data: any): string;
    /**
     * set a new template string
     */
    setTemplate(templateStringArg: string): void;
}
