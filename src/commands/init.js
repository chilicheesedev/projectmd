const fs = require('fs');
const path = require('path');

function init(options) {
  const targetPath = path.join(process.cwd(), 'PROJECT.md');
  
  if (fs.existsSync(targetPath)) {
    console.log('PROJECT.md already exists in this directory.');
    process.exit(1);
  }
  
  const templatePath = path.join(__dirname, '../../templates/PROJECT.md');
  fs.copyFileSync(templatePath, targetPath);
  
  console.log('✓ Created PROJECT.md');
  console.log('  Open it and fill in your project details.');
}

module.exports = { init };
