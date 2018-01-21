const fs = require('fs');
const file = require('../model/file.js');

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


