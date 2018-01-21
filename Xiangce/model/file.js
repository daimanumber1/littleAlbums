const fs = require('fs');
const path = require('path');

module.exports.getAllAlbums = function () {
    let a = path.join(__dirname, '../uploads');
    return new Promise((resolve) => {
        fs.readdir(a, (err, files) => {
            if (err) throw err;
            resolve(files);
        })
    })

    // fs.readdir(a, (err, files) => {
    //     if (err) throw err;
    //     console.log(files);
    //     console.log(callback)
    //     callback(null, files);

    // });
}