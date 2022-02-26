function brew(app) {
    app.get("/brew", function (request, response) {
        response
            .status(418) // HTTP status code 418: I'm a teapot
            .send("I'm a teapot, so I cannot brew coffee!"); // Response message
    });
}

module.exports = brew;