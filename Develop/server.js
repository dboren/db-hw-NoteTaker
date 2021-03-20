const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');
const generateUniqueID = require('generate-unique-id');
const db = require('./db/db');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => res.json(db));

app.post('/api/notes', (req, res) => {
    db.push(req.body);
    res.json(db);
});

app.put('/api/notes', (req, res) => {
    req.body.id = generateUniqueID();
    db.push(req.body);
    console.log("req.body:", req.body);
    console.log("ID:", req.body.id);
    res.json(db);
})
// End of routing

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
    console.log('current notes:', db);
  });