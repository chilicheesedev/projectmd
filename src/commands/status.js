const { readProjectFile, writeProjectFile, setTableValue } = require('../utils/parser');

const STATUS_MAP = {
  'active': '🟢 Active',
  'in-progress': '🟡 In Progress',
  'blocked': '🔴 Blocked',
  'paused': '⚪ Paused',
  'done': '✅ Done'
};

function status(state) {
  const normalizedState = state.toLowerCase();
  
  if (!STATUS_MAP[normalizedState]) {
    console.error(`Invalid status. Use: ${Object.keys(STATUS_MAP).join(', ')}`);
    process.exit(1);
  }
  
  const content = readProjectFile();
  const newContent = setTableValue(content, 'Status', STATUS_MAP[normalizedState]);
  
  writeProjectFile(newContent);
  console.log(`✓ Status updated to: ${STATUS_MAP[normalizedState]}`);
}

module.exports = { status };
