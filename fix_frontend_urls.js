const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'front/src');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('https://laudinho.cleversystems.net') && !filePath.includes('config.ts')) {
    // Check how many levels deep we are to import config correctly
    const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, 'front/src/config'));
    let importPath = relativePath.startsWith('.') ? relativePath : './' + relativePath;
    // ensure forward slashes
    importPath = importPath.replace(/\\/g, '/');
    if (!importPath.endsWith('.ts')) {
        // usually import without extension
    }

    if (!content.includes('API_BASE_URL')) {
        content = `import { API_BASE_URL } from '${importPath}';\n` + content;
    }
    
    content = content.replace(/"https:\/\/laudinho\.cleversystems\.net([^"]*)"/g, '`${API_BASE_URL}$1`');
    content = content.replace(/'https:\/\/laudinho\.cleversystems\.net([^']*)'/g, '`${API_BASE_URL}$1`');
    content = content.replace(/`https:\/\/laudinho\.cleversystems\.net([^`]*)`/g, '`${API_BASE_URL}$1`');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js')) {
      replaceInFile(fullPath);
    }
  }
}

processDirectory(directoryPath);
