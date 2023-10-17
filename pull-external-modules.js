const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dirPath = 'external-modules';

// Check if directory exists
if (fs.existsSync(dirPath)) {
    const directories = fs.readdirSync(dirPath).filter(file => {
        return fs.statSync(path.join(dirPath, file)).isDirectory();
    });

    directories.forEach(dir => {
        console.log(`Pulling latest changes in ${dir}...`);
        try {
            execSync('git pull origin main', {
                cwd: path.join(dirPath, dir), // Set the current working directory to the child folder
                stdio: 'inherit' // Inherit the stdio to see the command output in the terminal
            });
            console.log(`Pulled latest changes in ${dir} successfully!\n`);
        } catch (error) {
            console.error(`Error pulling changes in ${dir}: ${error.message}`);
        }
    });
} else {
    console.error(`Directory "${dirPath}" does not exist.`);
}
