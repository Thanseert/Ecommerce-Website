const express = require('express');

const app = express();

app.get('/api/hello', (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, function(req, res){
    console.log("App running on port 3000");
});