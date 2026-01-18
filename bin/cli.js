#!/usr/bin/env node

const { program } = require('commander');
const { init } = require('../src/commands/init');
const { log } = require('../src/commands/log');
const { status } = require('../src/commands/status');
const { next } = require('../src/commands/next');
const { deviate } = require('../src/commands/deviate');
const { sync } = require('../src/commands/sync');

program
  .name('project-md')
  .description('The missing context file for AI-assisted development')
  .version('0.2.0');

program
  .command('init')
  .description('Create a new PROJECT.md file')
  .option('--blank', 'Create without prompts')
  .action(init);

program
  .command('log <message>')
  .description('Add a session log entry')
  .action(log);

program
  .command('status <state>')
  .description('Update project status (active, blocked, paused, done)')
  .action(status);

program
  .command('next <task>')
  .description('Update the next step')
  .action(next);

program
  .command('deviate')
  .description('Add a deviation from the original plan')
  .action(deviate);

program
  .command('sync')
  .description('Refresh auto-detectable fields (branch, etc.)')
  .action(sync);

program.parse();