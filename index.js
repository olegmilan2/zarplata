#!/usr/bin/env node

const { addEntry } = require('./src/commands/addEntry');
const { listEntries } = require('./src/commands/listEntries');
const { totalEntries } = require('./src/commands/totalEntries');
const { setSeason } = require('./src/commands/setSeason');
const { setDefaultPercent } = require('./src/commands/setDefaultPercent');
const { printHelp } = require('./src/help');

const cmd = process.argv[2];

switch (cmd) {
  case 'add':
    addEntry();
    break;
  case 'list':
    listEntries();
    break;
  case 'total':
    totalEntries();
    break;
  case 'set-season':
    setSeason();
    break;
  case 'set-percent':
    setDefaultPercent();
    break;
  default:
    printHelp();
}
