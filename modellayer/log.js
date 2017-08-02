'use strict'

var bunyan = require('bunyan');
const fs = require("fs");

const logDir = 'logs';
const env = process.env.NODE_ENV || 'development';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}


var log = bunyan.createLogger({
    name: 'myapp',
    streams: [{
            level: 'info',
            path: './logs/info.log' // log INFO and above to stdout 
        },
        {
            level: 'error',
            type: 'rotating-file',
            path: './logs/foo.log',
            period: '1d', // daily rotation 
            count: 3
        }
    ]
});

exports.logger = log;