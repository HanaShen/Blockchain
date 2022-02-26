function generateRandomIPv4() {//randomly generate a mock IP address

    let ipv4 = "";

    //network 
    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";


    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";


    //host 
    ipv4 += Math.floor(Math.random() * 255) + 1;

    ipv4 += ".";



    ipv4 += Math.floor(Math.random() * 255) + 1;



    return ipv4;

}



// Generates a random money amount as a mock amount

function generateRandomMoney() {
    //randomly generate mock amount
    return Math.floor(Math.random() * 1000000);

}
class Transaction {

    constructor(fromAddress = "", toAddress = "", amount = 0) {

        this.fromAddress = generateRandomIPv4();

        this.toAddress = generateRandomIPv4();

        this.amount = generateRandomMoney();

    }



    // Returns a pretty-print version of the transaction

    prettify() {

        let txStr = `<div>Host <i>${this.fromAddress}</i> sent <i>${this.toAddress}</i> \$${this.amount}.</div>`;

        return txStr;

    }

}


// Export this object to be used elsewhere

module.exports = Transaction;