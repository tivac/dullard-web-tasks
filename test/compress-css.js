/*jshint node:true */
"use strict";

var assert = require("./_assert"),
    
    shell  = require("shelljs"),
    
    task   = require("../compress-css.js");

describe("Dullard Web Tasks", function() {
    describe("compress-css task", function() {
        
        afterEach(function() {
            shell.rm("-rf", "./test/working/");
        });
        
        it("should find *.css files in cwd", function(done) {
            shell.cp("-rf", "./test/specimens/simple/source/*", "./test/working");
            
            task({ cwd : "./test/working" }, function(err) {
                var files;

                assert.ifError(err);
            
                files = shell.ls("./test/working/*.css");
                assert.equal(files.length, 1);    

                done();
            });
        });
        
        it("should find *.css files in cwd + config.public", function(done) {
            shell.cp("-rf", "./test/specimens/simple/source/*", "./test/working");
            
            task({ public : "./test/working" }, function(err) {
                var files;

                assert.ifError(err);
            
                files = shell.ls("./test/working/*.css");
                assert.equal(files.length, 1);



                done();
            });
        });

        it("should compress files", function(done) {
            shell.cp("-rf", "./test/specimens/simple/source/*", "./test/working");
            
            task({ cwd : "./test/working" }, function(err) {
                var files;

                assert.ifError(err);
            
                files = shell.ls("./test/working/*.css");
                assert.equal(files.length, 1);    

                files.forEach(function(file) {
                    assert.filesEqual(file, file.replace("working", "specimens/simple/result"));
                });

                done();
            });
        });

        it("should support compression options");
    });
});
