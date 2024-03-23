const xmlbuilder = require('xmlbuilder');

class Protection { // §18.8.1 protection (Protection)
    /**
     * @class Protection
     * @param {Object} opts Properties of Protection object
     * @param {Boolean} opts.hidden Indicates if text should be shrunk to fit into cell
     * @param {Boolean} opts.locked States whether text with newline characters should wrap
     * @returns {Protection}
     */
    constructor(opts) {

        if (opts.hidden !== undefined) {
            if (typeof opts.hidden === 'boolean') {
                this.hidden = opts.hidden;
            } else {
                throw new TypeError('hidden protection option must be of type boolean');
            }
        }

        if (opts.locked !== undefined) {
            if (typeof opts.locked === 'boolean') {
                this.locked = opts.locked;
            } else {
                throw new TypeError('locked protection option must be of type boolean');
            }
        }
    }

    /** 
     * @func Protection.toObject
     * @desc Converts the Protection instance to a javascript object
     * @returns {Object}
     */
    toObject() {
        let obj = {};

        this.hidden !== undefined ? obj.hidden = this.hidden : null;
        this.locked !== undefined ? obj.locked = this.locked : null;

        return obj;
    }

    /**
     * @alias Protection.addToXMLele
     * @desc When generating Workbook output, attaches style to the styles xml file
     * @func Protection.addToXMLele
     * @param {xmlbuilder.Element} ele Element object of the xmlbuilder module
     */
    addToXMLele(ele) {
        let thisEle = ele.ele('protection');
        this.hidden === true ? thisEle.att('hidden', 1) : null;
        this.locked === true ? thisEle.att('locked', 1) : null;
    }
}

module.exports = Protection;