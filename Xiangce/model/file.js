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
};
module.exports.getAllImagesByAlbumName = (a) => {
    let b = path.join(__dirname, '../uploads', a);
    // console.log(b+'0000000000000000000000000')
    return new Promise((resolve, reject) => {
        fs.readdir(b, (err, files) => {
            if (err) {
                // console.log('找不到文件夹路径')
                reject('fileError');
                return
            }
            // console.log(files);
            files.forEach((items, index) => {
                files[index] = '/' + a + '/' + items;
            });
            // console.log(files);
            resolve(files);
        })
    })
}