const fs = require('fs');
const path = require('path');

exports.loadModules = (dir) => {
    const currentDirectory = path.resolve(__dirname, `../${dir}`);
    const allFilesInDir = fs.readdirSync(currentDirectory);
    switch (dir) {
        default:
            allFilesInDir.forEach(file => {
                if (file === 'index.js') {
                    return;
                }
                require(`../${dir}/${file}`)
            });
            break;
    }
}