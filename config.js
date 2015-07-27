var nconf = require('nconf');


// Wrap nconf.get function.
module.exports = getConfig;

function getConfig(key) {
    return nconf.get(key);
}


// First consider commandline arguments and environment variables, respectively.
nconf.argv().env();


// Provide default values for settings not provided above.
nconf.defaults({
    workingdir: '/tmp/tsync',
    sourcedir: 'torrent-watch',
    filenamepattern: '.*\.torrent$'
    targetdir: '/tmp/target',
    dbuploader: '~/Dropbox-Uploader/dropbox_uploader.sh'
});

