const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');

//let savedNotes = require('/develop/db/db');

//routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => res.json(savedNotes));

app.post('/api/notes', (req, res) => {
    savedNotes.push(req.body);
})
// End of routing

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });