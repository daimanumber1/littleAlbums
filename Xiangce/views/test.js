const express = require('express');
const fs = require('fs');
let app = express();

app.set('views', '../views');
app.set('view engine', 'ejs');
app.use(express.static('../public'));
app.use(express.static('../views'));
console.log(3);

app.get('/', (req, res) => {
    res.render('./index', {
        albums: ['小狗', '小猫', '小强']
    });
    console.log(1);

});
console.log(1);
app.listen(3000, () => {
    console.log('test')
});