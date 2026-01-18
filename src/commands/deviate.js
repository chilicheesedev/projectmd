const readline = require('readline');
const { readProjectFile, writeProjectFile } = require('../utils/parser');

async function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    });
  });
}

async function deviate() {
  console.log('Adding a deviation from the original plan:\n');
  
  const planned = await prompt('What was originally planned? ');
  const actual = await prompt('What did you do instead? ');
  const why = await prompt('Why did you change direction? ');
  
  if (!planned || !actual) {
    console.error('Planned and actual are required.');
    process.exit(1);
  }
  
  const content = readProjectFile();
  const today = new Date().toISOString().split('T')[0];
  
  // Find deviations table
  const tableHeader = '| Date | Original Plan | What We Did Instead | Why |';
  const tableIndex = content.indexOf(tableHeader);
  
  if (tableIndex === -1) {
    console.error('Deviations table not found in PROJECT.md');
    process.exit(1);
  }
  
  // Find end of table header row (after |---|---|---|---|)
  const separatorIndex = content.indexOf('|---', tableIndex);
  const insertIndex = content.indexOf('\n', separatorIndex) + 1;
  
  const newRow = `| ${today} | ${planned} | ${actual} | ${why || '-'} |\n`;
  
  const newContent = 
    content.slice(0, insertIndex) + 
    newRow + 
    content.slice(insertIndex);
  
  writeProjectFile(newContent);
  console.log('\n✓ Deviation added');
}

module.exports = { deviate };
