var winston = require('winston');

module.exports = initLogger();

function initLogger() {
    var config = {
        transports: [
            new (winston.transports.Console)({ 
                level: 'debug' 
            }),
            new (winston.transports.File)({ 
                filename: 'somefile.log' // TODO: set this
            })
        ]
    };

    return new (winston.Logger)(config);
}

