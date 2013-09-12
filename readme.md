Dullard Web Tasks
=================

Useful web-centric tasks for [Dullard](https://github.com/tivac/dullard)

[![Build Status](https://travis-ci.org/tivac/dullard-web-tasks.png?branch=master)](https://travis-ci.org/tivac/dullard-web-tasks)
[![Packages](https://david-dm.org/tivac/dullard-web-tasks/status.png)](https://david-dm.org/tivac/dullard-web-tasks/)
[![Dev Packages](https://david-dm.org/tivac/dullard-web-tasks/dev-status.png)](https://david-dm.org/tivac/dullard-web-tasks/)

## Planned Tasks ##

* Compress *.js files
* Compress *.css files
* Optimize images
* Rename static assets based on crc32 of contents
* Combine multiple &lt;script&gt; or &lt;link&gt;
* &hellip;

## Usage ##

```
npm install dullard-web-tasks

dullard --dirs="./node_modules/dullard-web-tasks" --list
Available Tasks:
"compress-css"
    source: .../node_modules/dullard-web-tasks/compress-css.js
    description: Find *.css files (under config.public or root) & compress them using ?

"compress-js"
    source: .../node_modules/dullard-web-tasks/compress-js.js
    description: Find *.js files (under config.public or root) & compress them using Uglify2
```
