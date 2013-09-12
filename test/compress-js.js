/*jshint node:true */
"use strict";

var assert = require("./_assert"),
    
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
        });
        
        it("should find *.js files in cwd + config.public", function() {
            var err, files;
            
            shell.cp("-rf", "./test/specimens/simple/source/*", "./test/working");
            
            err = task({ public : "./test/working" });
            
            assert.ifError(err);
            
            files = shell.ls("./test/working/*.js");
            assert.equal(files.length, 1);
        });

        it("should compress files", function() {
            var err, files;
            
            shell.cp("-rf", "./test/specimens/simple/source/*", "./test/working");
            
            err = task({ cwd : "./test/working" });
            
            assert.ifError(err);
            
            files = shell.ls("./test/working/*.js");
            assert.equal(files.length, 1);
            
            files.forEach(function(file) {
                assert.filesEqual(file, file.replace("working", "specimens/simple/result"));
            });
        });

        it("should support compression options");
    });
});
