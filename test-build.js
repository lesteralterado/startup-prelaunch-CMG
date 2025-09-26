const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Running test build...');

try {
  // Run the build
  execSync('npm run build', { stdio: 'inherit' });

  // Check if dist directory exists
  if (fs.existsSync('dist')) {
    console.log('✓ Build successful - dist directory created');

    // Check for main files
    const mainHtml = path.join('dist', 'index.html');
    if (fs.existsSync(mainHtml)) {
      console.log('✓ Main index.html exists in dist');
    } else {
      console.log('✗ Main index.html missing in dist');
    }

    // Check for CSS
    const cssFiles = fs.readdirSync('dist').filter(file => file.endsWith('.css'));
    if (cssFiles.length > 0) {
      console.log(`✓ CSS files found: ${cssFiles.join(', ')}`);
    } else {
      console.log('✗ No CSS files found in dist');
    }
  } else {
    console.log('✗ Build failed - dist directory not created');
  }
} catch (error) {
  console.error('✗ Build failed with error:', error.message);
  process.exit(1);
}

console.log('Test build completed.');