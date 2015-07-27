var config = require('./config.js');
var log = require('./log.js');
var runprocess = require('./runprocess.js');


exports.download = download;


function download() {
    var remote = config('sourcedir');
    var local = config('workingdir');

    log.debug('Downloading ' + remote + ' to ' + local);

    return callDbUploader('-s', 'download', remote, local);
}

function callDbUploader() {
    var dbuploader = config('dbuploader');
    var args = Array.prototype.slice.call(arguments);

    return runprocess(dbuploader, args);
}

