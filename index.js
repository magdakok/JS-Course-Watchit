#!/usr/bin/env node

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');

const start = debounce(()=>{
    console.log('Starting using program!');
}, 200);

    chokidar.watch('.')
    .on('add', start)
    .on('change', (event, path)=>{
        console.log('file changed ' + event)
    })
    .on('unlink', (event, path)=>{
        console.log('file unlinked ' + event)
    }); 
 