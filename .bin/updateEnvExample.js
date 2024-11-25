const fs = require('fs');
const path = require('path');

// CHANGE IF MOVING THE SCRIPT
const ROOT_DIR = path.join(__dirname, '..');

// Paths
const CONFIG_DIR = path.join(ROOT_DIR, 'config');

// Mapping of repository directories to output filenames
const REPOS = {
    'coordinator-server': '.env.coordinator.example',
    'frontend-discord': '.env.discord.example',
    'dlc-service': '.env.dlc.example',
    'game-server': '.env.game.example',
    'frontend-web': '.env.web.example',
    'cdn-service': '.env.cdn.example',
};

// Ensure the config directory exists
if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR);
}

// Function to remove old files and copy new ones
Object.entries(REPOS).forEach(([repoDir, outputFileName]) => {
    const envExampleFile = path.join(ROOT_DIR, repoDir, '.env.example');
    const outputFilePath = path.join(CONFIG_DIR, outputFileName);

    // Remove the old file if it exists
    if (fs.existsSync(outputFilePath)) {
        fs.unlinkSync(outputFilePath);
        console.log(`Removed old file: ${outputFilePath}`);
    }

    // Copy the .env.example file to the config directory with the new name
    if (fs.existsSync(envExampleFile)) {
        fs.copyFileSync(envExampleFile, outputFilePath);
        console.log(`Copied ${envExampleFile} to ${outputFilePath}`);
    } else {
        console.log(`Warning: ${envExampleFile} not found, skipping.`);
    }
});
