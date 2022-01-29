const express = require('express');
const bodyParser = require('body-parser')

const api = express();
api.use(express.static(__dirname + "/"));
api.use(bodyParser.json());

api.listen(5000, () => {
    console.log("API up and running (http://localhost:5000)");
});

// api.get("/", (req, res) => {
//     console.log(req);
//     res.send('Hello World');
// });

api.post("/add", (req, res) => {
    console.log(req.body);
    res.send("It works");
});
