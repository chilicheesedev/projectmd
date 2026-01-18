const { execSync } = require('child_process');

function isGitRepo() {
  try {
    execSync('git rev-parse --git-dir', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function getCurrentBranch() {
  try {
    return execSync('git branch --show-current', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}

function getLastCommitShort() {
  try {
    return execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}

function isDirty() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    return status.length > 0;
  } catch {
    return false;
  }
}

function getRecentCommits(n = 3) {
  try {
    const output = execSync(`git log --oneline -${n}`, { encoding: 'utf-8' });
    return output.trim().split('\n');
  } catch {
    return [];
  }
}

module.exports = {
  isGitRepo,
  getCurrentBranch,
  getLastCommitShort,
  isDirty,
  getRecentCommits
};
