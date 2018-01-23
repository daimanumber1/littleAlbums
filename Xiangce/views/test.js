// const express = require('express');
// const fs = require('fs');
// let app = express();

// app.set('views', '../views');
// app.set('view engine', 'ejs');
// app.use(express.static('../public'));
// app.use(express.static('../views'));
// console.log(3);

// app.get('/', (req, res) => {
//     res.render('./index', {
//         albums: ['小狗', '小猫', '小强']
//     });
//     console.log(1);

// });
// console.log(1);
// app.listen(3000, () => {
//     console.log('test')
// });
const fs = require('fs');
const path = require('path');

var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

http.createServer(function (req, res) {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.uploadDir = '../views';
        form.keepExtensions = true;

        form.parse(req, function (err, fields, files) {
            res.writeHead(200, {
                'content-type': 'text/plain'
            });

            let t = new Date();
            let oldpath = files.upload.path;
            let newpath = __dirname + '|' + t.getFullYear() + '|' + t.getDate() + '|' + t.getHours() + '|' + t.getMinutes() + '|';
            console.log(oldpath);
            console.log(newpath);

            res.write('received upload:\n\n');
            console.log(files);
            console.log(fields);
            res.end(util.inspect({
                fields: fields,
                files: files
            }));
        });


        // fs.rename(oldpath,newpath)

        return;
    }

    // show a file upload form
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title"><br>' +
        '<input type="file" name="upload" multiple="multiple"><br>' +
        '<input type="submit" value="Upload">' +
        '</form>'
    );
}).listen(8080);


// let a = {
//     upload: File {
//         domain: null,
//         _events: {},
//         _eventsCount: 0,
//         _maxListeners: undefined,
//         size: 1750,
//         path: '..\\views\\upload_65c901847a0b91108b0a158f5bca87f1.png',
//         name: '2015092310551931183.png',
//         type: 'image/png',
//         hash: null,
//         lastModifiedDate: 2018 - 01 - 23 T06: 44: 17.671 Z,
//         _writeStream: WriteStream {
//             _writableState: [Object],
//             writable: false,
//             domain: null,
//             _events: {},
//             _eventsCount: 0,
//             _maxListeners: undefined,
//             path: '..\\views\\upload_65c901847a0b91108b0a158f5bca87f1.png',
//             fd: null,
//             flags: 'w',
//             mode: 438,
//             start: undefined,
//             autoClose: true,
//             pos: undefined,
//             bytesWritten: 1750,
//             closed: true
//         }
//     }
// }