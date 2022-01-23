const fs = require('fs');
const sharp = require('sharp');
const process = require('process');

(async function() {
    const DIRECTORY = "./processed";

    if (!fs.existsSync(DIRECTORY)) {
        fs.mkdir(DIRECTORY, ()=>{
            console.log('directory created')
        });
    }
    
    await fs.promises.readdir(process.argv[2]).forEach((value) => {
        const image = sharp(value);
        image.metadata().then((metadata) => {
            if (metadata.width > 1200) {
                const newName = DIRECTORY + '/processed-' + value;
                image.resize(1200, 900).toFile(newName.toLowerCase());
            }
        })
    });
})()
