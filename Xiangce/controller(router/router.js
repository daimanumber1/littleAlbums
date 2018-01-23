const fs = require('fs');
const file = require('../model/file.js');
const formidable = require('formidable');
const path = require('path');

module.exports.showIndex = (req, res, next) => {
    file.getAllAlbums().then((data) => {
        res.render('index', {
            albums: data
        });
    })
};
// async(req, res, next) => {
//     try {
//         const data = await file.getAllAlbums();
//         console.log(data);
//         console.log(22222);
//         res.render('index', {
//             albums: data
//         });
//     } catch (error) {
//         console.error(error);
//     }

// file.getAllAlbums((err, albums) => {
//     if (err) {
//         next();
//         console.log(4044444444444444444);
//     }
//     res.render('index', {
//         albums: albums
//     });
// })
// };

module.exports.showAlbum = (req, res, next) => {
    let albumPath = req.params.albumName;
    if (albumPath !== 'favicon.ico') {
        file.getAllImagesByAlbumName(albumPath).then((data) => {
            res.render('album', {
                images: data,
                albumName: albumPath
            })
        }, (err) => {
            next();
        });
    }
};

module.exports.upGet = (req, res, next) => {
    file.getAllAlbums().then((data) => {
        res.render('up', {
            albums: data
        })
    })
};

module.exports.upPost = (req, res, next) => {
    let form = new formidable.IncomingForm();
    // form.keepExtensions = true;
    form.uploadDir = __dirname;
    form.parse(req, (err, fields, files) => {
        // console.log(files.tupian.path);
        // console.log(fields.wenjianjia);
        let t = new Date();
        let oldpath = files.tupian.path;
        let extname = path.extname(files.tupian.name);
        let rename = t.getFullYear().toString() + t.getDate().toString() + t.getHours().toString() + t.getMinutes().toString() + extname;
        let newpath = path.join(__dirname, '../uploads', fields.wenjianjia, rename)
        fs.rename(oldpath, newpath, (err) => {
            if (err) {
                throw err
            }
            res.send('改名成功');
        })
    });

}