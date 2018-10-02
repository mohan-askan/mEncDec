'use strict';
function mEncDec(str_data){
    this.str = str_data;
    this.ostr = '';
}

mEncDec.prototype.mencrypt = function() {
    if (!this.str) this.str = "";
    this.str = (this.str == "undefined" || this.str == "null") ? "" : this.str;
    try {
        var key = 146;
        var pos = 0;
        this.ostr = '';
        while (pos < this.str.length) {
            this.ostr = this.ostr + String.fromCharCode(this.str.charCodeAt(pos) ^ key);
            pos += 1;
        }

        return this.ostr;
    } catch (ex) {
        return '';
    }
}

mEncDec.prototype.mdecrypt = function() {
    if (!this.str) this.str = "";
    this.str = (this.str == "undefined" || this.str == "null") ? "" : this.str;
    try {
        var key = 146;
        var pos = 0;
        this.ostr = '';
        while (pos < this.str.length) {
            this.ostr = this.ostr + String.fromCharCode(key ^ this.str.charCodeAt(pos));
            pos += 1;
        }

        return this.ostr;
    } catch (ex) {
        return '';
    }
}
