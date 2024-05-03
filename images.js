/* make a database of images */

const fs = require('fs');

const directory = "./public/kikuri";

function generate() {
    const files = fs.readdirSync(directory);

    let images = [];

    files.forEach((file) => {
        images.push(file);
    })

    return images
}

console.log(generate());