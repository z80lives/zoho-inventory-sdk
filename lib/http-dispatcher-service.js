const nodefetch = require('node-fetch');

class HttpDispatcher{
    constructor(){
    }

    getHeaders(){
        return {
            'Content-Type': 'application/json',
        };
    }

    async dispatch(url, method, body){
        const response = await nodefetch(url, {
            method: method,
            headers: this.getHeaders(),
            body: body
        });
        return response;
    }
}

module.exports = {
    HttpDispatcher
};
