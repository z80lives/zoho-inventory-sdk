require('dotenv').config();

class HttpDispatcherService {
    constructor(token){
        this._token = token;
    }

    _getHeaders(){
        return {
            'Content-Type': 'application/json',
            'Authorization': 'Zoho-oauthtoken ' + this._token,
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
