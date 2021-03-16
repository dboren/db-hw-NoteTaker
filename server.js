const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');

const savedNotes = require('/develop/db/db');


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/develop/public/index.html'));
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/develop/public/notes.html'));
})

app.get('/api/notes', (req, res) => res.json(savedNotes));

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });