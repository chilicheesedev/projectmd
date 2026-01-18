const { readProjectFile, writeProjectFile, setTableValue } = require('../utils/parser');
const { isGitRepo, getCurrentBranch, isDirty } = require('../utils/git');

function sync() {
  if (!isGitRepo()) {
    console.log('Not a git repository. Skipping git sync.');
    return;
  }
  
  let content = readProjectFile();
  let updated = [];
  
  // Update branch
  const branch = getCurrentBranch();
  if (branch) {
    content = setTableValue(content, 'Active Branch', `\`${branch}\``);
    updated.push(`Branch: ${branch}`);
  }
  
  // Update last session date
  const today = new Date().toISOString().split('T')[0];
  content = setTableValue(content, 'Last Session', today);
  updated.push(`Last Session: ${today}`);
  
  writeProjectFile(content);
  
  console.log('✓ Synced PROJECT.md');
  updated.forEach(u => console.log(`  - ${u}`));
  
  if (isDirty()) {
    console.log('\n⚠ Working directory has uncommitted changes');
  }
}

module.exports = { sync };
