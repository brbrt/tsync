var q = require('q');
var spawn = require('child_process').spawn;

var log = require('./log.js');


module.exports = run;

function run(proc, args) {
	log.debug('Running process: ' + proc  + ' '+ args);

	var deferred = q.defer();

    var proc = spawn(proc, args);

	var out = '', err = '';

	proc.stdout.on('data', function onStdOut(data) {
	    out += data;
	});

	proc.stderr.on('data', function onStdErr(data) {
	    err += data;
	});

	proc.on('error', function onError(err) {
		deferred.reject(err);
	});

	proc.on('close', function onClose(code) {
        log.debug('Process returned with code: ' + code);

		if (code === 0) {
            log.debug('Process output is: ' + out);
			deferred.resolve(out);
		} else {
            log.debug('Process error is: ' + err);
			deferred.reject(err);
		}
	});

	return deferred.promise;
}
