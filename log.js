var path = require('path');
var winston = require('winston');

var config = require('./config.js');
var util = require('./util.js');

module.exports = initLogger();

function initLogger() {
    var targetDir = path.join(config('workingdir'), 'log');
    util.createDirectoryIfNeeded(targetDir);

    var winstonConfig = {
        transports: [
            new (winston.transports.Console)({ 
                level: 'debug' 
            }),
            new (winston.transports.File)({ 
                filename: path.join(targetDir, 'tsync.log')
            })
        ]
    };

    return new (winston.Logger)(winstonConfig);
}

