const { readProjectFile, writeProjectFile, setTableValue } = require('../utils/parser');

function next(task) {
  const content = readProjectFile();
  const newContent = setTableValue(content, 'Next Step', task);
  
  writeProjectFile(newContent);
  console.log(`✓ Next step updated: ${task}`);
}

module.exports = { next };
