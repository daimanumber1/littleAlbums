const express = require('express');
const router = require('./controller(router/router.js');
let app = express();
app.set('views','./views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.static('./views'));

//
app.get('/',router.showIndex);
// app.get('/:albumName',router.showAlbum);
// app.get('/up',router.upGet);
// app.post('/up',router.upPost);
app.listen(8080);

