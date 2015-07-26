#!/usr/bin/env node

var log = require('./log.js');
var runprocess = require('./runprocess.js');

log.info('Synchronization started.');

runprocess('ls', ['-la'])
    .then(success)
    .catch(error)
    ;


function success(data) {
    log.info('Data: ' + data);
    log.info('Synchronization finished successfully.');
}

function error(err) {
    log.error('Error: ' + err);
    log.info('Synchronization finished with error.');
}

