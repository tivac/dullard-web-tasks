/*jshint node:true */

"use strict";

var fs     = require("fs"),
    assert = require("assert"),

    _      = require("lodash");

_.extend(assert, {
    filesEqual : function(file1, file2) {
        assert.equal(
            fs.readFileSync(file1, { encoding : "utf8" }),
            fs.readFileSync(file2, { encoding : "utf8" }),
            file1 + " did not match " + file2
        );
    }
});

module.exports = assert;