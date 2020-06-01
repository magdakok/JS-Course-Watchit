#!/usr/bin/env node

const chokidar = require('chokidar');
let firstRun = true;
if (firstRun) {
    chokidar.watch('.')
    .on('add', (event, path)=>{
        console.log('file added ' + event)
    })
    .on('change', (event, path)=>{
        console.log('file changed ' + event)
    })
    .on('unlink', (event, path)=>{
        console.log('file unlinked ' + event)
    }); 

    firstRun = false;
}

