const crypto = require("crypto"); // Used for encryption algorithms; Built-in

// Define a SHA256 hash function from our crypto library

function SHA256(message) {

    return crypto

        .createHash("sha256") // Set the hashing algorithm to SHA256

        .update(message) // Update the hash with the message

        .digest("hex"); // Return the hash as a hexadecimal string

}

class Block {

    constructor(prevHash = "", transactions = []) {

        this.timestamp = Date.now(); // Set the timestamp to now

        this.transactions = transactions; // list of transactions

        this.hash = this.getHash(); // current hash 

        this.prevHash = prevHash; // previous hash

        this.nonce = 0; // random value for mining



        // Mine the block

        this.mine();

    }

getHash() {

    let txStr = "";

    for (let i = 0; i < this.transactions.length; i++) {

        txStr += JSON.stringify(this.transactions[i]);

    }



    // Hash together...

    return SHA256(

        this.prevHash + // The previous hash,

            this.timestamp + // The timestamp of the block,

            txStr + // And all transactions,

            this.nonce // And let's toss in some random nonce for fun

    );

}

// Mine a new block (generate a hash that works)

mine() {///

    // loop until our hash starts with a string 0...000

    let checkString = Array(global.difficulty + 1).join("0");



    let tries = 0;

    while (!this.hash.startsWith(checkString)) {
        //get a different hash 

        this.nonce++;



        // Recompute the entire hash

        this.hash = this.getHash();



        // Count our tries!

        tries++;

    }




    console.log(`Block mined with ${tries} attempts. Hash: ${this.hash}`);

}
prettify() {

    // Add basic block parameters

    let blockStr = `<div><b>Block</b> #${this.hash}</div>`;

    blockStr += `<div><b>Timestamp:</b> ${this.timestamp}</div>`;

    blockStr += `<div><b>Previous Hash:</b> ${this.prevHash}</div>`;



    blockStr += "<div><b>Transactions:</b></div><div>";

    // Iterate through all transactions

    for (let i = 0; i < this.transactions.length; i++) {

        blockStr += "    " + this.transactions[i].prettify();

    }

    blockStr += "</div>";



    return blockStr;

}

}



// Export this object to be used elsewhere

module.exports = Block;
