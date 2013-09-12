/*jshint node:true */

"use strict";

var fs   = require("fs"),
    path = require("path"),

    glob   = require("glob"),
    uglify = require("uglify-js");

module.exports = function(config) {
    var cwd   = config.public || config.cwd,
        files = glob.sync("*.js", { cwd : cwd });
    
    files = files.map(function(file) {
        return path.resolve(path.join(cwd, file));
    });
    
    files.forEach(function(file) {
        var result = uglify.minify(file);
        
        fs.writeFileSync(file, result.code);
    });
};

module.exports.description = "Compress *.js files";
