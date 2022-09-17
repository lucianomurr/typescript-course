#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

//prendiamo tutti i parametri in ingresso
yargs(hideBin(process.argv))
  // qui ci saranno tutti i nostri comandi
  .commandDir('commands')
  // alias di utility
  .alias({ h: 'help' })
  .argv;