#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const command = process.argv[2];

if (command === 'init') {
  const templatePath = path.join(__dirname, '..', 'templates', 'PROJECT.md');
  const targetPath = path.join(process.cwd(), 'PROJECT.md');
  
  if (fs.existsSync(targetPath)) {
    console.log('PROJECT.md already exists in this directory.');
    process.exit(1);
  }
  
  fs.copyFileSync(templatePath, targetPath);
  console.log('✓ Created PROJECT.md');
  console.log('  Open it and fill in your project details.');
} else {
  console.log('Usage: project-md init');
}