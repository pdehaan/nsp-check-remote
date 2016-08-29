#!/usr/bin/env node

const { checkLatest } = require('../index');

const yargs = require('yargs')
  .usage('Usage: $0 --name [string] --formatter [string]')
  .alias('f', 'formatter')
  .alias('n', 'name')
  .default('f', 'default')
  .demand(['name'])
  .argv;

checkLatest(yargs.name, yargs.f)
  .then(({output}) => console.log(output));
