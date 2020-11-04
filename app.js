// create your own server
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// --2-- add public folder de express hieu file css link
app.use(express.static(path.join(__dirname, 'public')));

// add them admin vao route con
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);

// const server = http.createServer(app);
// // keep server listen request from user.
// server.listen(3000);

