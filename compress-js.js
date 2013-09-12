/*jshint node:true */

"use strict";

var fs   = require("fs"),
    path = require("path"),

    glob   = require("glob"),
    uglify = require("uglify-js");

module.exports = function(config) {
    var files = glob.sync("*.js", { cwd : config.cwd });
    
    files = files.map(function(file) {
        return path.resolve(path.join(config.cwd, file));
    });
    
    files.forEach(function(file) {
        var result = uglify.minify(file);
        
        fs.writeFileSync(file, result.code);
    });
};

module.exports.description = "Compress *.js files";
