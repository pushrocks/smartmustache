"use strict";
const handlebars = require("handlebars");
/**
 * class Tlt allows templates to be used with different sets of data
 */
class Tlt {
    /**
     * constructor of class Tlt
     */
    constructor(templateStringArg) {
        this.template = handlebars.compile(templateStringArg);
    }
    /**
     * returns template string with data applied
     */
    applyData(data) {
        return this.template(data);
    }
    /**
     * set a new template string
     */
    setTemplate(templateStringArg) {
        this.template = handlebars.compile(templateStringArg);
    }
}
exports.Tlt = Tlt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUNBQXdDO0FBRXhDOztHQUVHO0FBQ0g7SUFHRTs7T0FFRztJQUNILFlBQVksaUJBQXlCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVMsQ0FBQyxJQUFTO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVcsQ0FBQyxpQkFBeUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDdkQsQ0FBQztDQUNGO0FBdkJELGtCQXVCQyJ9