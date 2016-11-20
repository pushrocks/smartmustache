"use strict";
const mustache = require("mustache");
/**
 * class Tlt allows templates to be used with different sets of data
 */
class Tlt {
    /**
     * constructor of class Tlt
     */
    constructor(templateStringArg) {
        this.templateString = templateStringArg;
    }
    /**
     * returns template string with data applied
     */
    applyData(data) {
        return mustache.render(this.templateString, data);
    }
    /**
     * set a new template string
     */
    setTemplate(templateStringArg) {
        this.templateString = templateStringArg;
    }
}
exports.Tlt = Tlt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQW9DO0FBRXBDOztHQUVHO0FBQ0g7SUFHSTs7T0FFRztJQUNILFlBQVksaUJBQXlCO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsaUJBQWlCLENBQUE7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUyxDQUFDLElBQVM7UUFDZixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVcsQ0FBQyxpQkFBeUI7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQTtJQUMzQyxDQUFDO0NBQ0o7QUF2QkQsa0JBdUJDIn0=