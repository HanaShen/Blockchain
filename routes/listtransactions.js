const Transaction = require("../src/transaction");

function listtransactions(app) {
    
    app.get("/listtransactions", function (request, response) {
        //http response
        let txStr = "";

        for (let i = 0; i < global.transactions.length; i++) {

            txStr += global.transactions[i].prettify();

        }

        response

            .status(200) // HTTP status code 200: OK

            .send(txStr); // Response message

    });

}



module.exports = listtransactions;
