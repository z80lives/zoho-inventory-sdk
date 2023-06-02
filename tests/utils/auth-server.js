const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const httpDispatcher = require('../../lib/http-dispatcher-service');
const AuthService = require('../../lib/auth.service');

app.get('/', (req, res) => {
    res.send({code: 0, message: "Test Authentication Endpoint"});
});

app.listen(port, () => {
    const authService = new AuthService(new httpDispatcher.HttpDispatcher());

    const authLink = authService.createAuthorizeLink(process.env.ZOHO_CLIENT_ID, process.env.ZOHO_REDIRECT_URI);
    console.log("Listening for authorization code on port " + port + "...");
    console.log("Please visit the following URL to get your authorization code: "+ authLink);
});