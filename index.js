#!/usr/bin/env node
console.log('lol');

const chokidar = require('chokidar');

chokidar.watch('.').on('all', (event,path)=>{
    console.log(event, path);
});