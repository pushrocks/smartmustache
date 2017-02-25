import * as handlebars from 'handlebars'

/**
 * class Tlt allows templates to be used with different sets of data
 */
export class Tlt {
  template: any

  /**
   * constructor of class Tlt
   */
  constructor(templateStringArg: string) {
    this.template = handlebars.compile(templateStringArg)
  }

  /**
   * returns template string with data applied
   */
  applyData(data: any): string {
    return this.template(data)
  }

  /**
   * set a new template string
   */
  setTemplate(templateStringArg: string) {
    this.template = handlebars.compile(templateStringArg)
  }
}
