const fs = require('fs');
const path = require('path');

const PROJECT_FILE = 'PROJECT.md';

function findProjectFile() {
  const filePath = path.join(process.cwd(), PROJECT_FILE);
  if (!fs.existsSync(filePath)) {
    console.error('PROJECT.md not found. Run "project-md init" first.');
    process.exit(1);
  }
  return filePath;
}

function readProjectFile() {
  const filePath = findProjectFile();
  return fs.readFileSync(filePath, 'utf-8');
}

function writeProjectFile(content) {
  const filePath = path.join(process.cwd(), PROJECT_FILE);
  fs.writeFileSync(filePath, content, 'utf-8');
}

function parseSection(content, sectionHeader) {
  // Find section by header (e.g., "## 📍 Current Reality")
  const regex = new RegExp(`(${escapeRegex(sectionHeader)}[\\s\\S]*?)(?=\\n## |$)`, 'i');
  const match = content.match(regex);
  return match ? match[1] : null;
}

function replaceSection(content, sectionHeader, newSectionContent) {
  const regex = new RegExp(`(${escapeRegex(sectionHeader)}[\\s\\S]*?)(?=\\n## |$)`, 'i');
  return content.replace(regex, newSectionContent + '\n\n');
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getTableValue(content, fieldName) {
  // Matches: | **Field** | value |
  const regex = new RegExp(`\\|\\s*\\*\\*${fieldName}\\*\\*\\s*\\|\\s*([^|]+)\\|`, 'i');
  const match = content.match(regex);
  return match ? match[1].trim() : null;
}

function setTableValue(content, fieldName, newValue) {
  const regex = new RegExp(`(\\|\\s*\\*\\*${fieldName}\\*\\*\\s*\\|\\s*)([^|]+)(\\|)`, 'i');
  return content.replace(regex, `$1${newValue} $3`);
}

module.exports = {
  findProjectFile,
  readProjectFile,
  writeProjectFile,
  parseSection,
  replaceSection,
  getTableValue,
  setTableValue
};
