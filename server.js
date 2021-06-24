const { query } = require('express');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;



// Middleware
app.use(express.static('public'));
app.use(express.json());


// Routes
app.get('/notes'), (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
};

pp.get('/api/notes'), (req, res) => {
    fs.readFile(path.join(__dirname,'./db/db.json'), (err, data) => {
        if(err) {
            res.status(500);
        }
        res.json(JSON.parse(data));
    });
};

app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});