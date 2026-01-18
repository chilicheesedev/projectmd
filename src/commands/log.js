const { readProjectFile, writeProjectFile } = require('../utils/parser');

function log(message) {
  const content = readProjectFile();
  
  const today = new Date().toISOString().split('T')[0];
  const logEntry = `\n### ${today}\n- ${message}\n`;
  
  // Find Session Log section and prepend new entry after header
  const sessionLogHeader = '## 📓 Session Log';
  const headerIndex = content.indexOf(sessionLogHeader);
  
  if (headerIndex === -1) {
    console.error('Session Log section not found in PROJECT.md');
    process.exit(1);
  }
  
  // Find the end of the header line (including the blockquote if present)
  let insertIndex = content.indexOf('\n\n###', headerIndex);
  if (insertIndex === -1) {
    // No existing entries, find end of header description
    insertIndex = content.indexOf('\n\n', headerIndex + sessionLogHeader.length);
  }
  
  if (insertIndex === -1) {
    insertIndex = content.indexOf('\n', headerIndex) + 1;
  }
  
  // Check if there's a blockquote description, skip it
  const afterHeader = content.substring(headerIndex);
  const blockquoteMatch = afterHeader.match(/## 📓 Session Log\n\n> [^\n]+\n/);
  if (blockquoteMatch) {
    insertIndex = headerIndex + blockquoteMatch[0].length;
  }
  
  const newContent = 
    content.slice(0, insertIndex) + 
    logEntry + 
    content.slice(insertIndex);
  
  writeProjectFile(newContent);
  console.log(`✓ Added log entry for ${today}`);
}

module.exports = { log };
