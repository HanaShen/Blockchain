const Block = require("./block"); //block definition



class Blockchain {

    constructor() {

        // chain of blocks

        this.chain = [new Block(Array(65).join("0"))]; // genesis block

    }

    getLastBlock() {
        //return the last block in the chain
        return this.chain[this.chain.length - 1];

    }
    getChainLength() {

        return this.chain.length;

    }

    addBlock() {
        // Adds a new block to the chain
        // get the previous block's hash to mine a new block

        let newBlock = new Block(this.getLastBlock().hash, global.transactions);



        // add the new block and make it immutable

        this.chain.push(Object.freeze(newBlock));

    }
    isChainValid(blockchain = this) {


        for (let i = 1; i < blockchain.chain.length; i++) {

            const currentBlock = blockchain.chain[i];

            const prevBlock = blockchain.chain[i - 1];
            //skipping the genesis block 


            // Validate the current block's hash from the previous

            if (

                // Check the hash, which was mined

                currentBlock.hash !== currentBlock.getHash() ||

                prevBlock.hash !== currentBlock.prevHash

            ) {

                return false;

            }


            let checkString = Array(global.difficulty + 1).join("0");

            if (!currentBlock.hash.startsWith(checkString)) {

                return false;

            }

        }


        // hashes are valid 
        return true;

    }
    replaceChain(newChain) {
        //check length and validity
        if (newChain.length <= this.chain.length) return;

        if (!this.isChainValid(newChain)) return;
        //if it's longer and valid, replace
        this.chain = newChain;

    }
    prettify() {

        let chainStr = "";

        for (let i = 0; i < this.chain.length; i++) {

            chainStr += this.chain[i].prettify();

            chainStr += "<br><hr>";

        }

        return chainStr;

    }

}



// Export this object to be used elsewhere

module.exports = Blockchain;