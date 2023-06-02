require('dotenv').config();

const token = process.env.ACCESS_TOKEN;

class HttpDispatcherService {
    constructor(){
    }

    _getHeaders(){
        return {
            'Content-Type': 'application/json',
            'Authorization': 'Zoho-oauthtoken ' + token,
        };
    }

    async dispatch(url, method, user_options={}){
        return fetch(url, {
            method: method,
            headers: this._getHeaders(),
            ...(user_options?user_options:{})
        }).then(r => r.json());
    }
}

module.exports = {
    HttpDispatcher: HttpDispatcherService
};
