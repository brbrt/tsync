#!/usr/bin/env node

var log = require('./log.js');
var dbhandler = require('./db_handler.js');

log.info('Synchronization started.');

dbhandler
    .download()
    .then(success)
    .catch(error)
    ;


function success(data) {
    log.info('Synchronization finished successfully.');
}

function error(err) {
    log.error('Error: ' + err);
    log.info('Synchronization finished with error.');
}

