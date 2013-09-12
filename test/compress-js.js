/*jshint node:true */
"use strict";

var assert = require("assert"),
    
    shell  = require("shelljs"),
    
    task   = require("../compress-js.js");

describe("Dullard Web Tasks", function() {
    describe("compress-js task", function() {
        
        afterEach(function() {
            shell.rm("-rf", "./test/working/");
        });
        
        it("should find *.js files in cwd", function() {
            var err, files;
            
            shell.cp("-rf", "./test/specimens/simple/source/*", "./test/working");
            
            err = task({ cwd : "./test/working" });
            
            assert.ifError(err);
            
            files = shell.ls("./test/working/*.js");
            assert.equal(files.length, 1);
            
            // TODO: check that file was compressed correctly by comparing against /simple/result/name.js
        });
        
        it("should find *.js files in cwd + config.public");
        it("should compress files");
        it("should support compression options");
    });
});
