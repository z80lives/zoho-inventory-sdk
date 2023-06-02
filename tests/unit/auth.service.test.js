const AuthService = require('../../lib/auth.service');

const {expect} = require('chai');

describe('AuthService', () => {
    let authService;

    it("Can create an instance of AuthService", () => {
        authService = new AuthService({
            dispatch: (url, method, options) => {
                return {
                    url, method, ...options
                }
            }
        });
        expect(authService).to.be.instanceof(AuthService);
    })

    it("Can generate a valid authorize link", () => {
        const result = authService.createAuthorizeLink(
            'client_id',
            'https://authorize_link/'
        );
        const expected_output = 'https://accounts.zoho.com/oauth/v2/auth?scope=ZohoInventory.FullAccess.all&client_id=client_id&state=%7B%7D&response_type=code&redirect_uri=https%3A%2F%2Fauthorize_link%2F&access_type=offline';
        expect(result).to.equal(expected_output);
    });

    it("Can make authenticate request", () => {
        authService.authenticate(
            'code',
            'client_id',
            'client_secret',
            'https://redirect_uri/'
        ).then(result => {
            const expected_output = {
                url: 'https://accounts.zoho.com/oauth/v2/token',
                method: 'POST',
                body: '{"code":"code","client_id":"client_id","client_secret":"client_secret","redirect_uri":"https://redirect_uri/","grant_type":"authorization_code","scope":"ZohoInventory.FullAccess.all","state":"{}"}'
            };
            expect(result).to.deep.equal(expected_output);
        });
    });
});