import * as mustache from 'mustache'

/**
 * class Tlt allows templates to be used with different sets of data
 */
export class Tlt {
    templateString: string

    /**
     * constructor of class Tlt
     */
    constructor(templateStringArg: string) {
        this.templateString = templateStringArg
    }

    /**
     * returns template string with data applied
     */
    applyData(data: any): string {
        return mustache.render(this.templateString, data)
    }

    /**
     * set a new template string
     */
    setTemplate(templateStringArg: string) {
        this.templateString = templateStringArg
    }
}
