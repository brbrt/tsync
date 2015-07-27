var mkdirp = require('mkdirp');

exports.createDirectoryIfNeeded = createDirectoryIfNeeded;

function createDirectoryIfNeeded(dir) {
    mkdirp.sync(dir);
}

