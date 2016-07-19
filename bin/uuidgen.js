#!/usr/bin/env node
(function() {
  'use strict';
  var minimist = require('minimist');
  var uuid = require("uuid");

  function help() {
    console.log('uuidgen usage: uuidgen [-h|-r|-t]\n\r');
    console.log('\t-h: Print this message.');
    console.log('\t-r: Generate a random-based UUID. This method creates a UUID consisting mostly of random bits. It requires that the operating system have a high quality random number generator, such as /dev/random.');
    console.log('\t-t: Generate a time-based UUID. This method creates a UUID based on the system clock plus the system\'s ethernet hardware address, if present.');
    return -1;
  }

  var args = minimist(process.argv.slice(2), {
    alias: {t: 'time', r: 'random', h: 'help',},
    boolean: ['time', 'random', 'help',],
  });

  if (args.help) {
    return help();
  } else if(args.time) {
    console.log(uuid.v1());
  } else {
    console.log(uuid.v4());
  }

}());
