const express = require("express");
const morgan = require("morgan");
const Blockchain = require("./src/blockchain");

const app = express();

app.use(morgan("dev"));
const port = 8080;
require("./routes")(app);

global.difficulty = 3; // Difficulty to mine a particular block, less than 5

global.blockchain = new Blockchain(); // copy of the blockchain

global.transactions = []; // current transactions

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/`);
});