const express = require('express');
const path = require('path');

const app = express();

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('pages/home', { active: 'home' });
});

app.get('/program', (req, res) => {
  res.render('pages/program', { active: 'program' });
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀PHYSIQ Fitness running on http://localhost:${PORT}`);
});
