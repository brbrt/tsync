var path = require('path');
var winston = require('winston');

var config = require('./config.js');

module.exports = initLogger();

function initLogger() {
    var winstonConfig = {
        transports: [
            new (winston.transports.Console)({ 
                level: 'debug' 
            }),
            new (winston.transports.File)({ 
                filename: path.join(config('workingdir'), 'tsync.log')
            })
        ]
    };

    return new (winston.Logger)(winstonConfig);
}

