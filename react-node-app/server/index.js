const express = require("express");
const http = require("http");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname,'../client/build')));

app.get('/api/textToSvg',(req, res) => {
    const TextToSVG = require('text-to-svg');
    const textToSVG = TextToSVG.loadSync();
    const attributes = {fill: 'red', stroke: 'black'};
    const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};
    const textToConvert = req.query.name;
    let svg = null;
    if (req.query.name) {
        svg = textToSVG.getSVG(textToConvert, options);
        res.setHeader('Content-Type','image/svg+xml');
        res.status(200).send(svg);
    }
});

/*app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});*/


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});