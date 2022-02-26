function mine(app) {

    app.get("/mine", (request, response) => {

        // Add a block 
        global.blockchain.addBlock();

        //empty transactions
        global.transactions = [];



        // Send a success response

        let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;

        response.status(200).send(msg);

    });

}



module.exports = mine;
