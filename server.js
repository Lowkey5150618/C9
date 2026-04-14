const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// Mock data for history and bookmarks
let history = [];
let bookmarks = [];

// Fetch bookmarks
app.get('/bookmarks', (req, res) => {
    res.json(bookmarks);
});

// Add a bookmark
app.post('/bookmarks', (req, res) => {
    const { url, title } = req.body;
    bookmarks.push({ url, title });
    res.status(201).json({ message: 'Bookmark added!' });
});

// Search bookmarks
app.get('/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = bookmarks.filter(b => b.title.toLowerCase().includes(query));
    res.json(results);
});

// Fetch browsing history
app.get('/history', (req, res) => {
    res.json(history);
});

// Add to browsing history
app.post('/history', (req, res) => {
    const { url, title } = req.body;
    history.push({ url, title, dateVisited: new Date() });
    res.status(201).json({ message: 'History recorded!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});