/*jshint node:true */

"use strict";

var fs   = require("fs"),
    path = require("path"),

    async  = require("async"),
    glob   = require("glob"),
    cssmin = require("ycssmin");

module.exports = function(config, done) {
    var files = glob.sync("*.css", { cwd : config.cwd });
    
    files = files.map(function(file) {
        return path.resolve(path.join(config.cwd, file));
    });
    
    async.each(
        files,
        function(file, cb) {
            var css;

            async.series(
                [
                    function readFile(callback) {
                        fs.readFile(file, { encoding : "utf8" }, function(err, result){
                            if(err) {
                                return callback(err);
                            }

                            css = result;

                            callback();
                        });
                    },
                    function compressFile(callback) {
                        try {
                            css = cssmin(css);
                        } catch(e) {
                            return callback(e);
                        }

                        callback();
                    },
                    function writeFile(callback) {
                        fs.writeFile(file, css, callback);
                    }
                ],
                cb
            );
        },
        done
    );
};

module.exports.description = "Compress *.css files";
