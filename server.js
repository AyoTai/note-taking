// Dependencies
const { query } = require('express');
const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3001;



// Middleware
// Sets up the Express App
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.get('/notes'), (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
};

app.get('/api/notes'), (req, res) => {
    fs.readFile(path.join(__dirname,'./db/db.json'), (err, data) => {
        if(err) {
            res.status(500);
        }
        res.json(JSON.parse(data));
    });
};

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});