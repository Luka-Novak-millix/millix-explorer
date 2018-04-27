/*jslint node: true */
"use strict";
var check_daemon = require('millixcore/check_daemon.js');

check_daemon.checkDaemonAndRestart('node explorer.js', 'node explorer.js > log');

