const {getAuthUrl, makeEncodedParams} = require('./utils');

class AuthService{
    base_url = 'https://accounts.zoho.com/oauth/v2';

    constructor(
        dispatcherService
    ){
        this._dispatcherService = dispatcherService;
    }

    /**
     * Retrieves Zoho Authorize code  from a given client_id and redirect_uri
     * @param client_id
     * @param redirect_uri
     * @returns {string}
     */
    createAuthorizeLink(
        client_id,
        redirect_uri,
    ){
        const url = getAuthUrl('auth');
        const urlWithParams = url + makeEncodedParams({
            scope: 'ZohoInventory.FullAccess.all',
            client_id,
            state: '{}',
            response_type: 'code',
            redirect_uri,
            access_type: 'offline'
        });
        return urlWithParams;
    }

    /**
     * Calls Zoho API to authenticate once the authorize code is retrieved from the authorize link
     * @param code Authorize code
     * @param client_id Client ID
     * @param client_secret Client Secret
     * @param redirect_uri Redirect URI
     * @returns {Promise<void>}
     */
    async authenticate(
        code, client_id, client_secret, redirect_uri
    ){
        const url = getAuthUrl('token');
        return this._dispatcherService.dispatch(url, 'POST', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: JSON.stringify({
                code,
                client_id,
                client_secret,
                redirect_uri,
                grant_type: 'authorization_code',
                scope: 'ZohoInventory.FullAccess.all',
                state: '{}'
            })
        });
    }
}

module.exports = AuthService;