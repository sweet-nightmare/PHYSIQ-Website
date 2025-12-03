const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Physiq Fitness server running on http://localhost:${PORT}`);
});