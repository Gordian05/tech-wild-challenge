const express = require("express");
const app = express();
const index = require("./routes");
const path = require('path')
const bodyParser = require("body-parser");

require("./database");

if(process.env.NODE === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(index);

app.listen(port);
