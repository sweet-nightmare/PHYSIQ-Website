const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', (req, res) => {
    res.render('pages/home', { active: 'home' });
});

app.get('/program', (req, res) => {
    res.render('pages/program', { active: 'program' });
});

module.exports = app;
