const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

// http://localhost:3000/add-product --> also go to The "add-product" page
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // console.log('In the next middleware');
    // return html to loading paging
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// --1-- route chuyen ve trang chu
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;
